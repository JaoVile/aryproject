"use client";

import { motion, Transition } from "framer-motion";

export default function ActiveBackground() {
  // CORREÇÃO: Adicionei o tipo ': Transition' aqui para o TypeScript entender
  const transitionSettings: Transition = {
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
       {/* A cor de fundo base SÓLIDA para evitar buracos */}
       <div className="absolute inset-0 bg-brand-dark"></div>

      {/* --- LUZ ORGÂNICA 1 (Rosa/Primária) --- */}
      <motion.div
        initial={{ opacity: 0.4, x: "-20%", y: "10%", scale: 1 }}
        animate={{ 
            opacity: [0.3, 0.5, 0.3],
            x: ["-20%", "10%", "-20%"],
            y: ["10%", "-10%", "10%"],
            scale: [1, 1.2, 1],
        }}
        // Aqui o erro sumirá porque transitionSettings agora tem o tipo correto
        transition={transitionSettings}
        className="absolute top-0 left-0 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-brand-primary/30 rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px]"
      />

      {/* --- LUZ ORGÂNICA 2 (Roxo/Secundária) --- */}
      <motion.div
        initial={{ opacity: 0.3, x: "20%", y: "-20%", scale: 1.1 }}
        animate={{ 
            opacity: [0.3, 0.4, 0.3],
            x: ["20%", "-10%", "20%"], 
            y: ["-20%", "20%", "-20%"],
            scale: [1.1, 0.9, 1.1],
        }}
        // O spread operator (...) agora funciona porque os tipos batem
        transition={{ ...transitionSettings, delay: 2 }} 
        className="absolute bottom-0 right-0 w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] bg-[#8B5CF6]/30 rounded-full mix-blend-screen filter blur-[150px] md:blur-[200px]"
      />

      {/* --- CAMADA DE TEXTURA (Noise) --- */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.05] mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>
      
      {/* --- VIGNETTE GLOBAL --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(24,10,18,0.8)_100%)] z-[2]"></div>

    </div>
  );
}