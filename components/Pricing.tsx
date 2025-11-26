import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Lock, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-deep-black">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-3 tracking-tighter">
            O acesso é <span className="text-red-500">restrito</span>.
          </h2>
          <p className="text-slate-400 text-lg tracking-wide">Não mantemos vagas abertas por muito tempo.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-900/60 backdrop-blur-xl border border-neon-green/30 rounded-[2rem] overflow-hidden shadow-neon relative"
        >
           {/* Header do Card */}
           <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-neon-green/10 p-2.5 rounded-xl border border-neon-green/20">
                  <Star className="text-neon-green fill-neon-green" size={24} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black text-white italic tracking-tighter">VAPO<span className="text-neon-green">BET</span> VIP</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Plano Vitalício</p>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] md:text-xs px-5 py-2 rounded-full uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></span>
                Últimas 07 vagas
              </div>
           </div>

           <div className="grid md:grid-cols-5 min-h-[450px]">
             
             {/* Lado Esquerdo: Benefícios (3 colunas) */}
             <div className="md:col-span-3 p-8 md:p-12 space-y-10 bg-slate-900/40 flex flex-col justify-between">
               <div className="space-y-6">
                 <h4 className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-8">Você terá acesso imediato a:</h4>
                 {[
                   "Sinais Vitalícios (Sem mensalidade)",
                   "Assertividade acima de 85%",
                   "Suporte exclusivo para Iniciantes",
                   "Planilha de Gestão de Banca Profissional",
                   "Estratégia Anti-Zebra Validada",
                   "Bônus: Aula de Alavancagem"
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="bg-neon-green rounded-full p-0.5 mt-1 shrink-0">
                       <Check size={12} className="text-black stroke-[4]" />
                     </div>
                     <span className="text-slate-200 font-medium leading-tight tracking-wide text-sm md:text-base">{benefit}</span>
                   </div>
                 ))}
               </div>
               
               <div className="bg-slate-950/50 rounded-2xl p-5 flex items-start gap-4 border border-white/5">
                 <ShieldCheck className="text-neon-green shrink-0 w-8 h-8" />
                 <div>
                   <p className="text-white font-bold text-sm mb-1 tracking-tight">Garantia Blindada de 7 Dias</p>
                   <p className="text-slate-500 text-xs leading-relaxed">Se não lucrar ou não gostar, devolvemos 100% do seu dinheiro. Sem letras miúdas.</p>
                 </div>
               </div>
             </div>

             {/* Lado Direito: Preço e CTA (2 colunas) */}
             <div className="md:col-span-2 bg-black/40 p-8 md:p-10 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-white/10 relative overflow-hidden">
               {/* Efeito de brilho fundo */}
               <div className="absolute inset-0 bg-neon-green/5 blur-3xl"></div>
               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent"></div>
               
               <div className="relative z-10 w-full">
                 <div className="mb-8">
                    <span className="inline-block text-red-500 line-through font-medium text-lg mb-1 opacity-60 tracking-tight">De R$ 197,00</span>
                    <div className="bg-neon-green/10 border border-neon-green/20 rounded-lg py-1 px-3 inline-block ml-3 mb-4 align-middle">
                      <span className="text-neon-green text-[10px] font-black uppercase tracking-wider">-85% OFF</span>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-3 tracking-wide">Por apenas:</p>
                    
                    <div className="flex items-start justify-center gap-1.5 mb-2 -ml-4">
                      <span className="text-2xl text-neon-green font-bold mt-3">R$</span>
                      <span className="text-8xl font-black text-white tracking-tighter leading-none shadow-black drop-shadow-lg">29</span>
                      <div className="flex flex-col items-start mt-3">
                        <span className="text-4xl text-neon-green font-bold leading-none tracking-tighter">,90</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest ml-1">À vista</span>
                      </div>
                    </div>
                 </div>
                 
                 <button className="w-full group relative flex items-center justify-center px-6 py-5 bg-neon-green text-slate-950 font-black text-lg rounded-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#00ff9d] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] shadow-neon overflow-hidden tracking-wide">
                   <span className="relative z-10">GARANTIR MINHA VAGA</span>
                   <div className="absolute inset-0 flex translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"></div>
                 </button>
                 
                 <div className="mt-8 flex flex-col gap-3 items-center">
                   <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                     <Lock size={12} /> Pagamento Seguro
                   </div>
                   <div className="flex gap-2.5 opacity-40">
                      <div className="h-5 w-8 bg-slate-700 rounded-md"></div>
                      <div className="h-5 w-8 bg-slate-700 rounded-md"></div>
                      <div className="h-5 w-8 bg-slate-700 rounded-md"></div>
                      <div className="h-5 w-8 bg-slate-700 rounded-md"></div>
                   </div>
                 </div>
               </div>
             </div>

           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;