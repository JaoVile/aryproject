import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-32 bg-brand-dark overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-white">
              Permita-se. <br />
              Descubra-se. <br />
              Diga sim para você.
            </h2>

            <span className="text-sm font-bold tracking-widest uppercase text-brand-primary mb-6 block">
              Começa a gente...
            </span>

            <div className="text-base text-brand-soft/70 font-sans font-light leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0">
              <p>
                Na A Loja do Sim, acreditamos que a jornada mais excitante de todas 
                é aquela que leva ao encontro do próprio corpo. Mais do que uma sex shop, 
                somos um convite para você se priorizar, se conhecer e celebrar a pessoa incrível que você é.
              </p>
            </div>

            <div>
              <Link href="/sobre" className="text-white border-b border-brand-primary pb-1 font-serif italic hover:text-brand-primary transition-colors">
                Saiba mais sobre nós
              </Link>
            </div>
          </div>

          {/* Imagem Oval Vertical */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
               {/* Adicionei 'group' aqui para garantir o contexto do posicionamento */}
               <div className="relative w-full h-full overflow-hidden rounded-[50%] border border-brand-primary/20 group">
                 <Image 
                    src="/assets/fotodois.jpg"
                    alt="Permita-se"
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                 />
                 {/* === Overlay para escurecer a imagem === */}
                 {/* bg-brand-dark/40 significa 40% de opacidade da cor escura */}
                 {/* mix-blend-multiply ajuda a integrar melhor as cores escuras */}
                 <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply pointer-events-none"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}