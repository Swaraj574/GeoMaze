import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Room() {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (!roomId.trim() || !userName.trim()) {
      alert("Room ID and Username are required!");
      return;
    }
    navigate(`/map/${roomId}?name=${encodeURIComponent(userName)}`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '15px' }}>
        <h2 className="text-center mb-4">Create or Join Room</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleJoinRoom}>Join Room</button>
      </div>
    </div>
  );
}

export default Room;
