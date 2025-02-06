import { motion } from "framer-motion";
import { CheckCircle } from "react-feather";
import styles from "./HowItWorks.module.css";

const steps = [
  "  Signup TravelSafe app and create an account",
  "Create or join a  group for your trip",
  "Share your real-time location with your group members",
  "Coordinate meet-ups and activities easily within the app",
  "Stay safe with emergency alerts and assistance features",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light">
      <div className="container">
        <motion.h2
          className="display-6 fw-bold text-center text-dark mb-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="d-flex align-items-start mb-3"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="text-success me-3 mt-1" size={24} />
              <p className="lead text-secondary">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
