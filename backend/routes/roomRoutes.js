const express = require('express');
const router = express.Router();
const Room = require('../models/Rooms');
const { authMiddleware } = require('../middleware/auth');

// Create a room
router.post('/create', authMiddleware, async (req, res) => {
  const { name } = req.body;
  try {
    const newRoom = new Room({
      name,
      owner: req.user._id, // Use the logged-in user's ID as the owner
      participants: [req.user._id],
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ message: 'Error creating room', error });
  }
});

// Join a room
router.post('/join/:roomId', authMiddleware, async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Add the user to the room
    if (!room.participants.includes(req.user._id)) {
      room.participants.push(req.user._id);
      await room.save();
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error joining room', error });
  }
});

module.exports = router;
