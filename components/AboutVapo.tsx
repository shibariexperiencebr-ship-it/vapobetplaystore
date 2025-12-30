import React from 'react';
import { Shield, Info, AlertTriangle } from 'lucide-react';

const AboutVapo: React.FC = () => {
  return (
    <section className="py-24 bg-deep-slate border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <Info className="text-neon-green w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">O que é o VAPO Soccer?</h2>
          </div>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
            <p>
              O <span className="text-white font-bold">VAPO Soccer</span> é uma plataforma de conteúdo informativo e educacional. Nosso foco é ajudar você a ter organização, disciplina e controle no mundo esportivo.
            </p>
            <p>
              Aqui você encontra ferramentas para controlar seu dinheiro (gestão de banca), ver seu histórico de desempenho e receber sinais baseados em estatísticas reais.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="text-red-500 w-5 h-5" />
                  <span className="font-black text-red-500 text-sm uppercase tracking-wider">O que não somos</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Não somos casa de apostas, não fazemos apostas para você e não garantimos lucro algum.
                </p>
              </div>
              
              <div className="bg-neon-green/10 border border-neon-green/20 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-neon-green w-5 h-5" />
                  <span className="font-black text-neon-green text-sm uppercase tracking-wider">Nosso Objetivo</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Educação estatística e ferramentas de controle para você decidir de forma consciente e responsável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVapo;