import React, { useState, useMemo } from 'react';

// نموذج الحجز الاحترافي
const BookingModal = ({ club, onClose }) => (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', width: '450px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <h2 style={{ color: '#102542', textAlign: 'center', marginBottom: '20px' }}>Book: {club.name}</h2>
            <input placeholder="Full Name" style={inputStyle} />
            <input placeholder="Phone Number" style={inputStyle} />
            <input type="email" placeholder="Email Address" style={inputStyle} />
            <select style={inputStyle}>
                <option>Select Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
            </select>
            <input type="number" placeholder="Number of participants" style={inputStyle} />
            <textarea placeholder="Medical conditions or special notes?" style={{...inputStyle, height: '80px'}} />
            
            <button onClick={onClose} style={buttonStyle}>CONFIRM BOOKING</button>
            <button onClick={onClose} style={{...buttonStyle, background: '#eee', color: '#333', marginTop: '10px'}}>Cancel</button>
        </div>
    </div>
);

// التنسيقات
const inputStyle = { width: '100%', margin: '8px 0', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' };
const buttonStyle = { width: '100%', padding: '15px', background: '#102542', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

const Organizations = () => {
    const [search, setSearch] = useState("");
    const [level, setLevel] = useState("All");
    const [selectedClub, setSelectedClub] = useState(null);

    const hubs = [
        { id: 1, name: "Alpine Mountaineering Club", loc: "Chamonix, France", level: "Pro", alt: "1,035m", weather: "-2°C" },
        { id: 2, name: "Global Climbers Network", loc: "Kathmandu, Nepal", level: "Beginner", alt: "1,400m", weather: "12°C" },
        { id: 3, name: "Summit Seekers Intl", loc: "Denver, USA", level: "Intermediate", alt: "1,609m", weather: "5°C" }
    ];

    const filtered = useMemo(() => {
        return hubs.filter(h => (h.name.toLowerCase().includes(search.toLowerCase())) && (level === "All" || h.level === level));
    }, [search, level]);

    return (
        <section style={{ padding: '60px 10%', background: '#F8F9FA', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#102542', fontSize: '3rem', marginBottom: '40px' }}>GLOBAL ALPINE HUBS</h1>
            
            {/* الفلترة */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                <input placeholder="Search clubs..." onChange={(e) => setSearch(e.target.value)} style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #ccc', width: '250px' }} />
                <select onChange={(e) => setLevel(e.target.value)} style={{ padding: '12px 20px', borderRadius: '8px' }}>
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Pro">Pro</option>
                </select>
            </div>

            {/* عرض الكروت */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
                {filtered.map(club => (
                    <div key={club.id} style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ color: '#102542' }}>{club.name}</h3>
                        <p style={{ color: '#666' }}>{club.loc} • {club.level}</p>
                        <div style={{ margin: '20px 0', fontWeight: 'bold' }}>{club.alt} | {club.weather}</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button onClick={() => setSelectedClub(club)} style={{ flex: 1, padding: '12px', background: '#102542', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>BOOK SESSION</button>
                            <button onClick={() => window.open('https://www.google.com/maps', '_blank')} style={{ flex: 1, padding: '12px', background: '#E67E22', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>VIEW ON MAP</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedClub && <BookingModal club={selectedClub} onClose={() => setSelectedClub(null)} />}
        </section>
    );
};

export default Organizations;