import React, { useState } from 'react';
import './TechniquesBackup.css';

const TechniquesBackup = () => {
  const importantTechniques = [
    { 
      id: 1, 
      title: "Rope Management", 
      desc: "Proper handling, coiling, and sorting of climbing ropes to ensure seamless and safe movement across steep rock faces.", 
      label: "RM", 
      risk: "LOW (1/5)", 
      gear: "Dynamic Ropes, Slings" 
    },
    { 
      id: 2, 
      title: "Belaying", 
      desc: "Controlling the tension on the dynamic rope system so that a climber does not fall far if they suddenly slip.", 
      label: "BL", 
      risk: "MODERATE (2/5)", 
      gear: "Belay Devices, Carabiners" 
    },
    { 
      id: 3, 
      title: "Anchoring", 
      desc: "Securing solid, bombproof attachment points to rock, snow, or ice to anchor the entire team's climbing system.", 
      label: "AN", 
      risk: "MEDIUM (3/5)", 
      gear: "Pitons, Cams, Nuts" 
    },
    { 
      id: 4, 
      title: "Rappelling", 
      desc: "The crucial and tactical skill of descending a steep cliff or frozen mountain face using fixed ropes safely.", 
      label: "RP", 
      risk: "HIGH (4/5)", 
      gear: "Harness, Figure-8 Descender" 
    },
    { 
      id: 5, 
      title: "Navigation", 
      desc: "Using advanced tools like altimeters, maps, and traditional compasses to accurately track the trail during severe weather.", 
      label: "NV", 
      risk: "LOW (1/5)", 
      gear: "GPS, Altimeter, Topo Maps" 
    },
    { 
      id: 6, 
      title: "Glacier Travel", 
      desc: "Moving together with a highly synchronized rope team to safely cross treacherous snow bridges and deep crevasses.", 
      label: "GT", 
      risk: "CRITICAL (5/5)", 
      gear: "Crampons, Team Ropes" 
    },
    { 
      id: 7, 
      title: "Ice Axe Arrest", 
      desc: "The ultimate emergency survival move: instantly stabbing your ice axe into slopes to stop a high-speed sliding fall.", 
      label: "IA", 
      risk: "EMERGENCY (5/5)", 
      gear: "Technical Ice Axe, Helmet" 
    }
  ];

  const [activeNode, setActiveNode] = useState(importantTechniques[0]);

  // حساب زاوية الدوران لكل زر بناءً على ترتيبه (من أصل 7 نقاط)
  const getRotationAngle = (index) => (index / importantTechniques.length) * 360;

  return (
    <section className="advanced-compass-section py-5" id="techniques-backup">
      <div className="container py-5">
        
        {/* هيدر القسم */}
        <div className="text-center mb-5">
          <span className="backup-tag font-manrope">TACTICAL NAVIGATION</span>
          <h2 className="backup-main-title font-bebas">IMPORTANT <span className="text-orange-palette">TECHNIQUES</span></h2>
        </div>

        <div className="row g-5 align-items-center justify-content-center mt-2">
          
          {/* الجانب الأيسر: البوصلة بعد تكبير حجم الأزرار والرموز */}
          <div className="col-lg-5 col-md-6 d-flex justify-content-center">
            <div className="modern-compass-frame">
              <div className="modern-compass-dial">
                
                {/* السهم البرتقالي الحركي الموجه */}
                <div 
                  className="modern-compass-needle" 
                  style={{ transform: `translate(-50%, -50%) rotate(${getRotationAngle(activeNode.id - 1)}deg)` }}
                ></div>
                
                {importantTechniques.map((tech, index) => {
                  const angle = getRotationAngle(index);
                  return (
                    <button
                      key={tech.id}
                      className={`modern-compass-node ${activeNode.id === tech.id ? 'active-modern-node' : ''}`}
                      style={{ '--node-angle': `${angle}deg` }}
                      onMouseEnter={() => setActiveNode(tech)}
                    >
                      {/* نصوص تكتيكية كبيرة ومقروءة بوضوح */}
                      <span className="modern-node-text font-bebas">{tech.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: شاشة العرض (HUD) بالمصطلحات الجبلية المفهومة للتقييم */}
          <div className="col-lg-6 col-md-6">
            <div className="modern-radar-panel p-5">
              <div className="modern-radar-laser"></div>
              
              <div className="d-flex justify-content-between align-items-center mb-4 radar-header-line">
                <span className="modern-status-tag font-manrope">🏔️ MOUNTAIN PHASE 0{activeNode.id}</span>
                <span className="modern-index font-bebas">{activeNode.risk}</span>
              </div>

              {/* اسم المهارة الفخم بحجم مقروء */}
              <h3 className="modern-radar-title font-bebas mb-3">
                {activeNode.title}
              </h3>
              
              {/* الشرح الكامل والبارز بالأبيض */}
              <p className="modern-radar-desc font-manrope mb-4">
                {activeNode.desc}
              </p>

              {/* فوتر المصطلحات الحقيقية للمعدات الجبلية */}
              <div className="modern-radar-footer pt-3">
                <div className="d-flex justify-content-between font-manrope modern-footer-sub">
                  <span>REQUIRED GEAR: <strong className="text-white">{activeNode.gear}</strong></span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechniquesBackup;