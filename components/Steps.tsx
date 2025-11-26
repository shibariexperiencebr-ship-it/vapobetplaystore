import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Copy, Banknote } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-cyber-purple" />,
      title: "Receba o Sinal",
      desc: "Nosso algoritmo detecta a oportunidade e enviamos o alerta no Grupo VIP do Telegram."
    },
    {
      icon: <Copy className="w-12 h-12 text-white" />,
      title: "Copie e Cole",
      desc: "Você não precisa analisar nada. Apenas copie a entrada exata que mandamos na Bet."
    },
    {
      icon: <Banknote className="w-12 h-12 text-neon-green" />,
      title: "VAPO! É Green",
      desc: "Em menos de 10 minutos o resultado sai e o lucro vai direto para o seu bolso."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Você não precisa entender de futebol. <br />
            <span className="text-slate-400 text-2xl md:text-4xl">Só precisa ter celular.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group p-8 rounded-3xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-white/5 hover:border-neon-green/30"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-slate-500">
                {index + 1}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-2xl bg-slate-950 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;