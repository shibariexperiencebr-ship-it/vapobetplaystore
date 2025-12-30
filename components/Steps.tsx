import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Target, LineChart } from 'lucide-react';

const Steps: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-10 h-10 text-neon-green" />,
      title: "Veja os Sinais",
      desc: "Receba alertas baseados em dados reais direto no seu celular. Sem achismo."
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Organize sua Banca",
      desc: "Use nossas ferramentas para nunca mais perder o controle do seu dinheiro."
    },
    {
      icon: <LineChart className="w-10 h-10 text-neon-green" />,
      title: "Siga o Plano",
      desc: "Acompanhe sua evolução e mantenha a disciplina para ter resultados conscientes."
    }
  ];

  return (
    <section className="py-24 bg-deep-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-6xl text-white mb-4 tracking-tighter">
            Como o VAPO funciona?
          </h2>
          <p className="text-slate-400 text-lg font-medium">3 passos simples para você começar hoje.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;