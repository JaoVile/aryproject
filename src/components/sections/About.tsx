"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

// Variantes para animação escalonada (stagger) dos blocos de conteúdo
const staggerContainer = {
  hidden: { opacity: 1 }, // Começa com opacidade 1 para evitar "piscar"
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre a animação de cada item filho
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface AboutProps {
  preTitle?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  features?: string[];
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function About({
  preTitle = "Nossa Essência",
  title = <>Não transformamos quem você é. <span className="text-primary italic">Revelamos.</span></>,
  description = (
    <>
      <p>Fundada em 2018, nossa clínica nasceu de uma inquietação: o mercado de estética estava padronizando rostos. Nós escolhemos o caminho oposto.</p>
      <p>Acreditamos na <strong>Beleza Identitária</strong>. Cada ângulo do seu rosto conta uma história, e nossos protocolos são desenhados milimetricamente para respeitar essa narrativa, trazendo frescor e jovialidade sem perder seus traços únicos.</p>
    </>
  ),
  features = [
    "Tecnologia Laser de Última Geração",
    "Equipe Multidisciplinar",
    "Ambiente Sensorial e Privativo",
    "Pós-atendimento Premium",
  ],
  imageSrc = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  imageAlt = "A fundadora",
  ctaText = "AGENDAR AVALIAÇÃO",
  ctaLink = "#contato",
}: AboutProps) {
  return (
    <section id="sobre" className="relative py-16 md:py-24 z-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* LADO ESQUERDO: Imagem Fixa (Sticky) */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-32 h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10">
              {/* Usando uma imagem online do Unsplash para não precisar baixar arquivo */}
              <Image 
                 src={imageSrc}
                 alt={imageAlt}
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover w-full h-full"
              />
              {/* Camada de gradiente escuro para profundidade e transição */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/50" />
            </div>
          </div>

          {/* LADO DIREITO: Texto Scrollável */}
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center py-10 text-center lg:text-left items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // A animação começa quando 10% do container estiver visível
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6"
            >
              {preTitle}
            </motion.span>
            
            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl md:text-6xl mb-8 leading-[1.1] text-foreground"
            >
              {title}
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="space-y-6 text-lg text-stone-600 font-light leading-relaxed"
            >
              {description}
            </motion.div>

            {/* Lista de Diferenciais */}
            <motion.div variants={staggerItem} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {features.map((item, i) => (
                <motion.div 
                  variants={staggerItem}
                  key={item} // Usar o próprio item como chave é mais robusto que o índice
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Botão de Ação (CTA) */}
            <motion.div
              variants={staggerItem}
              className="mt-10 flex justify-center lg:justify-start"
            >
              <a href={ctaLink} className="px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl">
                {ctaText}
              </a>
            </motion.div>

            {/* Assinatura */}
            <motion.div variants={staggerItem} className="mt-12 pt-8 border-t border-stone-200 w-full">
               <p className="font-serif text-2xl italic text-primary">Dra. Isabella & Co.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}