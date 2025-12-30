import React from 'react';
import { ChevronLeft, Mail } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: { back: "Início", title: "Suporte", subtitle: "Dúvidas técnicas ou sobre o uso do App.", email: "suporte@vaposoccer.com" },
  en: { back: "Home", title: "Support", subtitle: "Technical questions or App usage.", email: "support@vaposoccer.com" }
};

const Contact: React.FC<{ lang: Language, onBack: () => void }> = ({ lang, onBack }) => {
  const t = content[lang];
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <button onClick={onBack} className="flex items-center gap-2 text-neon-green mb-8 uppercase text-xs font-black mx-auto"><ChevronLeft size={16} /> {t.back}</button>
        <h1 className="text-4xl font-black mb-6 tracking-tighter uppercase">{t.title}</h1>
        <p className="text-slate-500 mb-12 font-medium">{t.subtitle}</p>
        <div className="p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10">
          <Mail className="mx-auto text-neon-green w-12 h-12 mb-6" />
          <a href={`mailto:${t.email}`} className="text-2xl font-black text-white hover:text-neon-green transition-colors">{t.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;