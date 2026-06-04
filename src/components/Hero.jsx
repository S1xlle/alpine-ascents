import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import cloudsVideo from '../assets/clouds.mp4'; // تأكدي من مسمى الملف عندكِ mp4 أو mp4.mp4

function Hero() {
  return (
    <div 
      id="hero"
      className="position-relative d-flex align-items-center justify-content-start text-white overflow-hidden" 
      style={{ 
        minHeight: '100vh',
        padding: '20px 80px', /* مسافة جانبية احترافية من اليسار */
        backgroundColor: '#102542'
      }}
    >
      
      {/* 1. الطبقة الخلفية الأولى: فيديو الغيوم المتحركة */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          opacity: '0.7',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <source src={cloudsVideo} type="video/mp4" />
      </video>

      {/* 2. الطبقة الثانية: صورة الجبل واضحة وفوق الغيوم */}
      <img 
        src={heroBg} 
        alt="Mountain Peak" 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: '0.85'
        }}
      />

      {/* طبقة تظليل داكنة ناعمة فوق الجبل لزيادة وضوح النصوص */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(16, 37, 66, 0.45)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      ></div>

      {/* 3. الطبقة الأمامية: النصوص بالأحجام الكبيرة الجديدة */}
      <div 
        className="animate-fade-in d-flex flex-column align-items-start position-relative text-start" 
        style={{ maxWidth: '950px', zIndex: 4, marginTop: '20px' }}
      >
        
        {/* العبارة الثلاثية الناعمة فوق */}
        <div className="d-flex align-items-center mb-3">
          <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--summit-orange)', marginRight: '10px' }}></div>
          <h2 
            className="fw-bold text-uppercase m-0" 
            style={{ 
              fontSize: '12px', 
              letterSpacing: '3px', 
              fontFamily: 'Poppins, sans-serif',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            EXPLORE • CLIMB • DISCOVER
          </h2>
        </div>

        {/* العنوان الرئيسي: كبرنا حجمه بشكل ملحوظ وفخم مع الظل */}
        <h1 
          className="fw-bold mb-4 text-uppercase" 
          style={{ 
            fontFamily: 'Bebas Neue, sans-serif',
            lineHeight: '0.9',
            letterSpacing: '1px',
            textShadow: '4px 4px 18px rgba(0, 0, 0, 0.85), -1px -1px 0px rgba(0,0,0,0.3)' 
          }}
        >
          {/* السطر الأول: بيوند (تم تكبيرها) */}
          <div style={{ color: 'var(--summit-orange)', fontSize: 'calc(4.5rem + 4vw)' }}>
            BEYOND
          </div>
          
          {/* السطر الثاني: ذا بيكس (تم تكبيرها لتكون عملاقة) */}
          <div style={{ color: 'var(--forest-green)', fontSize: 'calc(5.2rem + 4.8vw)' }}>
            THE PEAKS
          </div>
        </h1>
        
        {/* النص الترحيبي: تم تكبير حجم الخط (fontSize) وعرض المساحة ليكون واضحاً وقوياً جداً في القراءة */}
        <p 
          className="mb-4" 
          style={{ 
            fontFamily: 'Manrope, sans-serif', 
            color: 'var(--snow-white)', 
            fontSize: 'calc(1.1rem + 0.3vw)', /* الخط صار أكبر وأوضح */
            lineHeight: '1.7', 
            fontWeight: '400',
            maxWidth: '650px', /* وسعنا المساحة عشان السطور تاخذ راحتها */
            opacity: '0.9',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          We are a leader in the mountaineering industry, offering unparalleled adventures. 
          Discover your next challenge and achieve your personal aspirations with us.
        </p>
        
        {/* زر Explore More الفخم الممتد */}
        <a 
          href="#history" 
          className="btn btn-lg px-5 py-3 fw-semibold text-white border-0 shadow" 
          style={{ 
            backgroundColor: 'var(--summit-orange)', 
            fontFamily: 'Poppins, sans-serif', 
            borderRadius: '30px', 
            fontSize: '15px',
            letterSpacing: '1px',
            transition: 'all 0.3s' 
          }}
        >
          EXPLORE MORE →
        </a>
      </div>
    </div>
  );
}

export default Hero;