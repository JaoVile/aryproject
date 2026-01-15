"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-24 bg-brand-dark relative z-10" id="contato">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          
          {/* --- LADO ESQUERDO: Informações de Contato --- */}
          <div className="w-full md:w-1/2 py-8">
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-primary mb-12">
              Entre em contato
            </h2>
            
            <div className="space-y-10 font-sans text-white">
              
              {/* BLOCO 1: TELEFONE */}
              <div className="pb-8 border-b border-white/10">
                 <div className="flex items-center gap-4 mb-3">
                   <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.335 1.832a19.126 19.126 0 01-8.02-8.02l1.832-1.335c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                     </svg>
                   </div>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Telefone</p>
                 </div>
                 <p className="text-2xl lg:text-3xl font-bold pl-12">(47) 99999-9999</p>
              </div>

              {/* BLOCO 2: INSTAGRAM */}
              <div className="pb-8 border-b border-white/10">
                 <div className="flex items-center gap-4 mb-3">
                   <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                     </svg>
                   </div>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Instagram</p>
                 </div>
                 <a href="https://instagram.com/alojadosim.shop" target="_blank" rel="noopener noreferrer" className="text-2xl lg:text-3xl font-bold pl-12 hover:text-brand-primary transition-colors">
                   @alojadosim.shop
                 </a>
              </div>

              {/* BLOCO 3: HORÁRIOS */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-brand-primary/50"></span>
                  Horários de Atendimento
                </p>
                <div className="pl-11 space-y-1 opacity-80 text-sm lg:text-base">
                  <p>Segunda a Sexta: <span className="font-bold">09h às 18h</span></p>
                  <p>Sábado: <span className="font-bold">09h às 13h</span></p>
                </div>
              </div>

            </div>
          </div>

          {/* --- LADO DIREITO: Imagem --- */}
          <div className="w-full md:w-1/2 relative h-[500px] lg:h-[650px]">
            {/* Adicionei 'transform-gpu' e removi 'overflow-hidden' se não for estritamente necessário, 
                mas mantive aqui com a correção de renderização */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transform-gpu">
               <Image
                 src="/assets/fotocinco.jpg"
                 alt="Entre em contato conosco"
                 fill
                 quality={100} // <--- Força qualidade máxima
                 // Removi o 'unoptimized' para o Next.js gerar o tamanho correto
                 className="object-cover"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}