"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Clara",
    role: "Empresária",
    text: "A experiência foi transformadora. Não apenas pelo resultado estético, que ficou super natural, mas pelo atendimento acolhedor e o ambiente que transmite uma paz incrível.",
    rating: 5,
  },
  {
    id: 2,
    name: "Juliana Costa",
    role: "Arquiteta",
    text: "Eu tinha receio de procedimentos estéticos, mas a Dra. Isabella entendeu exatamente o que eu queria: apenas realçar meus traços, sem exageros. O protocolo de bioestimuladores é fantástico.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariana S.",
    role: "Modelo",
    text: "O Laser Lavieen mudou a textura da minha pele. O cuidado com os detalhes e a tecnologia de ponta da clínica são incomparáveis em São Paulo.",
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#F9F7F2] relative overflow-hidden">
      {/* Linha divisória sutil no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Histórias reais de <br />
            <span className="italic text-stone-400">autoestima.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/50 backdrop-blur-sm border border-white/60 rounded-[2rem] p-6 md:p-16 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="font-serif text-xl md:text-3xl leading-relaxed text-stone-700 mb-10 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <h4 className="text-lg font-medium text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de Navegação */}
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="p-4 rounded-full border border-stone-200 hover:bg-white hover:border-accent/50 hover:text-accent transition-all duration-300 group"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={next}
                className="p-4 rounded-full border border-stone-200 hover:bg-white hover:border-accent/50 hover:text-accent transition-all duration-300 group"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}