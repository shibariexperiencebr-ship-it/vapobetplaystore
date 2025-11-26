import React from 'react';
import { Lock } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter italic text-white">
              VAPO<span className="text-neon-green">BET</span>365
            </span>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-white/10">
              <Lock size={14} className="text-neon-green" />
              Acesso Membros
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;