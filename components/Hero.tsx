import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/esportsstadium/1920/1080" 
          alt="Stadium Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs md:text-sm font-bold uppercase tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
          </span>
          Vagas Abertas por Tempo Limitado
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 drop-shadow-2xl"
        >
          O mercado de 90 minutos morreu.<br className="hidden md:block" />
          O dinheiro agora está nos <span className="text-neon-green relative">
            5 minutos
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon-green opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
        >
          Descubra como um grupo fechado está usando <strong className="text-white font-semibold">brechas no E-Soccer</strong> para buscar lucros rápidos várias vezes ao dia.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-black text-slate-950 transition-all duration-200 bg-neon-green rounded-xl hover:bg-neon-green-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green focus:ring-offset-slate-900 shadow-neon animate-pulse-slow">
            <span className="mr-2">QUERO ENTRAR NO GRUPO VIP AGORA</span>
            <Lock className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40" />
          </a>
          <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
            <Zap size={12} className="inline mr-1 text-yellow-400" />
            Acesso imediato liberado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;