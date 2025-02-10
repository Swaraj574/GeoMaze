require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: "*", // Change based on your frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));

const server = http.createServer(app);

// WebSocket Setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hackathon Project API is running...");
});

app.use("/api/auth", userRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/location", locationRoutes);

// Store active user locations
const activeUsers = {}; 

io.on("connection", (socket) => {
  console.log("A user connected");

  // User joins a room
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);

    if (!activeUsers[roomId]) activeUsers[roomId] = [];

    // Send existing users' locations to the new user
    socket.emit("existingLocations", activeUsers[roomId]);
  });

  // Handle location updates
  socket.on("sendLocation", (locationData) => {
    const { roomId, latitude, longitude, userId, name } = locationData;

    if (!activeUsers[roomId]) activeUsers[roomId] = [];

    // Remove existing entry if user already exists
    activeUsers[roomId] = activeUsers[roomId].filter(user => user.userId !== userId);

    // Add updated location
    activeUsers[roomId].push({ userId, name, latitude, longitude });

    // Broadcast updated location to all users in the room
    io.to(roomId).emit("locationUpdate", activeUsers[roomId]);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected");

    // Remove user from all rooms
    for (const roomId in activeUsers) {
      activeUsers[roomId] = activeUsers[roomId].filter(user => user.socketId !== socket.id);
    }
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
