import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Steps />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;