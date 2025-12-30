import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVapo from './components/AboutVapo';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

export type View = 'home' | 'terms' | 'privacy' | 'contact';
export type Language = 'pt' | 'en';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [lang, setLang] = useState<Language>('pt');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'terms':
        return <TermsOfUse lang={lang} onBack={() => setView('home')} />;
      case 'privacy':
        return <PrivacyPolicy lang={lang} onBack={() => setView('home')} />;
      case 'contact':
        return <Contact lang={lang} onBack={() => setView('home')} />;
      default:
        return (
          <>
            <Hero lang={lang} />
            <AboutVapo lang={lang} />
            <Steps lang={lang} />
            <Comparison lang={lang} />
            <Pricing lang={lang} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-deep-slate text-slate-100 overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} onNavigate={setView} currentView={view} />
      <main>
        {renderView()}
      </main>
      <Footer lang={lang} onNavigate={setView} />
    </div>
  );
};

export default App;