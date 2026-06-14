import React from "react";
import "./Guidelines.css";

const data = [
  {
    icon: "🌦️",
    title: "Weather Intelligence",
    desc: "Always check mountain weather conditions before starting any climb to avoid sudden dangers.",
  },
  {
    icon: "🧗",
    title: "Never Climb Alone",
    desc: "Professional climbers always operate in teams to ensure safety in extreme environments.",
  },
  {
    icon: "🪖",
    title: "Safety Equipment",
    desc: "Helmet, ropes, harness, and proper gear are mandatory for all mountain expeditions.",
  },
  {
    icon: "🎒",
    title: "Essential Supplies",
    desc: "Carry food, water, navigation tools, and first aid kit for survival in high altitudes.",
  },
  {
    icon: "🌿",
    title: "Respect Nature",
    desc: "Protect wildlife and natural environment by avoiding any damage during expeditions.",
  },
];

function Guidelines() {
  return (
    <section className="guidelines-section" id="guidelines">

      <div className="guidelines-header">
        <h2>Survival Guidelines</h2>
        <p>
          Essential safety rules used by professional mountaineers in extreme conditions.
        </p>
      </div>

      <div className="guidelines-grid">
        {data.map((item, index) => (
          <div className="guideline-card" key={index}>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Guidelines;