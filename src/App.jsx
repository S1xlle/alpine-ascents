import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';
import Pack from './components/Pack';
import Shelter from './components/Shelter';
import Techniques from "./components/Techniques";
import Records from './components/Records'; // تم دمج شغل جودي هنا

import OrganizationsSection from './components/OrganizationsSection';
import InteractiveMap from './components/InteractiveMap';
import BottomTicker from './components/BottomTicker';



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
      
      <OrganizationsSection />
      
      <InteractiveMap />
      <BottomTicker />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب */}
    </div>
  );
}

export default App;