import React from 'react';

const Gear = () => {
  const gearList = [
    {
      id: 1,
      title: "Ice Axe (فأس الجليد)",
      category: "Equipment",
      description: "الأداة الأكثر أهمية للتوازن، الحفر في الجليد، والتوقف الذاتي عند الانزلاق المفاجئ.",
      icon: "⛏️"
    },
    {
      id: 2,
      title: "Crampons (مخالب الأحذية)",
      category: "Equipment",
      description: "شفرات معدنية تثبت أسفل الحذاء لمنع الانزلاق وتوفير ثبات كامل على الأسطح المتجمدة.",
      icon: "🥾"
    },
    {
      id: 3,
      title: "Ropes & Harness (الحبال والأحزمة)",
      category: "Safety",
      description: "شريان الحياة للمتسلقين، تُستخدم لربط الفريق معاً وحمايتهم من السقوط في الشقوق الجبلية.",
      icon: "🧗"
    },
    {
      id: 4,
      title: "Glacier Walking (المشي الجليدي)",
      category: "Technique",
      description: "تقنية مخصصة للمشي الجماعي بحبال مشدودة ومسافات مدروسة لعبور الأنهار الجليدية بأمان.",
      icon: "🏔️"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8fafd', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* إضافة كود الـ CSS الخاص بالحركات والتأثيرات التفاعلية */}
      <style>{`
        .alpine-card {
          border: 1px solid rgba(43, 76, 68, 0.08) !important;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          cursor: pointer;
        }
        .alpine-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(43, 76, 68, 0.12) !important;
          background-color: #ffffff !important;
          border-color: #2b4c44 !important;
        }
        .alpine-icon {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .alpine-card:hover .alpine-icon {
          transform: scale(1.2) rotate(-10deg);
        }
        .alpine-link {
          color: #2b4c44;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }
        .alpine-card:hover .alpine-link {
          color: #1a302b;
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold tracking-wider" style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#2b4c44' }}>
            What you need
          </h6>
          <h2 className="fw-bold text-dark mt-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', letterSpacing: '1px' }}>
            Mountaineering Gear & Techniques
          </h2>
          <div className="mx-auto my-3" style={{ width: '60px', height: '3px', backgroundColor: '#2b4c44' }}></div>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
            التسلق احترافية والتزام؛ تعرف على الأدوات الأساسية والمهارات التي تحتاجها لمواجهة قمم الألب الشاهقة بأمان.
          </p>
        </div>

        {/* شبكة البطاقات (Cards Grid) */}
        <div className="row g-4">
          {gearList.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 p-3 alpine-card" 
                   style={{ 
                     borderRadius: '16px', 
                     backgroundColor: '#ffffff',
                     boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                   }}>
                <div className="card-body d-flex flex-column h-100">
                  
                  {/* الأيقونة والتصنيف */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="alpine-icon" style={{ fontSize: '2.3rem' }}>{item.icon}</span>
                    <span className="badge px-3 py-2 text-uppercase fw-semibold" 
                          style={{ 
                            fontSize: '0.7rem', 
                            backgroundColor: item.category === 'Technique' ? '#e3ece9' : '#e9ecef',
                            color: item.category === 'Technique' ? '#2b4c44' : '#495057',
                            borderRadius: '30px'
                          }}>
                      {item.category}
                    </span>
                  </div>

                  {/* عنوان البطاقة */}
                  <h4 className="card-title fw-bold text-dark mb-3" style={{ fontSize: '1.25rem', fontFamily: "'Manrope', sans-serif" }}>
                    {item.title}
                  </h4>

                  {/* الوصف */}
                  <p className="card-text text-secondary small lh-base mb-4" style={{ textAlign: 'justify' }}>
                    {item.description}
                  </p>

                  {/* زر التفاعل في أسفل البطاقة */}
                  <div className="mt-auto pt-2">
                    <span className="alpine-link d-inline-flex align-items-center">
                      Read Details <i className="bi bi-arrow-right ms-1"></i> →
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gear;