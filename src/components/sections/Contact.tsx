"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Lado Esquerdo: Convite */}
          <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block"
            >
              Contato
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-8"
            >
              Vamos conversar sobre <span className="italic text-primary">você?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-stone-600 font-light leading-relaxed mb-12"
            >
              Agende uma avaliação inicial para entendermos seus objetivos e desenharmos um protocolo exclusivo para sua pele.
            </motion.p>
            
            <div className="space-y-6 w-full">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">WhatsApp</h3>
                <p className="text-stone-600 font-light hover:text-accent transition-colors cursor-pointer">+55 11 99999-9999</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">Email</h3>
                <p className="text-stone-600 font-light hover:text-accent transition-colors cursor-pointer">contato@aesthetic.com.br</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário Minimalista */}
          <div className="lg:w-2/3">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Nome" 
                    className="w-full bg-transparent border-b border-stone-200 py-4 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="tel" 
                    placeholder="Telefone" 
                    className="w-full bg-transparent border-b border-stone-200 py-4 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-stone-200 py-4 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="relative group">
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar?" 
                  className="w-full bg-transparent border-b border-stone-200 py-4 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <button type="button" className="group flex items-center gap-4 text-foreground font-medium hover:text-accent transition-colors">
                  <span className="uppercase tracking-widest text-sm">Enviar Mensagem</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}