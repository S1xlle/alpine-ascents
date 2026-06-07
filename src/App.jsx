import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History'; 
import Types from './components/Types';
import Pack from './components/Pack';

// استدعاء الملف الأساسي (البوصلة)
import Techniques from "./components/Techniques";

// استدعاء الملف الاحتياطي باسم مختلف تماماً عشان ما يصير أي خطأ
import TechniquesBackup from "./components/TechniquesBackup";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <History /> 
      <Types />
      <Pack />
      
      {/* 🧭 هنا البوصلة الأساسية حقتك ثابتة وما تتغير ولا نلمسها */}
      <Techniques />
      
      {/* 🧪 هنا ملف التجارب الاحتياطي اللي بنغير فيه على راحتنا كل شوية */}
      <TechniquesBackup />
      
      {/* الأقسام الباقية بنضيفها تحتها بالترتيب حبة حبة */}
    </div>
  );
}

export default App;