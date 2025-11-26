import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, BrainCircuit, TrendingDown, Crown, Shield } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-deep-slate relative overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-green font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
          >
            A Verdade Nua e Crua
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-5xl text-white tracking-tighter"
          >
            Você está jogando <br className="md:hidden"/> para <span className="text-red-500 line-through decoration-4 decoration-red-500/50">perder</span>?
          </motion.h2>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* VS Badge - Absolute Center */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 bg-deep-slate border-[6px] border-slate-900 rounded-full items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <span className="font-display font-black text-3xl text-white italic tracking-tighter">VS</span>
          </div>

          {/* Card Vermelho - Perdedor */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col border border-red-900/30 bg-gradient-to-b from-red-950/20 to-red-950/5 rounded-[2rem] p-8 lg:p-10 relative grayscale hover:grayscale-0 transition-all duration-500 group"
          >
            <div className="flex items-center gap-5 mb-10 border-b border-red-900/20 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingDown className="text-red-500 w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-red-500 tracking-tight">O Apostador Amador</h3>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">Modo "Tentar a Sorte"</p>
                </div>
            </div>
            
            <ul className="space-y-6 flex-1">
              {[
                "Depende exclusivamente da sorte ou emoção",
                "Analisa jogos por horas e perde no final",
                "Sofre com Zebras e Manipulação",
                "Quebra a banca tentando recuperar o prejuízo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-red-500/50 mt-1 shrink-0" strokeWidth={3} />
                    <span className="text-slate-400 font-medium leading-snug tracking-wide text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Verde - VAPO VIP */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col border-2 border-neon-green bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 relative shadow-[0_0_40px_rgba(0,255,148,0.15)] transform md:-translate-y-6 md:mb-6"
          >
            {/* Tag Best Choice */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-vip-gold text-deep-slate font-black text-[10px] md:text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center gap-2 z-10 whitespace-nowrap">
                <Crown size={14} fill="currentColor" /> Escolha dos Profissionais
            </div>

            <div className="flex items-center gap-5 mb-10 border-b border-white/10 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-neon-green/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,148,0.2)]">
                    <BrainCircuit className="text-neon-green w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">O Investidor VIP</h3>
                    <p className="text-neon-green text-[10px] uppercase font-bold tracking-widest mt-1">Modo "Hack do Sistema"</p>
                </div>
            </div>
            
            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4">
                <div className="bg-neon-green rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
                <span className="text-white font-bold text-sm md:text-base leading-snug tracking-wide">Segue Robôs de <span className="text-neon-green">Alta Precisão (98%)</span></span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-neon-green rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
                <span className="text-white font-bold text-sm md:text-base leading-snug tracking-wide">Lucra em minutos <span className="text-neon-green">(Tiros Rápidos)</span></span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-neon-green rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
                <span className="text-white font-bold text-sm md:text-base leading-snug tracking-wide">Gestão profissional blindada</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-neon-green rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-black stroke-[4]" />
                </div>
                <span className="text-white font-bold text-sm md:text-base leading-snug tracking-wide">Suporte direto com especialistas</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;