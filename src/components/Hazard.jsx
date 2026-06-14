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
    <section className="hazard-section" id="hazard">

      {/* HEADER + CONNECTION */}
      <div className="hazard-header">
        <h1>⚠️ Mountain Hazards</h1>
        <p>
          This section is directly connected to <b>Guidelines</b> and <b>Gallery</b>.
        </p>

        <div className="nav-links">
          <a href="#guidelines">⬅ Go to Guidelines</a>
          <a href="#gallery">Go to Gallery ➜</a>
        </div>
      </div>

      {/* CARDS */}
      <div className="hazard-grid">
        {hazards.map((h, index) => (
          <div className="hazard-card" key={index}>
            <div className="hazard-icon">{h.icon}</div>
            <h3>{h.title}</h3>
            <p>{h.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hazard;