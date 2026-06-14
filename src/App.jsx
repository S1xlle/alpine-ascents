import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';


import Techniques from "./components/Techniques";
import Records from './components/Records'; // تم دمج شغل جودي هنا

import OrganizationsSection from './components/OrganizationsSection';
import InteractiveMap from './components/InteractiveMap';
import BottomTicker from './components/BottomTicker';
import GearStore from './components/GearStore';



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> 
      <Types />
      
      
      {/* قسم المأوى والبوصلة الخاص بكِ */}
      <Techniques />
      
      
      {/* قسم السجلات الخاص بجودي */}
      <Records />
      
      <OrganizationsSection />
      
      <InteractiveMap />
      <BottomTicker />
      <GearStore />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب */}
    </div>
  );
}

export default App;