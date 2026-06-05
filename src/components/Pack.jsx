import { useState } from "react";
import "./Pack.css";
import packBg from "../assets/pack-bg.jpg";

const gearData = {
  alpine: ["Ice Axe", "Crampons", "Helmet", "Rope", "Harness"],
  expedition: ["Tent", "Sleeping Bag", "Stove", "Rope", "Satellite GPS"],
  ice: ["Technical Ice Axes", "Crampons", "Ice Screws", "Helmet", "Harness"],
  rock: ["Climbing Shoes", "Harness", "Quickdraws", "Helmet", "Rope"],
  ski: ["Touring Skis", "Beacon", "Probe", "Shovel", "Helmet"],
  high: ["Oxygen System", "Down Suit", "Crampons", "Ice Axe", "High Altitude Boots"],
};

const labels = {
  alpine: "Alpine",
  expedition: "Expedition",
  ice: "Ice",
  rock: "Rock",
  ski: "Ski",
  high: "High Altitude",
};

function Pack() {
  const [active, setActive] = useState(null);

  return (
    <section
      className={`pack-section ${active ? "is-selected" : ""}`}
      style={{
        backgroundImage: `linear-gradient(
          rgba(248,249,250,0.42),
          rgba(248,249,250,0.48)
        ), url(${packBg})`,
      }}
    >
      <p className="pack-subtitle">Gear Up For The Adventure</p>
      <h2>Pack For The Expedition</h2>

      <p className="choose-title">
        {active ? "Your expedition loadout is ready." : "Choose Your Expedition"}
      </p>

      <div className="expedition-selector">
        {Object.keys(labels).map((key) => (
          <button
            key={key}
            className={active === key ? "active" : ""}
            onClick={() => setActive(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      {active && (
        <div className="backpack-area">
          {gearData[active].map((item, index) => (
            <div className={`gear gear${index + 1}`} key={item}>
              {item}
            </div>
          ))}

          <div className="backpack">
            <div className="backpack-inner">
              <h3>{labels[active]}</h3>
              <p>Essential equipment for this adventure.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Pack;