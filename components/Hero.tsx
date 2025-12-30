import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-0 bg-deep-slate">
        <div className="absolute inset-0 bg-gradient-radial from-neon-green/10 via-deep-slate to-deep-slate opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCustom }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">O App da sua Gestão</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
          className="font-display font-black text-5xl md:text-8xl leading-none text-white mb-6 tracking-tighter"
        >
          Organize suas Apostas e Pare de <span className="text-neon-green italic">Perder o Controle</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="text-slate-300 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Ferramentas simples para você controlar seu dinheiro, ver estatísticas reais e ter disciplina todos os dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="flex flex-col items-center w-full"
        >
          <a href="#pricing" className="group relative w-full md:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-neon-green rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-neon-strong shadow-neon">
            <span className="text-deep-slate font-black text-xl uppercase tracking-tight italic">Garantir Meu Acesso</span>
            <ArrowRight className="w-6 h-6 text-deep-slate group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              ⚠️ Informativo • Sem promessas de lucro • 18+
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;