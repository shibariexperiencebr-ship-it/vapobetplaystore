import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVapo from './components/AboutVapo';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import SalesPopup from './components/SalesPopup';
import StickyCTA from './components/StickyCTA';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

export type View = 'home' | 'terms' | 'privacy' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Scroll to top when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'terms':
        return <TermsOfUse onBack={() => setView('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setView('home')} />;
      case 'contact':
        return <Contact onBack={() => setView('home')} />;
      default:
        return (
          <>
            <Hero />
            <AboutVapo />
            <Steps />
            <Comparison />
            <SocialProof />
            <Pricing />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-deep-slate text-slate-100 overflow-x-hidden">
      {view === 'home' && <TopBar />}
      <Navbar onNavigate={setView} currentView={view} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={setView} />
      {view === 'home' && <SalesPopup />}
      {view === 'home' && <StickyCTA />}
    </div>
  );
};

export default App;