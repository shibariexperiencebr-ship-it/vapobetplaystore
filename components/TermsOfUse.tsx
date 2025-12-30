import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    back: "Voltar para o Início",
    title: "TERMOS DE USO",
    update: "Última atualização: Maio de 2024",
    sections: [
      { h: "1. SOBRE A PLATAFORMA", p: "O VAPO eSoccer é uma plataforma informativa de análise estatística. O VAPO eSoccer não é uma casa de apostas." },
      { h: "2. NATUREZA DO CONTEÚDO", p: "Os conteúdos têm caráter exclusivamente informativo. Não constituem garantia de lucro ou recomendação financeira." },
      { h: "3. RISCO E RESPONSABILIDADE", p: "Apostas esportivas envolvem risco financeiro. O VAPO eSoccer não se responsabiliza por decisões tomadas pelo usuário." }
    ]
  },
  en: {
    back: "Back to Home",
    title: "TERMS OF USE",
    update: "Last updated: May 2024",
    sections: [
      { h: "1. ABOUT THE PLATFORM", p: "VAPO eSoccer is an informational statistical analysis platform. VAPO eSoccer is not a betting operator." },
      { h: "2. CONTENT NATURE", p: "The contents are strictly informational. They do not constitute profit guarantees or financial advice." },
      { h: "3. RISK AND RESPONSIBILITY", p: "Sports betting involves financial risk. VAPO eSoccer is not responsible for decisions made by the user." }
    ]
  }
};

const TermsOfUse: React.FC<{ lang: Language, onBack: () => void }> = ({ lang, onBack }) => {
  const t = content[lang];
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-neon-green mb-8 uppercase text-xs font-black"><ChevronLeft size={16} /> {t.back}</button>
        <h1 className="text-4xl font-black mb-2 tracking-tighter uppercase">{t.title}</h1>
        <p className="text-slate-600 mb-12 font-bold text-xs uppercase">{t.update}</p>
        <div className="space-y-12 text-slate-400 leading-relaxed font-medium">
          {t.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-white font-black mb-4 text-lg uppercase tracking-tight">{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;