import React, { useState, useEffect } from 'react';
import { Lock, Home, Globe } from 'lucide-react';
import { View, Language } from '../App';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: View;
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter italic text-white uppercase">
              VAPO<span className="text-neon-green">eSoccer</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full transition-all"
            >
              <Globe size={14} />
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            <button className="group flex items-center gap-2 bg-neon-green text-deep-slate px-5 py-2 rounded-full text-xs font-black tracking-wide transition-all hover:scale-105 uppercase">
              <Lock size={14} />
              {lang === 'pt' ? 'Entrar' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;