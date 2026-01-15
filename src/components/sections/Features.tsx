"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Curadoria Premium",
    desc: "Produtos testados e aprovados para garantir sua segurança e prazer máximo.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Discreção Total",
    desc: "Embalagens 100% discretas. Sua privacidade é nossa prioridade absoluta.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Ambiente Acolhedor",
    desc: "Tire suas dúvidas sem tabus. Atendimento humanizado e empático.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-dark relative z-10 overflow-hidden">
      
      {/* Background Glow para dar profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Por que escolher a <span className="text-brand-primary italic">Loja do Sim?</span>
          </h2>
          <div className="w-24 h-[1px] bg-brand-primary mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* CARTÃO GLASSMORPHIC (VIDRO) */}
              <div className="h-full p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(233,30,99,0.2)]">
                
                {/* Ícone com brilho */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary/20 to-transparent flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  {feature.icon}
                </div>

                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-brand-soft/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}