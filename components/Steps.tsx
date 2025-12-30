import React from 'react';
import { motion } from 'framer-motion';
import { Database, Target, LineChart, Shield, Bell, ListChecks } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    title: "Funcionalidades",
    subtitle: "Ferramentas profissionais de análise estatística.",
    features: [
      { title: "Estatísticas de Partidas", desc: "Acompanhe dados históricos de eSoccer em tempo real.", icon: <Database /> },
      { title: "Registro Manual", desc: "Controle pessoal de eventos e entradas de dados.", icon: <ListChecks /> },
      { title: "Histórico de Desempenho", desc: "Visualize sua evolução através de relatórios.", icon: <LineChart /> },
      { title: "Indicadores Informativos", desc: "Padrões estatísticos para auxílio na análise.", icon: <Target /> },
      { title: "Organização Pessoal", desc: "Definição de metas e ferramentas de gestão.", icon: <Shield /> },
      { title: "Alertas Baseados em Dados", desc: "Informação instantânea sobre padrões detectados.", icon: <Bell /> }
    ]
  },
  en: {
    title: "Features",
    subtitle: "Professional statistical analysis tools.",
    features: [
      { title: "Match Statistics", desc: "Track real-time historical eSoccer data.", icon: <Database /> },
      { title: "Manual Event Tracking", desc: "Personal control of events and data entries.", icon: <ListChecks /> },
      { title: "Performance History", desc: "Visualize your progress through reports.", icon: <LineChart /> },
      { title: "Statistical Indicators", desc: "Statistical patterns to assist in analysis.", icon: <Target /> },
      { title: "Personal Organization", desc: "Goal setting and management tools.", icon: <Shield /> },
      { title: "Data-based Alerts", desc: "Instant information on detected patterns.", icon: <Bell /> }
    ]
  }
};

const Steps: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-display font-black text-3xl md:text-6xl text-white mb-4 tracking-tighter uppercase">{t.title}</h2>
        <p className="text-slate-500 text-lg mb-16 font-medium tracking-tight">{t.subtitle}</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.05] transition-colors"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 text-neon-green">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-lg font-black text-white mb-2 uppercase tracking-widest">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;