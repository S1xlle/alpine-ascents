import React from "react";
import "./Hazard.css";

const hazards = [
  {
    icon: "⚠️",
    title: "Avalanches",
    description:
      "Large masses of snow can suddenly slide down mountain slopes and threaten climbers.",
  },
  {
    icon: "🪨",
    title: "Rock Falls",
    description:
      "Loose rocks may fall unexpectedly, especially in steep mountainous terrain.",
  },
  {
    icon: "🌊",
    title: "Floods",
    description:
      "Heavy rainfall can rapidly increase water levels and create dangerous conditions.",
  },
  {
    icon: "🔥",
    title: "Wildfires",
    description:
      "Dry vegetation and strong winds can spread fire quickly across large areas.",
  },
  {
    icon: "🌩️",
    title: "Storms",
    description:
      "Thunderstorms and severe weather can create life-threatening situations.",
  },
  {
    icon: "❄️",
    title: "Blizzards",
    description:
      "Heavy snowfall and strong winds reduce visibility and increase risk.",
  },
  {
    icon: "🌨️",
    title: "Extreme Weather",
    description:
      "Rapid weather changes can expose climbers to severe cold and wind.",
  },
  {
    icon: "⛰️",
    title: "Altitude Sickness",
    description:
      "High elevations may cause dizziness, headaches, and breathing difficulties.",
  },
];

function Hazard() {
  return (
    <div className="hazard-page">

      {/* HERO */}
      <section className="hazard-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hazard-badge">
            ⚠️ SAFETY FIRST
          </span>

          <h1>HAZARD AWARENESS</h1>

          <p>
            Every mountain holds both beauty and danger. Understanding natural
            hazards is essential for safe and successful mountaineering.
          </p>

          <button className="hero-btn">
            Explore Hazards
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section className="hazard-section">

        <h2>Natural Hazards</h2>

        <div className="hazard-grid">
          {hazards.map((hazard, index) => (
            <div className="hazard-card" key={index}>

              <div className="hazard-icon">
                {hazard.icon}
              </div>

              <h3>{hazard.title}</h3>

              <p>{hazard.description}</p>

            </div>
          ))}
        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-box">
          <h3>150+</h3>
          <p>Hazards Studied</p>
        </div>

        <div className="stat-box">
          <h3>98%</h3>
          <p>Safety Awareness</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Rescue Teams</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Monitoring Systems</p>
        </div>

      </section>

    </div>
  );
}

export default Hazard;