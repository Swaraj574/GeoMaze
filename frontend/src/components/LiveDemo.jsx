"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "react-feather";
import styles from "./LiveDemo.module.css";

const users = [
  { id: 1, name: "Alice", color: "bg-danger" },
  { id: 2, name: "Bob", color: "bg-primary" },
  { id: 3, name: "Charlie", color: "bg-success" },
];

export default function LiveDemo() {
  const [positions, setPositions] = useState(users.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        users.map(() => ({
          x: Math.random() * 90,
          y: Math.random() * 90,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-5 bg-white">
      <div className="container">
        <motion.h2
          className="display-6 fw-bold text-center text-dark mb-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Live Demo
        </motion.h2>
        <div className={`${styles.mapContainer} position-relative bg-light rounded overflow-hidden mx-auto`}>          
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              className={`position-absolute d-flex flex-column align-items-center text-white ${user.color} p-2 rounded-circle`}
              animate={{ left: `${positions[index].x}%`, top: `${positions[index].y}%` }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{ width: "50px", height: "50px" }}
            >
              <MapPin size={20} />
              <span className="small">{user.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
