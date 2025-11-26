import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Lock } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-deep-black">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-2">
            O acesso é <span className="text-red-500">restrito</span>.
          </h2>
          <p className="text-slate-400">Não mantemos vagas abertas por muito tempo para garantir a qualidade do suporte.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 backdrop-blur-xl border border-neon-green/20 rounded-3xl p-8 md:p-12 shadow-neon relative overflow-hidden"
        >
           {/* Ribbon */}
           <div className="absolute top-0 right-0 bg-neon-green text-black font-bold text-xs px-4 py-1 rounded-bl-xl uppercase tracking-wider">
             Oferta Limitada
           </div>

           <div className="grid md:grid-cols-2 gap-10 items-center">
             
             <div className="space-y-6">
               <div className="space-y-4">
                 {[
                   "Sinais Vitalícios (Sem mensalidade)",
                   "Suporte para Iniciantes",
                   "Planilha de Gestão de Banca",
                   "Estratégia Anti-Zebra",
                   "Bônus: Aula de Alavancagem"
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="bg-neon-green/10 p-1 rounded-full">
                       <Check size={16} className="text-neon-green" />
                     </div>
                     <span className="text-slate-200 font-medium">{benefit}</span>
                   </div>
                 ))}
               </div>
               
               <div className="bg-slate-950/50 rounded-xl p-4 flex items-start gap-3 border border-white/5">
                 <ShieldCheck className="text-neon-green shrink-0" />
                 <div>
                   <p className="text-white font-bold text-sm">Garantia Blindada</p>
                   <p className="text-slate-400 text-xs">7 Dias de Garantia ou seu dinheiro de volta. Sem perguntas.</p>
                 </div>
               </div>
             </div>

             <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
               <p className="text-slate-400 text-lg mb-2 line-through decoration-red-500">De R$ 197,00</p>
               <div className="flex items-center justify-center md:justify-end gap-1 mb-2">
                 <span className="text-2xl text-slate-300 font-bold">Por apenas</span>
               </div>
               <div className="flex items-center justify-center md:justify-end gap-1 mb-6">
                 <span className="text-xl text-neon-green font-bold self-start mt-2">R$</span>
                 <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">29</span>
                 <span className="text-2xl text-neon-green font-bold self-end mb-2">,90</span>
               </div>
               
               <button className="w-full bg-neon-green text-slate-950 font-black text-lg py-4 rounded-xl hover:bg-neon-green-dark transition-all hover:scale-105 shadow-neon mb-4 animate-pulse-slow">
                 GARANTIR MINHA VAGA COM DESCONTO
               </button>
               
               <div className="flex items-center justify-center gap-2 text-slate-500 text-xs uppercase font-bold tracking-widest">
                 <Lock size={10} /> Compra 100% Segura
               </div>
             </div>

           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;