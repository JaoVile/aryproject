"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ScanFace, Sparkles, Gem, Flower2 } from "lucide-react";
import Image from "next/image";

const protocols = [
  {
    title: "Arquitetura Facial",
    description: "Redefinição de contornos para uma beleza natural e equilibrada.",
    image: "/assets/harmonizacao.jpg",
    icon: <ScanFace className="w-6 h-6" />,
    span: "md:col-span-2",
  },
  {
    title: "Renovação Celular",
    description: "Estímulo de colágeno para restaurar firmeza e elasticidade.",
    image: "/assets/bioestimuladores.jpg",
    icon: <Sparkles className="w-6 h-6" />,
    span: "md:col-span-1",
  },
  {
    title: "Efeito Glow",
    description: "Pele radiante e uniforme com tecnologia BB Laser.",
    image: "/assets/efeitoglow.jpg",
    icon: <Gem className="w-6 h-6" />,
    span: "md:col-span-1",
  },
  {
    title: "Santuário Urbano",
    description: "Rituais terapêuticos para relaxamento profundo de corpo e alma.",
    image: "/assets/spa3.jpg",
    icon: <Flower2 className="w-6 h-6" />,
    span: "md:col-span-2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

export default function Protocols() {
  return (
    <section id="protocolos" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="w-full md:w-auto">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Nossa Assinatura
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Protocolos de <br />
              <span className="italic text-primary">Alta Performance.</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-600 font-light leading-relaxed text-center md:text-left">
            Combinamos arte, ciência e tecnologia de ponta para criar resultados que não apenas transformam, mas revelam a sua melhor versão.
          </p>
        </div>

        {/* Grid de Protocolos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              className={`${protocol.span} relative rounded-[2rem] p-6 md:p-8 group overflow-hidden min-h-[300px] md:min-h-[350px]`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={protocol.image}
                  alt={protocol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradientes */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              </div>

              {/* Conteúdo do Card */}
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                {/* Header do Card (Ícone e Seta) */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                    {protocol.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 group-hover:rotate-45" aria-hidden="true" />
                </div>

                {/* Footer do Card (Texto) */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-3 text-white">
                    {protocol.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/80">
                    {protocol.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}