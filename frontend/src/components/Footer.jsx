import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "react-feather";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`bg-dark text-white py-5 ${styles.footer}`}>
      <div className="container">
        <div className="row g-4">
          <motion.div 
            className="col-md-4"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="h4 fw-bold mb-3">TravelSafe</h3>
            <p className="mb-3">Ensuring safe and coordinated travel experiences for everyone.</p>
            <div className="d-flex align-items-center mb-2">
              <MapPin className="me-2" />
              <span>123 Travel Street, Adventure City</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone className="me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center">
              <Mail className="me-2" />
              <span>info@travelsafe.com</span>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="h5 fw-semibold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
              <li><a href="#how-it-works" className="text-white text-decoration-none">How It Works</a></li>
              <li><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
            </ul>
          </motion.div>
          <motion.div 
            className="col-md-4"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="h5 fw-semibold mb-3">Legal</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="border-top border-secondary mt-4 pt-4 text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-0">&copy; 2025 TravelSafe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
