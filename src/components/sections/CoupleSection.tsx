"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* ARCO */}
              <div className="absolute inset-0 rounded-t-full rounded-b-[3rem] overflow-hidden border-2 border-brand-primary/20">
                <Image
                  src="/assets/fotoquatro.jpg" // <--- Atualizado aqui
                  alt="Casal"
                  fill
                  unoptimized // Garante o carregamento rápido
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2 text-left">
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-primary mb-4">
              Explore sua <br />
              sexualidade
            </h2>
            <h3 className="text-white font-sans text-sm tracking-widest uppercase mb-6 font-bold">
              Acolhendo experiências apaixonantes
            </h3>
            <p className="text-brand-soft/80 font-sans text-base lg:text-lg leading-relaxed mb-6">
              Não se trata apenas de prazer físico, mas de conexão. 
              Permita-se descobrir novos desejos e sentimentos profundos. 
              Acreditamos que a intimidade compartilhada é uma jornada que merece ser percorrida com confiança e intensidade.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}