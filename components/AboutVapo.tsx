import React from 'react';
import { BarChart3, Shield, Info, XCircle } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    title: "O que é o VAPO eSoccer?",
    p1: "O VAPO eSoccer é uma ferramenta informativa e educacional desenvolvida para organizar dados e estatísticas de partidas eletrônicas.",
    p2: "Nosso objetivo é fornecer recursos de análise, histórico de desempenho e acompanhamento estatístico para auxiliar usuários a tomarem decisões conscientes, baseadas em números e padrões, não em emoção.",
    p3: "O VAPO eSoccer:",
    bullets: [
      "Não realiza apostas",
      "Não processa pagamentos de jogos de azar",
      "Não se conecta a casas de apostas"
    ],
    freeTitle: "Versão Gratuita",
    freeDesc: "Acesso a estatísticas básicas e registro manual para todos.",
    advTitle: "Recursos Avançados",
    advDesc: "Indicadores adicionais e organização profissional via App.",
    legalNotice: {
      title: "Aviso Legal",
      p1: "Este aplicativo é puramente informativo e educacional. Não realizamos apostas, não processamos pagamentos relacionados a jogos de azar e não garantimos resultados.",
      p2: "O uso do aplicativo é de responsabilidade exclusiva do usuário. Conteúdo destinado a maiores de 18 anos."
    }
  },
  en: {
    title: "What is VAPO eSoccer?",
    p1: "VAPO eSoccer is an informational and educational tool designed to organize data and statistics related to electronic sports matches.",
    p2: "Our goal is to provide analytical resources, performance history, and statistical tracking to help users make conscious, data-driven decisions based on patterns rather than emotion.",
    p3: "VAPO eSoccer:",
    bullets: [
      "Does not place bets",
      "Does not process gambling payments",
      "Does not connect to betting operators"
    ],
    freeTitle: "Free Version",
    freeDesc: "Basic statistics and manual tracking for everyone.",
    advTitle: "Advanced Features",
    advDesc: "Additional indicators and professional organization via App.",
    legalNotice: {
      title: "Legal Notice",
      p1: "This application is strictly informational and educational. We do not place bets, process gambling-related payments, or guarantee results.",
      p2: "Intended for users aged 18 and over. Use at your own risk."
    }
  }
};

const AboutVapo: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang];
  return (
    <section id="about" className="py-24 bg-deep-slate border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 className="text-neon-green w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">{t.title}</h2>
          </div>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            
            <div className="space-y-3 mt-4">
              <p className="font-bold text-white uppercase text-sm tracking-wider">{t.p3}</p>
              <ul className="space-y-2">
                {t.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-500 text-base">
                    <XCircle size={16} className="text-red-500/50" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="text-neon-green w-5 h-5" />
                  <span className="font-black text-white text-xs uppercase tracking-widest">{t.freeTitle}</span>
                </div>
                <p className="text-slate-500 text-sm leading-snug">{t.freeDesc}</p>
              </div>
              <div className="bg-neon-green/5 p-6 rounded-2xl border border-neon-green/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-neon-green w-5 h-5" />
                  <span className="font-black text-neon-green text-xs uppercase tracking-widest">{t.advTitle}</span>
                </div>
                <p className="text-slate-500 text-sm leading-snug">{t.advDesc}</p>
              </div>
            </div>

            <div id="legal" className="mt-16 pt-10 border-t border-white/5">
               <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                 <Shield size={16} className="text-neon-green" />
                 {t.legalNotice.title}
               </h4>
               <p className="text-slate-500 text-sm mb-4 italic">{t.legalNotice.p1}</p>
               <p className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">{t.legalNotice.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVapo;