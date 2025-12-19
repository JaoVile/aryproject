"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

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
    <section 
      ref={ref} 
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center"
    >
      
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Gradiente para escurecer a imagem e garantir legibilidade do texto */}
        <div className="absolute inset-0 z-10 bg-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
        
        <Image 
          src="/assets/hero-bg2.jpg" 
          alt="Mulher recebendo tratamento estético em ambiente de clínica" 
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Partículas Minimalistas (Realce Sutil) */}
      <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        />
        <motion.div 
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-amber-200/80 rounded-full shadow-[0_0_25px_rgba(253,230,138,0.6)]"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-stone-100 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-stone-200/60 rounded-full blur-[1px]"
        />
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0.5 }}
          className="absolute top-[80%] left-[10%] w-2 h-2 bg-white/70 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[10%] right-[20%] w-3 h-3 bg-amber-100/50 rounded-full blur-[0.5px]"
        />
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute bottom-[50%] left-[45%] w-2 h-2 bg-stone-300 rounded-full shadow-[0_0_10px_rgba(231,229,228,0.7)]"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute top-[30%] right-[35%] w-4 h-4 bg-white/50 rounded-full blur-[2px]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute top-[15%] left-[15%] w-2 h-2 bg-amber-100/60 rounded-full shadow-[0_0_10px_rgba(253,230,138,0.4)]"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-white/40 rounded-full blur-[1px]"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.7, 0.3], x: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1.8 }}
          className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-stone-200 rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          className="absolute top-[60%] right-[5%] w-2.5 h-2.5 bg-amber-50/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[10%] left-[25%] w-2 h-2 bg-white/30 rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4.2 }}
          className="absolute top-[25%] right-[45%] w-1 h-1 bg-stone-100 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-[40%] left-[8%] w-3 h-3 bg-amber-200/30 rounded-full blur-[2px]"
        />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2.8 }}
          className="absolute top-[5%] left-[40%] w-2 h-2 bg-white/60 rounded-full"
        />
      </div>

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
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg"
          >
            Estética <br /> <span className="italic font-light text-white/90">Natural</span> & Única
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
            className="mt-6 text-lg text-white/90 max-w-2xl mx-auto"
          >
            Realce sua beleza autêntica com tratamentos personalizados e tecnologia de ponta.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="mt-10"
          >
            <a href="#agendar" className="px-10 py-4 bg-white text-stone-900 rounded-full text-sm font-medium tracking-widest hover:bg-stone-200 transition-all shadow-lg">
              AGENDAR CONSULTA
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 
        IMAGEM 1: Esquerda Superior (Destaque Maior)
        Posicionada acima do background (z-10) mas abaixo do texto (z-20) se houver sobreposição.
      */}
      <motion.div
        style={{ opacity }} // Aplica o fade-out ao scrollar
        className="absolute top-[12%] left-[3%] md:top-[18%] md:left-[5%] z-10"
      >
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* O card inteiro flutua agora, mantendo a borda junto com a imagem */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 h-56 md:w-80 md:h-[30rem] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative"
          >
            <Image
              src="/assets/hero-p1.jpg"
              alt="Destaque estético principal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 320px"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 
        IMAGEM 2: Direita Inferior (Menor)
      */}
      <motion.div
        style={{ opacity }} // Aplica o fade-out ao scrollar
        className="absolute bottom-[12%] right-[3%] md:bottom-[18%] md:right-[5%] z-10"
      >
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* O card inteiro flutua agora */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-32 h-44 md:w-60 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative"
          >
            <Image
              src="/assets/hero-p2.jpg"
              alt="Destaque estético secundário"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 240px"
            />
          </motion.div>
        </motion.div>
      </motion.div>

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