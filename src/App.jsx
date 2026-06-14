import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';
import Hazard from './components/Hazard';
import Guidelines from './components/Guidelines';

import Techniques from "./components/Techniques";
import Records from './components/Records'; // تم دمج شغل جودي هنا

import OrganizationsSection from './components/OrganizationsSection';
import Gallery from './components/Gallery';
import Latest from './components/Latest';
import InteractiveMap from './components/InteractiveMap';
import Contact from './components/Contact';
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
      
      <Hazard />         {/* ضيفي هذا */}
      <Guidelines />
      {/* قسم السجلات الخاص بجودي */}
      <Records />
      
      <OrganizationsSection />
      <Gallery />
      <Latest />
      
      <InteractiveMap />
      <Contact />
      
      <BottomTicker />
      <GearStore />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب */}
    </div>
  );
}

export default App;