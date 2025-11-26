import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Copy, Banknote } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-10 h-10 text-cyber-purple" />,
      title: "Receba o Sinal",
      desc: "Nosso algoritmo detecta a oportunidade e enviamos o alerta no Grupo VIP do Telegram."
    },
    {
      icon: <Copy className="w-10 h-10 text-white" />,
      title: "Copie e Cole",
      desc: "Você não precisa analisar nada. Apenas copie a entrada exata que mandamos na Bet."
    },
    {
      icon: <Banknote className="w-10 h-10 text-neon-green" />,
      title: "VAPO! É Green",
      desc: "Em até 12 minutos o resultado sai e o lucro vai direto para o seu bolso."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-display font-black text-3xl md:text-5xl text-white mb-6 tracking-tighter"
          >
            Você não precisa entender de futebol. <br className="hidden md:block"/>
            <span className="text-slate-500">Só precisa ter celular.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group p-8 lg:p-10 rounded-3xl bg-slate-800/40 hover:bg-slate-800 transition-colors border border-white/5 hover:border-neon-green/30"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center font-display font-bold text-lg text-slate-500 shadow-xl z-10 group-hover:text-white group-hover:border-neon-green/50 transition-colors">
                {index + 1}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-5 rounded-2xl bg-slate-950 shadow-2xl group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,255,148,0.2)] transition-all duration-300 border border-white/5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base tracking-wide">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;