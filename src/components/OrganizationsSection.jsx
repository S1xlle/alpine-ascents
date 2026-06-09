import React, { useState } from 'react';

const Organizations = () => {
    const [search, setSearch] = useState("");
    const [level, setLevel] = useState("All");

    const clubs = [
        { name: "Alpine Mountaineering Club", loc: "Chamonix, France", level: "Pro", alt: "1,035m", weather: "-2°C" },
        { name: "Global Climbers Network", loc: "Kathmandu, Nepal", level: "Beginner", alt: "1,400m", weather: "12°C" },
        { name: "Summit Seekers Intl", loc: "Denver, USA", level: "Intermediate", alt: "1,609m", weather: "5°C" }
    ];

    const filteredClubs = clubs.filter(club => 
        (club.name.toLowerCase().includes(search.toLowerCase())) && 
        (level === "All" || club.level === level)
    );

    return (
        <section style={{ padding: '60px 10%', background: '#F8F9FA', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#102542', fontSize: '3rem', marginBottom: '40px' }}>GLOBAL ALPINE HUBS</h1>
            
            {/* نظام البحث والفلترة */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                <input placeholder="Search clubs..." onChange={(e) => setSearch(e.target.value)} style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #ddd' }} />
                <select onChange={(e) => setLevel(e.target.value)} style={{ padding: '12px 20px', borderRadius: '8px' }}>
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Pro">Pro</option>
                </select>
            </div>

            {/* عرض الكروت */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {filteredClubs.map((club, index) => (
                    <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee' }}>
                        <h3 style={{ color: '#102542' }}>{club.name}</h3>
                        <p style={{ color: '#666', marginBottom: '20px' }}>{club.loc} • {club.level}</p>
                        
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button style={{ flex: 1, padding: '12px', background: '#102542', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                                BOOK SESSION
                            </button>
                            <button onClick={() => window.open("https://maps.google.com")} style={{ flex: 1, padding: '12px', background: '#E67E22', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                                VIEW ON MAP
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Organizations;