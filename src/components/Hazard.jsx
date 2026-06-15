import React, { useEffect, useRef } from "react";
import "./Hazard.css";
import { gsap } from "gsap";

import hazardMountain from "../assets/hazard-mountain.png";

const hazards = [
  {
    title: "Avalanches",
    description:
      "Large masses of snow can suddenly slide down mountain slopes and threaten climbers.",
  },
  {
    title: "Rock Falls",
    description:
      "Loose rocks may fall unexpectedly, especially in steep mountainous terrain.",
  },
  {
    title: "Floods",
    description:
      "Heavy rainfall can rapidly increase water levels and create dangerous conditions.",
  },
  {
    title: "Wildfires",
    description:
      "Dry vegetation and strong winds can spread fire quickly across large areas.",
  },
  {
    title: "Storms",
    description:
      "Thunderstorms and severe weather can create life-threatening situations.",
  },
  {
    title: "Blizzards",
    description:
      "Heavy snowfall and strong winds reduce visibility and increase risk.",
  },
  {
    title: "Extreme Weather",
    description:
      "Rapid weather changes can expose climbers to severe cold and wind.",
  },
  {
    title: "Altitude Sickness",
    description:
      "High elevations may cause dizziness, headaches, and breathing difficulties.",
  },
];

function Hazard() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hazard-kicker, .hazard-title, .hazard-intro, .hazard-actions",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hazard-item",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hazard-section" id="hazards" ref={sectionRef}>
      <div className="hazard-top">
        <div className="hazard-copy">
          <span className="hazard-kicker">MOUNTAIN RISK DATABASE</span>

          <h1 className="hazard-title">
            Mountain
            <span>Hazards</span>
          </h1>

          <p className="hazard-intro">
            Understanding the risks of high-altitude environments is essential
            for safe and successful ascents.
          </p>
        </div>

        <div className="hazard-actions">
          <a href="#guidelines">← Go to Guidelines</a>
          <a href="#gallery">Go to Gallery →</a>
        </div>

        <div className="hazard-mountain-strip">
          <img src={hazardMountain} alt="Snowy mountain hazards" />
          <div className="hazard-light-beam"></div>
        </div>
      </div>

      <div className="hazard-grid">
        {hazards.map((hazard, index) => (
          <article className="hazard-item" key={hazard.title}>
            <span className="hazard-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="hazard-spark"></span>

            <div className="hazard-info">
              <h3>{hazard.title}</h3>
              <p>{hazard.description}</p>
            </div>

            <span className="hazard-arrow">›</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hazard;