import "./Hero.css";
import heroImage from "../assets/hero-cinematic.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal-fog", 
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 1.4, duration: 2.2, ease: "power2.out" }
      );

      gsap.fromTo(".hero-title", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: .5, ease: "power4.out" }
      );

      gsap.fromTo(".hero-kicker, .hero-text, .hero-btn, .visitor-counter", 
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: .9, stagger: .15, ease: "power3.out" }
      );

      gsap.to(".hero-image", {
        scale: 1.28,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=900",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        y: -160,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=650",
          scrub: 1,
        },
      });

      gsap.to(".hero-reveal-fog", {
        opacity: 0,
        scale: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=700",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={(e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        gsap.to(".hero-image", {
          x: (x - 0.5) * 28,
          y: (y - 0.5) * 18,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(".hero-fog", {
          x: (x - 0.5) * 55,
          y: (y - 0.5) * 30,
          duration: 1.5,
          ease: "power2.out",
        });
      }}
    >
      <img src={heroImage} alt="Alpine Ascents" className="hero-image" />

      <div className="hero-overlay"></div>
      <div className="hero-light-beam"></div>
      <div className="hero-reveal-fog"></div>
      <div className="hero-fog"></div>
      <div className="hero-fog fog-two"></div>

      <div className="snow-particles">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="hero-content">
        <p className="hero-kicker">BEYOND THE SUMMIT</p>
        <h1 className="hero-title">
          ALPINE <span>ASCENTS</span>
        </h1>
        <p className="hero-text">
          Explore the world of mountaineering through history, techniques,
          records, safety, shelters, and expedition planning.
        </p>
        <a href="#types" className="hero-btn">Begin The Journey →</a>
      </div>

      <div className="visitor-counter">
        <p>EXPLORERS VISITED</p>
      </div>

      <div className="hero-status">
        <span>📍 LOCATION: AL-RAYYAN, QATAR</span>
        <span>● SYSTEM: ALPINE ASCENTS ACTIVE</span>
      </div>

      <div className="hero-intro">
        <span>PREPARING EXPEDITION</span>
      </div>
    </section>
  );
}

export default Hero;