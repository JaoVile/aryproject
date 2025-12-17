"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Bloqueia o scroll durante a animação de entrada
    document.body.style.overflow = "hidden";
    
    // Simula o carregamento com um contador
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Velocidade do contador

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Libera o scroll
    }, 2500); // Tempo total da animação

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // Efeito "Cortina"
        >
          {/* Textura de fundo sutil (Glow Dourado) para sofisticação */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,199,130,0.15)_0%,transparent_60%)]" />

          <div className="relative w-full h-full flex items-center justify-center">
            <div className="overflow-hidden relative z-10">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl md:text-8xl italic tracking-tight">
                Aesthetic<span className="text-accent">.</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs uppercase tracking-[0.4em] mt-4 text-foreground/40"
              >
                Redefinindo a Beleza
              </motion.p>
            </motion.div>
            </div>

            {/* Contador de Progresso Gigante (Estilo Editorial) */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 overflow-hidden">
               <motion.p 
                 className="font-serif text-6xl md:text-9xl text-primary font-light leading-none select-none opacity-50"
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
               >
                 {progress}%
               </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}