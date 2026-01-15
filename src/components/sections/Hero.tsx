"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroImages = [
  {
    src: "/assets/hero.avif",
    alt: "Diga sim para você - Principal",
    position: "object-top md:object-center",
  },
  {
    src: "/assets/hero2.avif",
    alt: "Sensualidade e olhar",
    position: "object-center",
  },
  {
    src: "/assets/hero3.avif",
    alt: "Textura e pele",
    position: "object-center",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Adicionei 'pt-20' para compensar a Navbar Fixa
<section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row bg-brand-dark overflow-hidden">      
      {/* LADO ESQUERDO: IMAGENS */}
      <div className="relative w-full md:w-[60%] h-[50vh] md:h-auto overflow-hidden z-0 group">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              priority
              className={`object-cover ${heroImages[currentIndex].position}`} 
            />
          </motion.div>
        </AnimatePresence>

        {/* === SOLUÇÃO DO DESCONFORTO: VIGNETTE === */}
        {/* Sombra interna em todas as bordas para "abraçar" a imagem */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(24,10,18,0.9)] z-10 pointer-events-none"></div>

        {/* Gradiente de fusão lateral (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-dark z-10 hidden md:block"></div>

        {/* Gradiente de fusão inferior (mobile) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent z-10 md:hidden"></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
        </div>
      </div>

      {/* LADO DIREITO: TEXTO */}
      <div className="relative w-full md:w-[40%] h-[50vh] md:h-auto bg-brand-dark flex flex-col justify-center items-center text-center px-8 md:px-12 z-20">
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none h-[300px]"></div>

        <div className="relative z-10 max-w-md">
          <div>
             <h1 className="font-serif text-5xl lg:text-7xl leading-tight text-white mb-6 drop-shadow-xl">
                DIGA <br />
                <span className="text-brand-primary italic relative px-2">“SIM”</span> <br />
                <span className="text-white/90 font-light block mt-4 text-3xl lg:text-4xl tracking-wide">PARA VOCÊ</span>
             </h1>
          </div>

          <p
            className="font-sans text-brand-soft/70 text-sm md:text-base leading-relaxed mb-10 mix-blend-plus-lighter"
          >
            Celebre seu corpo, seus desejos e seu bem-estar com nossa curadoria exclusiva. A jornada começa aqui.
          </p>

          <div>
            <Link href="#produtos">
              <button className="px-10 py-4 bg-brand-primary text-white font-bold text-xs tracking-[0.2em] uppercase rounded shadow-lg hover:shadow-brand-primary/40 transition-all hover:-translate-y-1">
                Explorar Coleção
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}