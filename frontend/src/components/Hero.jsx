import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import main from "../images/main.jpg"


export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <motion.div
          className="col-md-6 mb-4 mb-md-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-5 fw-bold text-dark mb-3">Travel Smart, Stay Connected and Stay Safe.</h1>
          <p className="lead text-secondary mb-4">
            Real-time location sharing and group coordination for travelers. Navigate unfamiliar places with confidence
            and stay safe on your adventures.
          </p>
          <button className="btn btn-primary btn-lg" onClick={()=> navigate("/signup")}>Get Started</button>
        </motion.div>
        <motion.div
          className="col-md-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={main}
            alt="Travel group using TravelSafe app"
            className="img-fluid rounded shadow"
          />
        </motion.div>
      </div>
    </section>
  );
}
