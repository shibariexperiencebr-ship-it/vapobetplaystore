import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, BarChart3, TrendingDown, Crown, ShieldAlert } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-32 bg-deep-slate relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl md:text-6xl text-white tracking-tighter leading-tight"
          >
            A diferença entre o <br/> <span className="text-red-500">Amadorismo</span> e a <span className="text-neon-green italic">Disciplina</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border border-white/5 bg-white/[0.02] rounded-[2.5rem] p-10 grayscale opacity-60 hover:opacity-100 transition-all duration-700"
          >
            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <TrendingDown className="text-red-500 w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-red-500 tracking-tight">O Amador</h3>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Mentalidade de Sorte</p>
                </div>
            </div>
            
            <ul className="space-y-6 flex-1">
              {[
                "Age por impulso e emoção no mercado",
                "Não possui controle de entrada e saída",
                "Acredita em métodos milagrosos e hacks",
                "Não tem ferramentas de análise estatística"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-red-500/30 mt-1 shrink-0" />
                    <span className="text-slate-400 font-medium leading-relaxed tracking-tight text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border-2 border-neon-green/30 bg-white/[0.04] backdrop-blur-xl rounded-[2.5rem] p-10 relative shadow-neon"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vip-gold text-deep-slate font-black text-[11px] px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Alta Performance
            </div>

            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-neon-green/20 flex items-center justify-center shadow-inner">
                    <BarChart3 className="text-neon-green w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-white tracking-tight italic">Usuário VAPO</h3>
                    <p className="text-neon-green text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Foco em Gestão e Dados</p>
                </div>
            </div>
            
            <ul className="space-y-7 flex-1">
              {[
                {text: "Utiliza Sinais baseados em Estatística", bold: "Sinais Estatísticos"},
                {text: "Gestão de Banca profissional integrada", bold: "Gestão Profissional"},
                {text: "Acompanhamento de Desempenho real", bold: "Acompanhamento Real"},
                {text: "Suporte e Comunidade educacional", bold: "Comunidade"}
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                    <div className="bg-neon-green rounded-full p-1 mt-1 shrink-0">
                        <Check className="w-3 h-3 text-black stroke-[4]" />
                    </div>
                    <span className="text-white font-medium text-lg leading-snug tracking-tight">
                        {item.text.split(item.bold)[0]}
                        <span className="text-neon-green font-bold">{item.bold}</span>
                        {item.text.split(item.bold)[1]}
                    </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;