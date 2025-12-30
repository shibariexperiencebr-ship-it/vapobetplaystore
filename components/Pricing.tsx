import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Lock, Star, ChevronRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative bg-deep-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 tracking-tighter">
            Plano <span className="text-neon-green italic">Vitalício</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium tracking-tight">Invista na sua disciplina e pare de contar com a sorte.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
        >
           <div className="grid md:grid-cols-5 min-h-[500px]">
             
             <div className="md:col-span-3 p-10 md:p-14 bg-white/[0.02]">
               <h4 className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.25em] mb-10">Acesso Premium Imediato:</h4>
               <ul className="space-y-8 mb-12">
                 {[
                   "Sinais Informativos em Tempo Real",
                   "Ferramentas de Gestão de Banca",
                   "Histórico de Desempenho Transparente",
                   "Estratégias de Disciplina Validada",
                   "Aulas de Controle Emocional",
                   "Bônus: Calculadora de Stakes"
                 ].map((benefit, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <div className="bg-neon-green/20 rounded-full p-1.5 shrink-0">
                       <Check size={14} className="text-neon-green stroke-[3]" />
                     </div>
                     <span className="text-slate-200 font-medium text-lg tracking-tight">{benefit}</span>
                   </li>
                 ))}
               </ul>
               
               <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                 <ShieldCheck className="text-neon-green w-8 h-8" />
                 <p className="text-slate-400 text-xs leading-relaxed">
                   <strong className="text-white block mb-1 tracking-tight">Satisfação Garantida</strong>
                   Se em 7 dias você sentir que a plataforma não agregou valor à sua jornada, devolvemos seu investimento.
                 </p>
               </div>
             </div>

             <div className="md:col-span-2 p-10 md:p-14 flex flex-col justify-center items-center text-center bg-black/20 border-t md:border-t-0 md:border-l border-white/5">
               <div className="mb-10">
                  <span className="text-slate-500 line-through text-lg font-medium tracking-tight opacity-50 block mb-2">De R$ 197,00</span>
                  
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-2xl text-neon-green font-bold">R$</span>
                    <span className="text-9xl font-black text-white tracking-tighter tabular-nums leading-none">29</span>
                    <div className="flex flex-col items-start">
                      <span className="text-4xl text-neon-green font-bold leading-none">,90</span>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1 ml-1">Único</span>
                    </div>
                  </div>
               </div>
               
               <button className="w-full group relative flex items-center justify-center gap-3 py-6 bg-neon-green rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-neon-strong">
                 <span className="text-deep-slate font-black text-lg uppercase tracking-tight">Garantir Acesso</span>
                 <ChevronRight className="w-5 h-5 text-deep-slate group-hover:translate-x-1 transition-transform" />
               </button>
               
               <div className="mt-8 flex flex-col gap-4 items-center opacity-40">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em]">
                   <Lock size={12} /> Pagamento 100% Seguro
                 </div>
                 <div className="flex gap-3">
                    <div className="h-6 w-10 bg-slate-800 rounded"></div>
                    <div className="h-6 w-10 bg-slate-800 rounded"></div>
                    <div className="h-6 w-10 bg-slate-800 rounded"></div>
                 </div>
               </div>
             </div>

           </div>
        </motion.div>
        
        <p className="text-center mt-12 text-slate-500 text-xs font-medium tracking-wide">
          Apostas esportivas envolvem riscos financeiros. Jogue com responsabilidade. 18+
        </p>
      </div>
    </section>
  );
};

export default Pricing;