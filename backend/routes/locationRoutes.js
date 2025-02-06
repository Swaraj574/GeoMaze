const express = require('express');
const router = express.Router();
const Location = require('../models/Location');
const { authMiddleware } = require('../middleware/auth');

// Update location
router.post('/location', authMiddleware, async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const location = new Location({
      user: req.user._id,
      latitude,
      longitude,
    });

    await location.save();
    // Broadcast location to the connected clients in the room (via WebSocket)
    io.to(req.user.roomId).emit('locationUpdate', { userId: req.user._id, latitude, longitude });

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: 'Error updating location', error });
  }
});

module.exports = router;
