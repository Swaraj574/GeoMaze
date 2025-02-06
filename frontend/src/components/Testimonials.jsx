"use client"

import { motion } from "framer-motion";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    name: "Sarah T.",
    avatar: "/placeholder.svg",
    quote: "TravelSafe made our group trip so much easier! We never lost track of each other in crowded places.",
  },
  {
    name: "Mike R.",
    avatar: "/placeholder.svg",
    quote: "As a solo traveler, the emergency assistance feature gives me peace of mind in unfamiliar places.",
  },
  {
    name: "Emily L.",
    avatar: "/placeholder.svg",
    quote: "The user-friendly interface made it simple for even our less tech-savvy group members to use.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-primary text-white">
      <div className="container">
        <motion.h2
          className="display-6 fw-bold text-center mb-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-light text-dark shadow-sm p-4 rounded">
                <p className="lead">"{testimonial.quote}"</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <span className="fw-semibold">{testimonial.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}