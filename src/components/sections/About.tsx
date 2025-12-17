"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative py-32 z-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LADO ESQUERDO: Imagem Fixa (Sticky) */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-32 h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10">
              {/* Usando uma imagem online do Unsplash para não precisar baixar arquivo */}
              <img 
                 src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                 alt="A fundadora"
                 className="object-cover w-full h-full"
              />
              
              {/* Badge decorativo sobre a foto */}
              <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-white/10">
                <p className="text-base font-serif italic text-stone-700">"Beleza que revela."</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Texto Scrollável */}
          <div className="lg:w-1/2 flex flex-col justify-center py-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6"
            >
              Nossa Essência
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl mb-8 leading-[1.1] text-foreground"
            >
              Não transformamos quem você é. <span className="text-primary italic">Revelamos.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-stone-600 font-light leading-relaxed"
            >
              <p>
                Fundada em 2018, nossa clínica nasceu de uma inquietação: o mercado de estética estava padronizando rostos. Nós escolhemos o caminho oposto.
              </p>
              <p>
                Acreditamos na **Beleza Identitária**. Cada ângulo do seu rosto conta uma história, e nossos protocolos são desenhados milimetricamente para respeitar essa narrativa, trazendo frescor e jovialidade sem perder seus traços únicos.
              </p>
            </motion.div>

            {/* Lista de Diferenciais */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Tecnologia Laser de Última Geração",
                "Equipe Multidisciplinar",
                "Ambiente Sensorial e Privativo",
                "Pós-atendimento Premium"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Assinatura */}
            <div className="mt-12 pt-8 border-t border-stone-200">
               <p className="font-serif text-2xl italic text-primary">Dra. Isabella & Co.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}