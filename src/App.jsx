import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';
import Hazard from './components/Hazard';
import Guidelines from './components/Guidelines';
import Techniques from './components/Techniques';
import Gallery from './components/Gallery';
import Records from './components/Records';
import OrganizationsSection from './components/OrganizationsSection';
import InteractiveMap from './components/InteractiveMap';
import Latest from './components/Latest';
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
      
      {/* الأقسام الأساسية */}
      <Hazard />
      <Guidelines />
      <Techniques />
      
      <Gallery />
      <Records />
      <OrganizationsSection />
      <Latest />
      <InteractiveMap />
      <Contact />
      
      {/* إضافات جودي الإضافية */}
      <GearStore />
      <BottomTicker />
    </div>
  );
}

export default App;