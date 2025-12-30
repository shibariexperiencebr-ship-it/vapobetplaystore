import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TermsOfUse: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neon-green mb-8 hover:underline font-bold uppercase text-xs tracking-widest"
        >
          <ChevronLeft size={16} /> Voltar para o Início
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">TERMOS DE USO</h1>
        <p className="text-slate-500 mb-12 font-medium">Última atualização: 20 de Maio de 2024</p>
        
        <div className="space-y-10 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">1. SOBRE A PLATAFORMA</h2>
            <p>O VAPO Soccer é uma plataforma de conteúdo informativo e educacional, voltada à disponibilização de sinais informativos baseados em análise estatística, ferramentas de gestão de banca e acompanhamento de desempenho. ⚠️ <strong>O VAPO Soccer não é uma casa de apostas.</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">2. NÃO INTERMEDIAÇÃO DE APOSTAS</h2>
            <p>O usuário reconhece que o VAPO Soccer não realiza apostas, não intermedia apostas e não recebe ou movimenta valores para tal. Todas as decisões são de inteira responsabilidade do usuário.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">3. NATUREZA DO CONTEÚDO</h2>
            <p>Os conteúdos têm caráter exclusivamente informativo. Não constituem promessa de lucro, garantia de resultado ou recomendação financeira. Resultados passados não garantem resultados futuros.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">4. RISCO E RESPONSABILIDADE</h2>
            <p>Apostas esportivas envolvem risco financeiro. Podem ocorrer perdas. O VAPO Soccer não se responsabiliza por decisões tomadas pelo usuário ou prejuízos financeiros.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">5. IDADE MÍNIMA</h2>
            <p>O uso da plataforma é restrito a maiores de 18 anos. Ao utilizar o serviço, você declara ter idade legal em sua jurisdição.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">6. CONTATO</h2>
            <p>Dúvidas? Entre em contato pelo e-mail: <span className="text-neon-green">suporte@vaposoccer.com</span></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;