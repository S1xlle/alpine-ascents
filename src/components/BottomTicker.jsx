import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaClock, FaMountain, FaSatellite } from "react-icons/fa";
import gsap from "gsap";
import "./BottomTicker.css";

const BottomTicker = () => {
  const tickerRef = useRef(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    gsap.fromTo(
      tickerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-wrapper" ref={tickerRef}>
      <div className="ticker-track">

        <div className="ticker-item">
          <FaMapMarkerAlt />
          <span>LOCATION: THE PEARL, QATAR</span>
        </div>

        <div className="ticker-item">
          <FaClock />
          <span>SYSTEM TIME: {time}</span>
        </div>

        <div className="ticker-item">
          <FaMountain />
          <span>STATUS: ALPINE ASCENTS ACTIVE</span>
        </div>

        <div className="ticker-item">
          <FaSatellite />
          <span>GPS LINK ESTABLISHED</span>
        </div>

        {/* نسخة ثانية للحركة اللانهائية */}
        <div className="ticker-item">
          <FaMapMarkerAlt />
          <span>LOCATION: THE PEARL, QATAR</span>
        </div>

        <div className="ticker-item">
          <FaClock />
          <span>SYSTEM TIME: {time}</span>
        </div>

        <div className="ticker-item">
          <FaMountain />
          <span>STATUS: ALPINE ASCENTS ACTIVE</span>
        </div>

        <div className="ticker-item">
          <FaSatellite />
          <span>GPS LINK ESTABLISHED</span>
        </div>

      </div>
    </div>
  );
};

export default BottomTicker;