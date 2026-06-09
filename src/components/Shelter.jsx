import React, { useState } from 'react';
import './Shelter.css';
import hut from '../assets/hut.jpg';
import basecamp from '../assets/basecamp.jpg';
import tents from '../assets/tents.jpg';
import snowcave from '../assets/snowcave.jpg';
import bivouac from '../assets/bivouac.jpg';

const shelterData = [
  { id: 'hut', name: 'Mountain Hut', img: hut, diff: 'Easy', gear: 'Sleeping Bag, Stove', tip: 'Always check hut capacity.' },
  { id: 'base', name: 'Base Camp', img: basecamp, diff: 'Moderate', gear: 'Large Tent, Food Supply', tip: 'Organize your gear.' },
  { id: 'tent', name: 'Expedition Tent', img: tents, diff: 'Moderate', gear: '4-Season Tent, Thermal Mat', tip: 'Anchor your tent well.' },
  { id: 'snow', name: 'Snow Cave', img: snowcave, diff: 'Expert', gear: 'Snow Saw, Shovel', tip: 'Keep entrance clear.' },
  { id: 'bivouac', name: 'Emergency Bivouac', img: bivouac, diff: 'Expert', gear: 'Bivy Sack, Emergency Blanket', tip: 'Keep it dry.' }
];

const Shelter = () => {
  const [active, setActive] = useState(shelterData[1]); // لتبدأ على Base Camp كما في الصورة

  return (
    <section className="shelter-section">
      <h2 className="section-title">SURVIVAL METHODS & GEAR</h2>
      <div className="shelter-wrapper">
        <div className="image-display">
          <img src={active.img} alt={active.name} />
        </div>
        <div className="info-panel">
          <h3>{active.name.toUpperCase()}</h3>
          <p><strong>Difficulty:</strong> {active.diff}</p>
          <p><strong>Required Gear:</strong> {active.gear}</p>
          <p className="tip"><em>Tip: {active.tip}</em></p>
          <div className="nav-list">
            {shelterData.map(item => (
              <button 
                key={item.id} 
                onClick={() => setActive(item)}
                className={active.id === item.id ? 'active' : ''}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shelter;