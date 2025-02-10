import { motion } from "framer-motion";
import styles from "./CallToAction.module.css";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className={`py-5 bg-light text-center ${styles.callToAction}`}>
      <div className="container">
        <motion.h2
          className="display-5 fw-bold text-dark mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Travel Safer?
        </motion.h2>
        <motion.p
          className="fs-4 text-secondary mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join TravelSafe today and experience worry-free group travel coordination.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="btn btn-primary btn-lg fw-bold px-4 py-2" onClick={()=>navigate('/signup')}>
            get started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
