import React from 'react';
import { Check, ChevronRight, Smartphone } from 'lucide-react';
import { Language } from '../App';

const content = {
  pt: {
    title: <>Versões do <span className="text-neon-green italic">Aplicativo</span></>,
    subtitle: "Escolha o nível de acesso ideal para suas análises.",
    free: {
      title: "Versão Gratuita",
      items: ["Estatísticas básicas", "Registro manual", "Histórico de dados"],
      btn: "Acessar Grátis"
    },
    adv: {
      title: "Versão Avançada",
      items: ["Estatísticas avançadas", "Indicadores estatísticos", "Alertas em tempo real", "Gestão avançada"],
      note: "Recursos avançados disponíveis diretamente no aplicativo.",
      btn: "Entrar no App"
    }
  },
  en: {
    title: <>App <span className="text-neon-green italic">Versions</span></>,
    subtitle: "Choose the ideal access level for your analysis.",
    free: {
      title: "Free Version",
      items: ["Basic statistics", "Manual tracking", "Data history"],
      btn: "Access Free"
    },
    adv: {
      title: "Advanced Version",
      items: ["Advanced statistics", "Statistical indicators", "Real-time alerts", "Advanced management"],
      note: "Advanced features available directly within the app.",
      btn: "Open the App"
    }
  }
};

const Pricing: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = content[lang];
  return (
    <section id="app" className="py-32 bg-deep-slate border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-4 tracking-tighter uppercase">{t.title}</h2>
          <p className="text-slate-500 font-medium tracking-tight text-lg">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Free Plan */}
          <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex flex-col transition-all hover:bg-white/[0.03]">
            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">{t.free.title}</h3>
            <ul className="space-y-4 mb-10 flex-1">
              {t.free.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                  <Check size={16} className="text-neon-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-white/10 hover:border-white/20 text-white rounded-2xl font-bold text-base uppercase transition-all hover:bg-white/5 active:scale-95">
                {t.free.btn}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white/[0.04] border-2 border-neon-green rounded-[2.5rem] p-10 flex flex-col shadow-neon relative overflow-hidden transition-all hover:bg-white/[0.06]">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Smartphone size={80} className="text-neon-green" />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">{t.adv.title}</h3>
            <ul className="space-y-4 mb-10 flex-1">
              {t.adv.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                  <Check size={16} className="text-neon-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 py-5 bg-neon-green text-deep-slate rounded-2xl font-black text-lg uppercase transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-neon-green/20">
                {t.adv.btn}
                <ChevronRight size={20} />
              </button>
              <p className="mt-6 text-slate-500 text-[10px] text-center font-bold uppercase tracking-widest leading-relaxed">
                {t.adv.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;