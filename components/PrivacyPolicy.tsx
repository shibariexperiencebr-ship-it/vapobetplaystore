import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    back: "Voltar para o Início",
    title: "POLÍTICA DE PRIVACIDADE",
    update: "Última atualização: Maio de 2024",
    sections: [
      { h: "1. DADOS COLETADOS", p: "Dados fornecidos pelo usuário para funcionamento interno do app (análises e configurações)." },
      { h: "2. SEGURANÇA", p: "Nenhuma informação financeira ou credencial de aposta é coletada ou compartilhada." }
    ]
  },
  en: {
    back: "Back to Home",
    title: "PRIVACY POLICY",
    update: "Last updated: May 2024",
    sections: [
      { h: "1. DATA COLLECTION", p: "Data provided by the user for internal app functionality (analysis and settings)." },
      { h: "2. SECURITY", p: "No financial information or betting credentials are collected or shared." }
    ]
  }
};

const PrivacyPolicy: React.FC<{ lang: Language, onBack: () => void }> = ({ lang, onBack }) => {
  const t = content[lang];
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-neon-green mb-8 uppercase text-xs font-black"><ChevronLeft size={16} /> {t.back}</button>
        <h1 className="text-4xl font-black mb-2 tracking-tighter uppercase">{t.title}</h1>
        <p className="text-slate-600 mb-12 font-bold text-xs uppercase">{t.update}</p>
        <div className="space-y-12 text-slate-400 font-medium leading-relaxed">
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

export default PrivacyPolicy;