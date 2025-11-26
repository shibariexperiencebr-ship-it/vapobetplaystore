import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const names = [
  "Gabriel S.", "Lucas M.", "Felipe A.", "João P.", "Rafael C.", 
  "Bruno T.", "Thiago R.", "Matheus L.", "Rodrigo O.", "André S.",
  "Guilherme F.", "Pedro H.", "Gustavo O.", "Enzo B."
];

const SalesPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    // Initial delay before first popup
    const initialDelay = setTimeout(() => {
      triggerPopup();
      // Loop for subsequent popups
      const loop = setInterval(() => {
        triggerPopup();
      }, Math.random() * 15000 + 10000); // Random interval between 10-25s
      return () => clearInterval(loop);
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, []);

  const triggerPopup = () => {
    setCurrentName(names[Math.floor(Math.random() * names.length)]);
    setVisible(true);
    setTimeout(() => setVisible(false), 5000); // Show for 5 seconds
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8 pointer-events-none pb-safe"
        >
          <div className="bg-slate-900/95 backdrop-blur-md border border-neon-green/30 p-4 rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.15)] flex items-center gap-4 max-w-[300px] pointer-events-auto hover:scale-105 transition-transform cursor-default">
            <div className="bg-neon-green/20 p-2 rounded-full shrink-0 animate-pulse">
              <CheckCircle size={20} className="text-neon-green" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                {currentName}
              </p>
              <p className="text-slate-400 text-xs">
                acabou de entrar no grupo de sinais
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesPopup;