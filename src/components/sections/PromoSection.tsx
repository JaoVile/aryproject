"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Imagem Oval Horizontal */}
          <motion.div className="w-full lg:w-1/2 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-xl aspect-[16/10]">
              <div className="absolute inset-0 rounded-[50%] overflow-hidden border-2 border-brand-primary/20">
                <Image
                  src="/assets/fototres.jpg" // <--- Atualizado com a sua foto
                  alt="Curadoria"
                  fill
                  className="object-cover"
                  unoptimized // Garante carregamento sem erros
                />
                {/* Overlay sutil para manter a identidade da marca sobre a foto */}
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-primary mb-6 leading-tight">
              Descubra seus <br />
              desejos hoje!
            </h2>
            <p className="text-brand-soft/80 font-sans text-lg leading-relaxed mb-8 max-w-md">
              Descubra uma curadoria única de produtos íntimos, pensados para maximizar 
              sua satisfação e prazer. Deixe sua imaginação te conduzir através de novas experiências sensoriais.
            </p>

            {/* BOTÃO BRANCO EXATO */}
            <Link href="/produtos">
              <button className="bg-white text-brand-primary font-bold py-4 px-12 rounded-full uppercase tracking-widest shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                EXPLORE AGORA
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}