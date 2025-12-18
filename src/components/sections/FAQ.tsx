"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Os procedimentos são dolorosos?",
    answer: "Nossa prioridade é o seu conforto. Utilizamos anestésicos tópicos de alta potência e técnicas minimamente invasivas. A maioria dos pacientes relata apenas um leve desconforto, perfeitamente tolerável."
  },
  {
    question: "Quanto tempo dura o efeito do Bioestimulador?",
    answer: "Os bioestimuladores de colágeno têm efeito duradouro, geralmente entre 18 a 24 meses, dependendo do organismo de cada paciente e do estilo de vida."
  },
  {
    question: "Posso voltar ao trabalho no mesmo dia?",
    answer: "Sim! A maioria dos nossos protocolos, como o Laser Lavieen e preenchimentos leves, permite retorno imediato às atividades sociais e profissionais (o famoso 'lunch-time procedure')."
  },
  {
    question: "Qual a diferença entre Botox e Preenchimento?",
    answer: "O Botox (toxina botulínica) relaxa a musculatura para suavizar rugas de expressão. O Preenchimento (ácido hialurônico) repõe volume perdido e estrutura o rosto. Frequentemente usamos ambos para uma harmonização completa."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Tudo o que você <span className="italic text-stone-400">precisa saber.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-stone-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-center md:text-left group"
              >
                <span className="text-lg font-medium text-foreground group-hover:text-accent transition-colors pr-8 w-full md:w-auto">
                  {faq.question}
                </span>
                <span className="text-accent flex-shrink-0">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-stone-600 font-light leading-relaxed text-center md:text-left">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}