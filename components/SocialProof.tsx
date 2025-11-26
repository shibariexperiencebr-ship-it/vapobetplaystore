import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const messages = [
    { user: "Carlos M.", time: "10:42", text: "Mais um green aqui! 💸 Pagou meu almoço já.", type: "text" },
    { user: "Admin VAPO", time: "10:43", text: "✅ GREEN CONFIRMADO! Quem pegou?", type: "green" },
    { user: "André L.", time: "10:44", text: "Peguei essa odd 1.90, coisa linda!", type: "text" },
    { user: "Matheus S.", time: "10:45", text: "Meta batida em 20 min hoje. Vocês são monstros.", type: "text" },
    { user: "Felipe J.", time: "10:50", text: "VAPO! 🤑🤑", type: "text" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
           {/* Mock Phone UI */}
           <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-sm mx-auto bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative"
          >
            {/* Header Telegram Fake */}
            <div className="bg-[#242f3d] p-4 flex items-center gap-3 border-b border-slate-700/50">
              <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold text-xs">
                VIP
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Grupo VIP - VAPO BET</h4>
                <p className="text-slate-400 text-xs">1.432 membros</p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-[#0e1621] p-4 h-[400px] flex flex-col gap-3 overflow-hidden relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://web.telegram.org/img/bg_0.png')" }}></div>
              
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.3 }}
                  className={`max-w-[85%] self-start rounded-xl p-3 shadow-md ${
                    msg.type === 'green' 
                      ? 'bg-neon-green/20 border border-neon-green/30 text-neon-green' 
                      : 'bg-[#182533] text-white'
                  }`}
                >
                  <p className={`text-xs font-bold mb-1 ${msg.type === 'green' ? 'text-neon-green' : 'text-cyber-purple'}`}>
                    {msg.user}
                  </p>
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-[10px] opacity-50 block text-right mt-1">{msg.time}</span>
                </motion.div>
              ))}
              
              {/* Blur fade at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0e1621] to-transparent"></div>
            </div>
           </motion.div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6">
            Quem entrou na última turma, já parou de reclamar da <span className="text-neon-green">segunda-feira</span>.
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Todos os dias compartilhamos as mesmas entradas que nossa equipe de analistas profissionais faz. É uma comunidade focada em um único objetivo: <strong>Colocar dinheiro no bolso do jeito mais rápido possível.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <div className="flex -space-x-4">
               <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://picsum.photos/seed/user1/100" alt="" />
               <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://picsum.photos/seed/user2/100" alt="" />
               <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://picsum.photos/seed/user3/100" alt="" />
               <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-white font-bold">+1k</div>
             </div>
             <div className="text-left">
               <p className="text-white font-bold">Junte-se a 1.400+ membros</p>
               <div className="flex text-yellow-400 text-xs">★★★★★</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;