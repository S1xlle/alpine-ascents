import React, { useEffect, useRef, useState } from "react";
import "./Techniques.css";
import { gsap } from "gsap";

const mountainBg = new URL("../assets/mountain-bg.jpg", import.meta.url).href;

const imgRM = new URL("../assets/tech-rm.jpg", import.meta.url).href;
const imgBL = new URL("../assets/tech-bl.jpg", import.meta.url).href;
const imgRA = new URL("../assets/tech-ra.jpg", import.meta.url).href;
const imgRP = new URL("../assets/tech-rp.jpg", import.meta.url).href;
const imgSA = new URL("../assets/tech-sa.jpg", import.meta.url).href;
const imgGT = new URL("../assets/tech-gt.jpg", import.meta.url).href;
const imgTN = new URL("../assets/tech-tn.jpg", import.meta.url).href;

const techniquesData = {
  RM: {
    title: "ROPE MANAGEMENT",
    phase: "MOUNTAIN PHASE 01",
    risk: "LOW",
    count: "1/7",
    description:
      "Proper handling, coiling, and sorting of climbing ropes to ensure seamless and safe movement across steep rock faces.",
    gear: "Dynamic Ropes, Slings",
    cardImage: imgRM,
  },
  BL: {
    title: "BELAYING",
    phase: "MOUNTAIN PHASE 02",
    risk: "MODERATE",
    count: "2/7",
    description:
      "Controlling the tension on the dynamic rope system so that a climber does not fall far if they suddenly slip.",
    gear: "Belay Devices, Carabiners",
    cardImage: imgBL,
  },
  RA: {
    title: "RISK ASSESSMENT",
    phase: "MOUNTAIN PHASE 03",
    risk: "MEDIUM",
    count: "3/7",
    description:
      "Evaluating weather conditions, terrain stability, and team physical stamina before undertaking an alpine ascent.",
    gear: "Altimeter, Barometer, Weather Kit",
    cardImage: imgRA,
  },
  RP: {
    title: "ROUTE PLANNING",
    phase: "MOUNTAIN PHASE 04",
    risk: "HIGH",
    count: "4/7",
    description:
      "Mapping out technical lines, coordinates, and emergency descent trails on high-altitude mountain topography.",
    gear: "Topographical Maps, Compass, GPS",
    cardImage: imgRP,
  },
  SA: {
    title: "SITUATIONAL AWARENESS",
    phase: "MOUNTAIN PHASE 05",
    risk: "MEDIUM",
    count: "5/7",
    description:
      "Maintaining constant observation of immediate surroundings to detect sudden ice falls or rock standard hazards.",
    gear: "Headlamps, Signaling Devices",
    cardImage: imgSA,
  },
  GT: {
    title: "GLACIER TRAVEL",
    phase: "MOUNTAIN PHASE 06",
    risk: "CRITICAL",
    count: "6/7",
    description:
      "Moving together with a highly synchronized rope team to safely cross treacherous snow bridges and deep crevasses.",
    gear: "Crampons, Team Ropes, Harnesses",
    cardImage: imgGT,
  },
  TN: {
    title: "TACTICAL NAVIGATION",
    phase: "MOUNTAIN PHASE 07",
    risk: "CRITICAL",
    count: "7/7",
    description:
      "Reading complex terrain dynamically, adjusting routes using active instruments during severe mountain whiteouts.",
    gear: "Satellite Messenger, GPS Overlay",
    cardImage: imgTN,
  },
};

const Techniques = () => {
  const keys = Object.keys(techniquesData);
  const [activeKey, setActiveKey] = useState("RM");
  const currentData = techniquesData[activeKey];
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prev) => {
        const index = keys.indexOf(prev);
        return keys[(index + 1) % keys.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".card-dynamic-img",
      { opacity: 0, scale: 1.12, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );

    gsap.fromTo(
      ".tech-card-title, .tech-card-desc, .gear-section",
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, [activeKey]);

  const handleImageMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 18,
      y: y * 14,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const resetImage = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section className="techniques-section-container" id="techniques">
      <div className="text-center mb-5 container-fluid">
        <span className="subtitle-tactical">TACTICAL NAVIGATION</span>
        <h1 className="main-title-tactical">IMPORTANT TECHNIQUES</h1>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          <div className="col-xl-6 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div className="navigation-wheel-outer">
              <div className="wheel-mountain-bg">
                <img
                  src={mountainBg}
                  alt="Mountain Center View"
                  className="mountain-img-fixed"
                />
              </div>

              <div className={`wheel-pointer pointer-angle-${activeKey}`}>
                🔺
              </div>

              {keys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={`wheel-node node-${key} ${
                    activeKey === key ? "active-wheel-node" : ""
                  }`}
                >
                  <span className="node-text">{key}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="info-card-glass">
              <div
                className="card-dynamic-image-wrapper mb-4"
                onMouseMove={handleImageMove}
                onMouseLeave={resetImage}
              >
                <img
                  ref={imageRef}
                  src={currentData.cardImage}
                  alt={currentData.title}
                  className="card-dynamic-img"
                  key={activeKey}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <span className="mountain-phase-text">
                  {currentData.phase}
                </span>

                <span
                  className={`risk-badge badge-${currentData.risk.toLowerCase()}`}
                >
                  {currentData.risk} ({currentData.count})
                </span>
              </div>

              <h2 className="tech-card-title">{currentData.title}</h2>

              <p className="tech-card-desc">{currentData.description}</p>

              <hr className="card-divider" />

              <div className="gear-section">
                <span className="gear-label">REQUIRED GEAR: </span>
                <span className="gear-values">{currentData.gear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techniques;