import React, { useEffect, useRef } from "react";
import "./Guidelines.css";
import { gsap } from "gsap";

const data = [
  {
    title: "Weather Intelligence",
    desc: "Always check mountain weather conditions before starting any climb to avoid sudden dangers.",
  },
  {
    title: "Never Climb Alone",
    desc: "Professional climbers always operate in teams to ensure safety in extreme environments.",
  },
  {
    title: "Safety Equipment",
    desc: "Helmet, ropes, harness, and proper gear are mandatory for all mountain expeditions.",
  },
  {
    title: "Essential Supplies",
    desc: "Carry food, water, navigation tools, and first aid kit for survival in high altitudes.",
  },
  {
    title: "Respect Nature",
    desc: "Protect wildlife and natural environment by avoiding any damage during expeditions.",
  },
];

function Guidelines() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".guideline-card",
        {
          x: 0,
          y: -120,
          scale: 0.72,
          rotate: () => gsap.utils.random(-14, 14),
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.13,
          ease: "back.out(1.6)",
        }
      );

      gsap.fromTo(
        ".guidelines-kicker, .guidelines-title, .guidelines-desc",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="guidelines-section" id="guidelines" ref={sectionRef}>
      <div className="guidelines-light"></div>

      <div className="guidelines-header">
        <span className="guidelines-kicker">EXPEDITION SAFETY CODE</span>

        <h2 className="guidelines-title">
          Survival
          <span>Guidelines</span>
        </h2>

        <p className="guidelines-desc">
          Essential safety rules used by professional mountaineers in extreme conditions.
        </p>
      </div>

      <div className="guidelines-grid">
        {data.map((item, index) => (
          <article className="guideline-card" key={index}>
            <span className="guideline-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="guideline-divider"></div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Guidelines;