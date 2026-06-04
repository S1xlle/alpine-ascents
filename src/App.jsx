import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; // استدعاء قسم التاريخ الجديد
import Gear from './components/Gear';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> {/* إضافة قسم التاريخ هنا */}
      <Gear />
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب حبة حبة */}
    </div>
  );
}

export default App;