import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import io from "socket.io-client";
import MarkerImg from "../images/marker.png";

const blackIcon = new L.Icon({
  iconUrl: MarkerImg,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationUpdater({ setUserPosition, roomId, socket, userName }) {
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watcher = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ latitude, longitude });

        socket.current.emit("sendLocation", {
          roomId,
          latitude,
          longitude,
          userId: socket.current.id, // Ensure this is unique
          name: userName,
        });

        map.setView([latitude, longitude], 15);
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, [map, setUserPosition, roomId, socket, userName]);

  return null;
}

function Map() {
  const [userLocations, setUserLocations] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const { roomId } = useParams();
  const socket = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("name") || "User";

  useEffect(() => {
    socket.current = io("http://localhost:3000", {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    socket.current.emit("joinRoom", roomId);

    socket.current.on("existingLocations", (locations) => {
      setUserLocations(locations);
    });

    socket.current.on("locationUpdate", (locations) => {
      setUserLocations(locations);
    });

    return () => {
      socket.current.off("existingLocations");
      socket.current.off("locationUpdate");
      socket.current.disconnect();
    };
  }, [roomId]);

  return (
    <MapContainer
      center={userPosition ? [userPosition.latitude, userPosition.longitude] : [20.5937, 78.9629]}
      zoom={userPosition ? 15 : 5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
      />

      <LocationUpdater setUserPosition={setUserPosition} roomId={roomId} socket={socket} userName={userName} />

      {userLocations.map((user, index) => (
        <Marker key={user.userId || `user-${index}`} position={[user.latitude, user.longitude]} icon={blackIcon}>
          <Popup>{user.name || "User"}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
