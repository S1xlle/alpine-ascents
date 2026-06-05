import "./Hero.css";
import heroVideo from "../assets/hero-video.mp4";
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
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-shade"></div>

      <div className="hero-content">
        <div className="hero-topline">
            <span></span>
            <p>EXPLORE • CLIMB • DISCOVER</p>
            <span></span>
        </div>    

        <h1 className="hero-title">
          Alpine
          <span>Ascents</span>
        </h1>

        <p className="hero-text">
          Mountaineering is the sport and activity of climbing mountains. It
          combines hiking, rock climbing, snow travel, survival skills, and
          physical endurance.
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