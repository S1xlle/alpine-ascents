import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Latest.css";

const data = [
  {
    year: "2024",
    title: "Smart Climbing Gear Evolution",
    desc: "Lightweight intelligent equipment improves safety, stability, and endurance in extreme alpine environments.",
    details:
      "New generation climbing gear integrates sensors for altitude, heart rate, and environmental risks, improving survival rates in extreme conditions."
  },
  {
    year: "2025",
    title: "AI Navigation Systems",
    desc: "Real-time mountain mapping with predictive hazard detection.",
    details:
      "AI-powered mapping systems analyze weather, snow density, and terrain risks in real time to suggest optimal climbing routes."
  },
  {
    year: "2026",
    title: "Advanced Rescue Technology",
    desc: "Drone-assisted rescue missions reduce response time dramatically.",
    details:
      "Autonomous drones and satellite-linked trackers allow rescue teams to locate climbers within minutes in dangerous alpine zones."
  }
];

export default function Latest() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="latest-section" id="latest">

      {/* HEADER */}
      <div className="latest-header">
        <h2>Latest Developments</h2>
        <p>Innovation shaping the future of extreme mountain exploration</p>
      </div>

      {/* GRID */}
      <div className="latest-grid">

        {data.map((item, i) => (
          <motion.div
            key={i}
            className="latest-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="year-badge">{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button onClick={() => setSelected(item)}>
              Read More
            </button>

            <div className="glow"></div>
            <div className="shine"></div>
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-box"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2>{selected.title}</h2>
              <span className="year-badge">{selected.year}</span>
              <p>{selected.details}</p>

              <button onClick={() => setSelected(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}