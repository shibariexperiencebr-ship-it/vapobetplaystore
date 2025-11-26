import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-4">
            Você ainda está tentando a sorte? <br />
            <span className="text-neon-green">Nós estamos seguindo a lógica.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Vermelho (Eles) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-red-500/30 bg-red-950/10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <XCircle className="w-8 h-8" /> O Apostador Comum
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <span>Depende exclusivamente da sorte e intuição.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <span>Sofre com "Zebras" e resultados manipulados.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <span>Espera <strong>90 minutos</strong> sofrendo para talvez ganhar.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card Verde (Nós) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-neon-green bg-green-950/20 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden shadow-neon"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold text-neon-green mb-6 flex items-center gap-2">
              <CheckCircle className="w-8 h-8" /> Membro VAPO VIP
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-1" />
                <span>Partidas rápidas de <strong>5 a 8 minutos</strong>.</span>
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-1" />
                <span>Seguimos um <strong>Padrão Estatístico</strong> validado.</span>
              </li>
              <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-neon-green shrink-0 mt-1" />
                <span>Simples: Entrou, Copiou, Lucrou, Saiu. VAPO!</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;