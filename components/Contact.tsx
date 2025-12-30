import React from 'react';
import { ChevronLeft, Mail, MessageSquare } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const Contact: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neon-green mb-8 hover:underline font-bold uppercase text-xs tracking-widest"
        >
          <ChevronLeft size={16} /> Voltar para o Início
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-center md:text-left uppercase">Fale Conosco</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-2xl bg-neon-green/10">
              <Mail className="text-neon-green w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white mb-2 uppercase">E-mail</h3>
            <p className="text-slate-400 mb-6">Resposta em até 24h úteis.</p>
            <a href="mailto:suporte@vaposoccer.com" className="text-neon-green font-bold text-lg hover:underline">suporte@vaposoccer.com</a>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-2xl bg-white/5">
              <MessageSquare className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white mb-2 uppercase">WhatsApp</h3>
            <p className="text-slate-400 mb-6">Atendimento para membros.</p>
            <button className="bg-white text-black px-6 py-2 rounded-xl font-black uppercase text-sm">Chamar no Whats</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;