import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; // استدعاء قسم التاريخ الجديد

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> {/* إضافة قسم التاريخ هنا */}
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب حبة حبة */}
    </div>
  );
}

export default App;