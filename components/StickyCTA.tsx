import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px (past hero usually)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 w-full z-50 bg-deep-slate border-t border-neon-green/30 p-4 md:hidden pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.8)]"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Restam apenas</span>
                    <span className="text-white font-bold flex items-center gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        7 Vagas VIP
                    </span>
                </div>
                <a 
                    href="#pricing"
                    className="flex-1 bg-neon-green hover:bg-neon-green-dark text-deep-slate font-black text-sm uppercase py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-neon transition-all"
                >
                    Entrar no Grupo
                    <Lock size={14} className="stroke-[3]" />
                </a>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;