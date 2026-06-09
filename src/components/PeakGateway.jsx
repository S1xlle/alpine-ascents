import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PeakGateway.css';

const CLUBS_DATA = [
    { id: 1, name: "Alpine Mountaineering Club", loc: "Chamonix, France", level: "Pro", alt: "1,035m", weather: "-2°C", desc: "Expert led expeditions." },
    { id: 2, name: "Global Climbers Network", loc: "Kathmandu, Nepal", level: "Beginner", alt: "1,400m", weather: "12°C", desc: "Start your journey here." },
    { id: 3, name: "Summit Seekers Intl", loc: "Denver, USA", level: "Intermediate", alt: "1,609m", weather: "5°C", desc: "Technical climbing focus." },
    { id: 4, name: "Andes Peak Masters", loc: "Huaraz, Peru", level: "Pro", alt: "3,050m", weather: "0°C", desc: "High altitude mastery." }
];

const PeakGateway = () => {
    const [search, setSearch] = useState("");
    const [level, setLevel] = useState("All");

    // محرك البحث والفلترة (Advanced Memoized Logic)
    const filteredHubs = useMemo(() => {
        return CLUBS_DATA.filter(c => 
            (c.name.toLowerCase().includes(search.toLowerCase()) || c.loc.toLowerCase().includes(search.toLowerCase())) &&
            (level === "All" || c.level === level)
        );
    }, [search, level]);

    return (
        <section className="peak-gateway-section">
            <div className="gateway-header">
                <h1>PEAK GATEWAY PORTAL</h1>
                <p>Select your expedition hub and begin the ascent.</p>
                <div className="control-panel">
                    <input type="text" placeholder="Search by location..." onChange={(e) => setSearch(e.target.value)} />
                    <select onChange={(e) => setLevel(e.target.value)}>
                        <option value="All">All Difficulty Levels</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Pro">Pro</option>
                    </select>
                </div>
            </div>

            <div className="hub-grid">
                <AnimatePresence>
                    {filteredHubs.map(hub => (
                        <motion.div key={hub.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hub-card">
                            <div className="card-top">
                                <h3>{hub.name}</h3>
                                <span>{hub.level}</span>
                            </div>
                            <p className="loc">{hub.loc}</p>
                            <div className="stats-strip">
                                <span>{hub.alt}</span> | <span>{hub.weather}</span>
                            </div>
                            <p className="desc">{hub.desc}</p>
                            <button className="book-btn">BOOK EXPEDITION</button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};
export default PeakGateway;
