import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1]; // Custom easing for smooth pop

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-36 pb-24 md:pt-32">
      {/* Background with Radial Gradient */}
      <div className="absolute inset-0 z-0 bg-deep-slate">
        <div className="absolute inset-0 bg-gradient-radial from-emerald-900/20 via-deep-slate to-deep-slate opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyber-purple/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 1 }, 
                  x: { duration: 1, ease: easeCustom },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                }}
                className="absolute top-[30%] left-[5%] bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-neon-green/20 shadow-[0_0_30px_rgba(0,255,148,0.1)]"
            >
                <TrendingUp className="text-neon-green w-8 h-8" />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.2 }, 
                  x: { duration: 1, ease: easeCustom, delay: 0.2 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } 
                }}
                className="absolute top-[20%] right-[5%] bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-vip-gold/20 shadow-[0_0_30px_rgba(255,215,0,0.1)]"
            >
                <DollarSign className="text-vip-gold w-8 h-8" />
            </motion.div>
        </div>

        {/* Social Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: easeCustom }}
          className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-neon-green/20 bg-neon-green/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,148,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green shadow-[0_0_10px_rgba(0,255,148,0.8)]"></span>
          </span>
          <span className="text-neon-green text-[10px] md:text-xs font-bold uppercase tracking-widest">Método Validado 2024</span>
        </motion.div>

        {/* Headline Direct Response */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-8 drop-shadow-2xl max-w-5xl tracking-tighter"
        >
          Hackeie o <span className="text-transparent bg-clip-text bg-gradient-to-br from-neon-green to-emerald-500 relative inline-block">
            Algoritmo
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon-green opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span> do E-Soccer e Lucre em 12 Minutos.
        </motion.h1>

        {/* Subheadline Contrast */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="text-slate-300 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-light tracking-tight"
        >
          Enquanto amadores esperam 90 minutos por um gol, nossos membros faturam <span className="text-white font-bold decoration-neon-green/50 decoration-2 underline underline-offset-4">R$ 100, R$ 200, R$ 500</span> várias vezes ao dia apenas <span className="text-white font-semibold italic">copiando e colando</span>.
        </motion.p>

        {/* High Ticket CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="flex flex-col items-center w-full"
        >
          <a href="#pricing" className="group relative w-full md:w-auto flex flex-col items-center justify-center px-10 py-6 bg-neon-green rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-neon-strong shadow-neon overflow-hidden">
             <div className="flex items-center gap-4 relative z-10">
                <span className="text-deep-slate font-black text-lg md:text-2xl uppercase tracking-tighter">Quero Acesso aos Sinais VIP</span>
                <Lock className="w-6 h-6 text-deep-slate group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
             </div>
             <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-[0.19,1,0.22,1]" />
          </a>
          
          <div className="mt-5 flex items-center gap-2 text-xs md:text-sm text-slate-400 font-medium tracking-wide">
            <Lock size={12} className="text-vip-gold" />
            <span>Acesso liberado apenas para os próximos <strong className="text-white">15 membros</strong>.</span>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-neon-green" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Compra Segura</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap size={18} className="text-vip-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Garantia 7 Dias</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;