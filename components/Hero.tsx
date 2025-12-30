import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    tag: "Estatísticas & Performance",
    title: <>Acompanhe o <span className="text-neon-green italic">eSoccer</span> com dados reais</>,
    desc: "Estatísticas, performance e organização para fãs de eSoccer que buscam decisões baseadas em dados.",
    btn: "Entrar no App",
    disclaimer: "Aplicativo informativo • Sem apostas • Sem promessas de lucro • 18+"
  },
  en: {
    tag: "Statistics & Performance",
    title: <>Track <span className="text-neon-green italic">eSoccer</span> with real data</>,
    desc: "Statistics, performance, and organization for eSoccer fans who value data-driven decisions.",
    btn: "Open the App",
    disclaimer: "Informational app • No betting • No profit guarantees • 18+"
  }
};

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5"
        >
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{t.tag}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-black text-5xl md:text-8xl leading-none text-white mb-6 tracking-tighter"
        >
          {t.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {t.desc}
        </motion.p>
        
        <div className="flex flex-col items-center">
          <button className="group flex items-center gap-3 px-12 py-5 bg-neon-green text-deep-slate rounded-2xl font-black text-xl uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-neon">
            {t.btn}
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="mt-8 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;