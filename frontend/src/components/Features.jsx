import { motion } from "framer-motion";
import { MapPin, Users, Bell, Lock, Zap, Wifi } from "react-feather";
import styles from "./Features.module.css";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Location Sharing",
    description: "Share live locations with group members on a map.",
  },
  {
    icon: Users,
    title: "Group Coordination",
    description: "Plan trips, set meeting points, and track group movements.",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "Send location-based emergency alerts to contacts or services.",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    description: "Control who can see your location for safety.",
  },
  {
    icon: Zap,
    title: "Notifications & Alerts",
    description: "Get updates on arrivals, itinerary changes, or emergencies.",
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Track locations even without internet, using GPS.",
  },
];

export default function Features() {
  return (
    <section id="features" className={`py-5 bg-white text-center ${styles.featuresSection}`}>
      <div className="container">
        <motion.h2
          className="display-5 fw-bold text-dark mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Sets Us Apart
        </motion.h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="mb-3 text-primary">
                  <feature.icon className="h1" />
                </div>
                <h3 className="h5 fw-semibold text-dark mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
