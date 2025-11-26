import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TopBar: React.FC = () => {
  // 15 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isUrgent = timeLeft < 60;

  return (
    <div className={`fixed top-0 left-0 w-full h-10 z-[60] flex items-center justify-center px-4 shadow-lg border-b border-white/10 transition-colors duration-300 ${isUrgent ? 'bg-red-700 animate-pulse text-white font-black' : 'bg-red-600 text-white'}`}>
      <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide">
        <Clock size={16} className={`${isUrgent ? 'animate-bounce' : 'animate-pulse'}`} />
        <span className="uppercase text-center">Essa oferta será válida apenas por:</span>
        <span className={`font-mono text-base px-2 rounded ${isUrgent ? 'bg-black text-red-500' : 'bg-black/20'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default TopBar;