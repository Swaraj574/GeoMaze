const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  try {
    // Get the Authorization header
    const authHeader = req.header("Authorization");

    // Check if token exists and is correctly formatted
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access Denied. No Token Provided." });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT);

    // Attach the decoded user info to request object
    req.user = decoded;

    // Check if the token has expired
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      return res.status(401).json({ error: "Token Expired. Please log in again." });
    }

    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid Token" });
  }
};

// Middleware for Admin Access
exports.adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Access Forbidden. Admins only." });
  }
  next();
};