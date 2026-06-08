import { useState } from "react";
import "./Records.css";

import everest from "../assets/records/everest.mp4";
import firstSummit from "../assets/records/first-summit.mp4";
import deathZone from "../assets/records/death-zone.mp4";
import oxygenMask from "../assets/records/oxygen-mask.mp4";
import summitSunrise from "../assets/records/summit-sunrise.mp4";

const records = [
  {
    video: everest,
    label: "THE ROOF OF THE WORLD",
    number: "8,849 m",
    title: "Mount Everest",
    text: "The highest mountain above sea level on Earth.",
  },
  {
    video: firstSummit,
    label: "HISTORIC SUMMIT",
    number: "1953",
    title: "First Everest Ascent",
    text: "Edmund Hillary and Tenzing Norgay reached the summit on May 29, 1953.",
  },
  {
    video: deathZone,
    label: "EXTREME ALTITUDE",
    number: "8,000 m+",
    title: "The Death Zone",
    text: "Above this altitude, the human body can no longer acclimatize effectively.",
  },
  {
    video: oxygenMask,
    label: "THIN AIR",
    number: "33%",
    title: "Available Oxygen",
    text: "Near Everest’s summit, available oxygen is roughly one third of sea level.",
  },
  {
    video: summitSunrise,
    label: "THE GIANTS",
    number: "14",
    title: "Eight-Thousanders",
    text: "Only 14 mountains on Earth rise above 8,000 meters.",
  },
];

function Records() {
  const [active, setActive] = useState(0);
  const current = records[active];

  return (
    <section className="records-section" id="records">
      <div className="records-opening">
        <div className="records-topline">
          <span></span>
          <p>REAL RECORDS • EXTREME HEIGHTS • HUMAN LIMITS</p>
          <span></span>
        </div>

        <h2 className="records-title">
          The
          <span>Ascent</span>
        </h2>

        <p className="records-opening-text">
          A cinematic climb through real mountaineering records that shaped the
          history of high-altitude adventure.
        </p>
      </div>

      <div className="records-player">
        <video
          key={current.video}
          autoPlay
          muted
          loop
          playsInline
          className="records-main-video"
        >
          <source src={current.video} type="video/mp4" />
        </video>

        <div className="records-player-overlay"></div>

        <div className="records-player-content">
          <p className="record-label">{current.label}</p>
          <h3>{current.number}</h3>
          <h4>{current.title}</h4>
          <p>{current.text}</p>
        </div>

        <div className="records-controls">
          {records.map((record, index) => (
            <button
              key={record.title}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              {record.title}
            </button>
          ))}
        </div>

        <button
          className="records-book-btn"
          onClick={() => {
            const bookBtn = document.querySelector(".header-book-btn");
            if (bookBtn) bookBtn.click();
          }}
        >
          Book Your Ascent →
        </button>
      </div>
    </section>
  );
}

export default Records;