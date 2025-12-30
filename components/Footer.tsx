import React from 'react';
import { View, Language } from '../App';

const content = {
  pt: {
    desc: "Estatísticas, performance e organização para fãs de eSoccer que buscam decisões baseadas em dados.",
    links: ["Termos de Uso", "Política de Privacidade", "Suporte / Contato"],
    legal: "Informação Legal",
    disclaimer: "Este aplicativo é puramente informativo e educacional. Não realizamos apostas, não processamos pagamentos e não garantimos resultados. Uso restrito para maiores de 18 anos."
  },
  en: {
    desc: "Statistics, performance, and organization for eSoccer fans who value data-driven decisions.",
    links: ["Terms of Use", "Privacy Policy", "Support / Contact"],
    legal: "Legal Information",
    disclaimer: "This app is strictly informational and educational. We do not place bets, process payments, or guarantee results. Intended for users aged 18 and over."
  }
};

const Footer: React.FC<{ lang: Language, onNavigate: (v: View) => void }> = ({ lang, onNavigate }) => {
  const t = content[lang];
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <span 
            className="font-display font-black text-2xl italic text-white uppercase cursor-pointer transition-colors hover:text-neon-green" 
            onClick={() => onNavigate('home')}
          >
            VAPO<span className="text-neon-green">eSoccer</span>
          </span>
          <p className="mt-4 text-slate-600 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
            {t.desc}
          </p>
        </div>
        
        <div className="text-center">
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-40">App Info</h4>
          <div className="flex flex-col gap-5">
            <button onClick={() => onNavigate('terms')} className="text-slate-400 hover:text-neon-green text-xs uppercase font-bold tracking-widest transition-colors">{t.links[0]}</button>
            <button onClick={() => onNavigate('privacy')} className="text-slate-400 hover:text-neon-green text-xs uppercase font-bold tracking-widest transition-colors">{t.links[1]}</button>
            <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-neon-green text-xs uppercase font-bold tracking-widest transition-colors">{t.links[2]}</button>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-40">{t.legal}</h4>
          <p className="text-slate-600 text-[10px] leading-relaxed uppercase font-bold max-w-xs mx-auto md:ml-auto">
            {t.disclaimer}
          </p>
        </div>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-slate-800 text-[9px] uppercase font-bold tracking-[0.3em]">
          © {new Date().getFullYear()} VAPO eSOCCER • ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;