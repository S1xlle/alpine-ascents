import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BottomTicker.css';

const BottomTicker = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const tickerRef = useRef(null);

    useEffect(() => {
        // تحديث الوقت كل ثانية
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // تأثير الحركة (GSAP)
        gsap.fromTo(tickerRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
        );

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="ticker-bar" ref={tickerRef}>
            <div className="ticker-content">
                <span>📍 LOCATION: AL-RAYYAN, QATAR</span>
                <span>🕒 SYSTEM TIME: {time}</span>
                <span>⛰️ STATUS: ALPINE ASCENTS ACTIVE</span>
            </div>
        </div>
    );
};

export default BottomTicker;