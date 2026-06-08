import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';
import Pack from './components/Pack';
import Shelter from './components/Shelter';
import Techniques from "./components/Techniques";
import Records from './components/Records'; // تم دمج شغل جودي هنا

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> 
      <Types />
      <Pack />
      
      {/* قسم المأوى والبوصلة الخاص بكِ */}
      <Techniques />
      <Shelter />
      
      {/* قسم السجلات الخاص بجودي */}
      <Records />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب */}
    </div>
  );
}

export default App;