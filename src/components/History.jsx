import React from 'react';

function History() {
  return (
    <section 
      id="history" 
      className="py-5 text-white" 
      style={{ backgroundColor: 'var(--deep-navy)', fontFamily: 'Manrope' }}
    >
      <div className="container py-4">
        
        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold" style={{ color: 'var(--summit-orange)', letterSpacing: '1px' }}>
            THE HISTORY OF MOUNTAINEERING
          </h2>
          <div className="mx-auto mt-2" style={{ width: '80px', height: '3px', backgroundColor: 'var(--forest-green)' }}></div>
        </div>

        {/* محتوى التاريخ المقسم بشكل احترافي */}
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h3 className="h2 mb-3 text-white" style={{ fontFamily: 'Bebas Neue', letterSpacing: '1px' }}>
              How It All Began
            </h3>
            <p className="lead fs-6" style={{ color: 'var(--snow-white)', opacity: '0.9', lineHeight: '1.8' }}>
              Mountaineering as a sport was born in **1786** with the historic first ascent of **Mont Blanc** by Jacques Balmat and Michel-Gabriel Paccard. This monumental achievement sparked a global fascination with conquering the world's highest peaks.
            </p>
            <p className="fs-6" style={{ color: 'var(--stone-gray)', lineHeight: '1.8' }}>
              The craft evolved dramatically during the "Golden Age of Mountaineering" (1854–1865), where many major Alpine peaks saw their first ascents, establishing technical climbing as a recognized and structured sport worldwide.
            </p>
          </div>

          <div className="col-lg-6">
            {/* بطاقة مميزة تلخص أهم فترات التاريخ */}
            <div className="p-4 rounded-4 shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 className="fw-bold mb-3" style={{ color: 'var(--summit-orange)' }}>Key Historical Eras</h4>
              <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                <li className="d-flex align-items-start gap-2">
                  <span style={{ color: 'var(--summit-orange)' }}>⚡</span>
                  <div>
                    <strong>1786:</strong> The Birth of Mountaineering (Mont Blanc Ascent).
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span style={{ color: 'var(--summit-orange)' }}>⚡</span>
                  <div>
                    <strong>1854 - 1865:</strong> The Golden Age of Alpine exploration and technique refinement.
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span style={{ color: 'var(--summit-orange)' }}>⚡</span>
                  <div>
                    <strong>1953:</strong> The Historic Conquest of **Mount Everest** by Sir Edmund Hillary and Tenzing Norgay.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default History;