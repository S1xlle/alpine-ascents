import React from "react";
import "./Latest.css";

const Latest = () => {
  const data = [
    {
      year: "2024",
      title: "Smart Climbing Gear Evolution",
      desc: "Lightweight intelligent equipment improves safety, stability, and endurance in extreme alpine environments.",
    },
    {
      year: "2025",
      title: "AI Navigation Systems",
      desc: "Real-time mountain mapping with predictive hazard detection and optimized climbing routes using artificial intelligence.",
    },
    {
      year: "2026",
      title: "Advanced Rescue Technology",
      desc: "Drone-assisted rescue missions and smart tracking systems dramatically reduce response time in critical situations.",
    },
  ];

  return (
    <section className="latest-section" id="latest">

      <div className="latest-header">
        <h2>Latest Developments</h2>
        <p>Innovation shaping the future of extreme mountain exploration</p>
      </div>

      <div className="latest-grid">

        {data.map((item, index) => (
          <div className="latest-card" key={index}>

            <span className="year-badge">{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <div className="glow"></div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Latest;