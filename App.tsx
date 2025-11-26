import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import SalesPopup from './components/SalesPopup';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-deep-slate text-slate-100 overflow-x-hidden">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Steps />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
      <SalesPopup />
      <StickyCTA />
    </div>
  );
};

export default App;