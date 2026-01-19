"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="relative z-10 bg-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-4 sm:mb-6 leading-tight">
              Nossa História
            </h1>
            <p className="text-brand-soft/70 font-sans text-base sm:text-lg leading-relaxed">
              Um convite para se conhecer, se priorizar e celebrar a pessoa incrível que você é.
            </p>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Fundadora Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            
            {/* Foto da Fundadora */}
            <motion.div 
              className="w-full lg:w-1/2 relative flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-md aspect-[3/4]">
                <div className="absolute inset-0 rounded-[50%] overflow-hidden border-2 border-brand-primary/20 shadow-2xl">
                  <Image
                    src="/assets/fotodois.jpg"
                    alt="Fundadora da Loja do Sim"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                </div>
              </div>
            </motion.div>

            {/* Texto sobre a Fundadora */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 leading-tight">
                Conheça a <span className="text-brand-primary italic">fundadora</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-brand-soft/70 font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  [NOME DA FUNDADORA], apaixonada por empoderamento feminino e bem-estar, 
                  fundou a Loja do Sim com um propósito claro: criar um espaço seguro, 
                  acolhedor e livre de julgamentos para que todas as pessoas possam 
                  explorar sua sexualidade com confiança.
                </p>
                
                <p>
                  Com uma visão humanizada e empática, acreditamos que a intimidade é 
                  um direito de todos e que cada pessoa merece ter acesso a produtos 
                  de qualidade que tragam prazer e bem-estar à sua vida.
                </p>
                
                <p className="text-brand-primary/80 italic">
                  "Meu sonho sempre foi criar um lugar onde as pessoas se sintam 
                  livres para serem quem são, sem tabus ou preconceitos. A Loja do Sim 
                  é mais que uma loja - é um movimento de autoconhecimento e liberdade."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* História da Loja */}
      <section className="py-16 sm:py-20 md:py-24 bg-brand-dark/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-8 sm:mb-12 text-center">
              Como tudo começou
            </h2>
            
            <div className="space-y-6 sm:space-y-8 text-white/80 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                A Loja do Sim nasceu de uma necessidade genuína: criar um espaço que 
                celebrasse a sexualidade de forma natural, respeitosa e inclusiva. 
                Em [ANO], percebemos que o mercado brasileiro ainda carregava muitos 
                tabus quando se tratava de produtos íntimos e prazer pessoal.
              </p>
              
              <p>
                Nossa missão sempre foi oferecer não apenas produtos de alta qualidade, 
                mas também um atendimento humanizado, onde cada cliente se sinta acolhido 
                e respeitado. Acreditamos que a educação sexual é fundamental e que 
                todos merecem ter acesso a informações claras e produtos seguros.
              </p>
              
              <p>
                Hoje, somos uma referência em [LOCALIDADE], atendendo pessoas de todas 
                as idades e orientações, sempre com discrição, respeito e profissionalismo. 
                Nossa curadoria é feita com muito cuidado, priorizando marcas que valorizam 
                a qualidade, a segurança e o prazer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores e Missão */}
      <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">Missão</h3>
              <p className="text-brand-soft/70 font-sans text-sm leading-relaxed">
                Oferecer produtos de qualidade e atendimento humanizado, criando um 
                espaço seguro para o autoconhecimento e exploração da sexualidade.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">Visão</h3>
              <p className="text-brand-soft/70 font-sans text-sm leading-relaxed">
                Ser referência em bem-estar íntimo, quebrando tabus e promovendo 
                educação sexual de forma acessível e respeitosa para todos.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">Valores</h3>
              <p className="text-brand-soft/70 font-sans text-sm leading-relaxed">
                Discrição, respeito, inclusividade, educação e acolhimento. 
                Acreditamos que cada pessoa é única e merece ser tratada com dignidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24 bg-brand-dark relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8">
              Faça parte da nossa <span className="text-brand-primary italic">jornada</span>
            </h2>
            <p className="text-brand-soft/70 font-sans text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Estamos aqui para acompanhar você em cada etapa do seu autoconhecimento. 
              Converse conosco, tire suas dúvidas e descubra produtos que vão transformar sua experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#produtos">
                <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-brand-primary text-white font-bold text-sm sm:text-base tracking-widest uppercase rounded-full hover:bg-brand-secondary transition-all transform hover:-translate-y-1 shadow-lg">
                  Ver Produtos
                </button>
              </Link>
              <Link href="/#contato">
                <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-transparent border-2 border-brand-primary text-brand-primary font-bold text-sm sm:text-base tracking-widest uppercase rounded-full hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1">
                  Entre em Contato
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
