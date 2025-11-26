import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-10 left-0 w-full z-50 transition-all duration-500 ease-[0.22,1,0.36,1] ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2' : 'bg-transparent border-b border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 transition-all duration-300 group cursor-default">
            <span 
              className={`font-display font-black text-2xl md:text-3xl tracking-tighter italic text-white transition-all duration-500 ${isScrolled ? 'drop-shadow-[0_0_25px_rgba(0,255,148,0.4)]' : ''}`}
            >
              VAPO<span className="text-neon-green group-hover:drop-shadow-[0_0_10px_rgba(0,255,148,0.8)] transition-all">BET</span>365
            </span>
          </div>
          <div>
            <button className="group flex items-center gap-2 bg-white/5 hover:bg-neon-green text-white hover:text-deep-slate px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border border-white/10 hover:border-neon-green hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              <Lock size={14} className="text-neon-green group-hover:text-deep-slate group-hover:scale-110 transition-transform duration-300" />
              <span className="uppercase">Acesso Membros</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;