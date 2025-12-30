import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neon-green mb-8 hover:underline font-bold uppercase text-xs tracking-widest"
        >
          <ChevronLeft size={16} /> Voltar para o Início
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">POLÍTICA DE PRIVACIDADE</h1>
        <p className="text-slate-500 mb-12 font-medium">Última atualização: 20 de Maio de 2024</p>
        
        <div className="space-y-10 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">1. DADOS COLETADOS</h2>
            <p>Coletamos dados fornecidos por você (nome, e-mail) e dados automáticos (IP, tipo de dispositivo) para melhorar sua experiência no aplicativo.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">2. FINALIDADE</h2>
            <p>Seus dados são usados para operar o app, fornecer suporte, garantir segurança e prevenir fraudes. Não vendemos ou alugamos seus dados pessoais.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">3. SEGURANÇA</h2>
            <p>Adotamos medidas técnicas para proteger seus dados contra acessos não autorizados. Os dados são guardados apenas pelo tempo necessário.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">4. SEUS DIREITOS</h2>
            <p>Você pode acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento enviando um e-mail para nosso suporte.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">5. CONTATO</h2>
            <p>Para questões de privacidade: <span className="text-neon-green">dpo@vaposoccer.com</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;