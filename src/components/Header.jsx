import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';

function Header() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const [visitorCount, setVisitorCount] = useState(() => {
    const savedCount = localStorage.getItem('visitor_count');
    const initialCount = savedCount ? parseInt(savedCount, 10) : 100;
    const newCount = initialCount + 1;
    localStorage.setItem('visitor_count', newCount);
    return newCount;
  });

  const menuItems = [
    { name: 'Home', link: '#hero' },
    { name: 'History', link: '#history' },
    { name: 'Types & Styles', link: '#types' },
    { name: 'Techniques', link: '#techniques' },
    { name: 'Sheltering', link: '#sheltering' },
    { name: 'Hazards', link: '#hazards' },
    { name: 'Records', link: '#records' },
    { name: 'Organizations', link: '#organizations' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Latest Developments', link: '#developments' },
    { name: 'Guidelines', link: '#guidelines' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="navbar navbar-expand fixed-top custom-navbar py-2 animate-fade-in">
      <div className="container-fluid">
        
        {/* اللوجو واسم الموقع على اليسار */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          <img src={logoImg} alt="Alpine Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
          <span className="brand-title fw-bold text-white">ALPINE ASCENTS</span>
        </a>

        {/* زر الـ Menu المنسدل في المنتصف */}
        <div className="dropdown mx-auto">
          <button 
            className="btn dropdown-toggle fw-semibold text-white px-4 py-2 custom-menu-btn" 
            type="button" 
            id="menuDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            style={{ fontFamily: 'Poppins', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '20px' }}
          >
            MENU ☰
          </button>
          
          <ul className="dropdown-menu dropdown-menu-dark shadow-lg border-0 mt-2 text-center" aria-labelledby="menuDropdown" style={{ backgroundColor: 'var(--deep-navy)', minWidth: '220px' }}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  className={`dropdown-item py-2 fw-medium ${activeMenu === item.name ? 'active-dropdown-link' : 'text-white'}`}
                  href={item.link}
                  onClick={() => setActiveMenu(item.name)}
                  style={{ fontFamily: 'Poppins', fontSize: '0.9rem' }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* عداد الزوار على اليمين */}
        <div className="d-flex align-items-center px-3 py-1 rounded-pill visitor-badge">
          <span className="badge-text">👤 VISITORS:</span>
          <span className="fw-bold badge-number">{visitorCount}</span>
        </div>

      </div>
    </nav>
  );
}

export default Header;