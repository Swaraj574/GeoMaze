import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Menu, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Update login state
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className={`bg-white shadow-sm sticky-top ${styles.header}`}>
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="d-flex align-items-center"
        >
          <MapPin className="me-2 text-primary" size={32} />
          <span className="h4 fw-bold mb-0">TravelSafe</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-4">
          {["Features", "How It Works", "Demo", "Testimonials"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-dark text-decoration-none"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Auth Button (Login/Logout) */}
        {isLoggedIn ? (
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </motion.button>
        ) : (
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="btn btn-primary"
          >
            <Link to="/signup" className="text-white text-decoration-none">
              Sign Up
            </Link>
          </motion.button>
        )}

        {/* Mobile Menu Toggle */}
        <button className="d-md-none border-0 bg-transparent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="d-md-none bg-white py-2"
        >
          {["Features", "How It Works", "Demo", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="d-block py-2 px-3 text-dark text-decoration-none"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
