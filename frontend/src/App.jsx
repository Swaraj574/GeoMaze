import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import LiveDemo from "./components/LiveDemo"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Room from "./components/Room"
import Map from "./components/Map"
import "./App.css"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
      >
        <Header />
        <main>
          <Routes>
            {/* Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <HowItWorks />
                  <LiveDemo />
                  <Testimonials />
                  <CallToAction />
                </>
              }
            />
            {/* Auth and Other Pages */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/room" element={<Room />} />
            <Route path="/map/:roomId" element={<Map />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  )
}

export default App
