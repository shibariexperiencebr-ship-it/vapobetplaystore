import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <span className="font-display font-black text-xl tracking-tighter italic text-slate-700">
            VAPO<span className="text-slate-600">BET</span>365
          </span>
        </div>
        <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
          <br /><br />
          <strong>Aviso de responsabilidade:</strong> Apostas esportivas envolvem risco financeiro. Os resultados passados não garantem resultados futuros. Jogue com responsabilidade. Proibido para menores de 18 anos.
        </p>
        <p className="text-slate-700 text-[10px] mt-6">
          © {new Date().getFullYear()} VAPO BET 365. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;