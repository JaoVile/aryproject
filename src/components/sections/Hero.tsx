"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Efeito Parallax: A imagem move mais devagar que o scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Gradiente Radial: Centro transparente -> Bordas claras (#F9F7F2) para integrar com o layout */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(249,247,242,0.5)_80%,#F9F7F2_100%)]" />
        <img 
          src="/hero-bg2.jpg" 
          alt="Estética de Luxo" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Conteúdo Principal */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Cada elemento filho aparece 0.2s depois do anterior
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-medium tracking-[0.2em] uppercase mb-6"
          >
            Estética Avançada 2025
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white drop-shadow-lg">
            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="block">Arte &</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="italic font-light block">Ciência.</motion.span>
          </h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
            className="text-lg md:text-xl font-light text-white/90 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Protocolos exclusivos que unem tecnologia de ponta à sutileza da beleza natural.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#F9F7F2] text-[#1C1917] rounded-full font-medium hover:bg-[#D4C5B5] transition-colors duration-300 min-w-[180px]">
              Agendar Avaliação
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[180px]">
              Conhecer Clínica
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}