import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; // استدعاء قسم التاريخ الجديد
import Types from './components/Types';
import Pack from './components/Pack';
import Records from './components/Records';





function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> {/* إضافة قسم التاريخ هنا */}
      <Types />
      <Pack />
      <Records />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب حبة حبة */}
    </div>
  );
}

export default App;