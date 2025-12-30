import React from 'react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
          <div className="text-center md:text-left">
            <span 
              className="font-display font-black text-2xl tracking-tighter italic text-white cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              VAPO<span className="text-neon-green">SOCCER</span>
            </span>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
              O aplicativo de organização e estatística para quem leva o mercado a sério.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Informações</h4>
            <div className="flex flex-col gap-4">
              <button onClick={() => onNavigate('terms')} className="text-slate-400 hover:text-neon-green text-sm font-medium transition-colors uppercase tracking-widest">Termos de Uso</button>
              <button onClick={() => onNavigate('privacy')} className="text-slate-400 hover:text-neon-green text-sm font-medium transition-colors uppercase tracking-widest">Política de Privacidade</button>
              <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-neon-green text-sm font-medium transition-colors uppercase tracking-widest">Suporte / Contato</button>
            </div>
          </div>
          
          <div className="text-center md:text-right">
             <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Aviso Legal</h4>
             <p className="text-slate-500 text-[11px] leading-relaxed">
               Apostas envolvem risco financeiro. Este site não garante lucro. 
               Conteúdo 100% informativo e educacional. 
               Proibido para menores de 18 anos.
             </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-slate-700 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} VAPO SOCCER. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;