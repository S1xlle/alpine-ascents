import "./Hero.css";
import heroImage from "../assets/hero-new.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 12487;

    const timer = setInterval(() => {
      current += 120;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <img src={heroImage} alt="Alpine Ascents" className="hero-image" />

      <div className="hero-content">
        <p className="hero-kicker">EXPLORE • CLIMB • DISCOVER</p>

        <h1 className="hero-title">ALPINE ASCENTS</h1>

        <p className="hero-text">
          Explore the history, techniques, hazards, and remarkable records of
          mountaineering while discovering the skills, equipment, and adventures
          that define life in the mountains.
        </p>

        <a href="#types" className="hero-btn">
          Explore More →
        </a>
      </div>

      <div className="visitor-counter">
        <h2>{count.toLocaleString()}</h2>
        <p>EXPLORERS VISITED</p>
      </div>
    </section>
  );
}

export default Hero;