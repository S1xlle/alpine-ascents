import React from 'react';
import './RecordsGrid.css'; // تأكدي من وجود ملف التنسيق الخاص به

const RecordsGrid = () => {
    const records = [
        { title: "Highest Mountain", content: "Mount Everest" },
        { title: "First Everest Ascent", content: "Edmund Hillary & Tenzing Norgay" },
        { title: "Youngest Everest Climber", content: "Jordan Romero (13 years old)" },
        { title: "Fastest Everest Ascent", content: "Lhakpa Gelu Sherpa (10h 56m)" }
    ];

    return (
        <section className="records-section">
            <h2 className="records-title">FAMOUS MOUNTAINEERING RECORDS</h2>
            <div className="records-grid">
                {records.map((record, index) => (
                    <div key={index} className="record-card">
                        <h3>{record.title}</h3>
                        <p>{record.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecordsGrid;