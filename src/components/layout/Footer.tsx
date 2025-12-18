"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Chamada Principal */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-center md:text-left"
          >
            Sua melhor versão <br />
            <span className="text-primary italic">Sua renovação começa aqui.</span>
          </motion.h2>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 text-center md:text-left">
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Contato</h3>
            <p className="text-lg font-light text-white/80 mb-2">+55 11 99999-9999</p>
            <p className="text-lg font-light text-white/80">contato@aesthetic.com.br</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Endereço</h3>
            <p className="text-lg font-light text-white/80 mb-2">Av. Faria Lima, 0000</p>
            <p className="text-lg font-light text-white/80">Jardim Paulistano, São Paulo</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Social</h3>
            <div className="flex flex-col gap-2 items-center md:items-start">
              {["Instagram", "LinkedIn", "WhatsApp"].map((social) => (
                <a key={social} href="#" className="text-lg font-light text-white/80 hover:text-primary transition-colors w-fit">
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-y-4 gap-x-8 text-xs text-white/40 font-light">
          <p>© 2025 Aesthetic Clinic. Todos os direitos reservados.</p>
          <p className="text-center md:text-right">
            Desenvolvido com ♡ por <a href="https://github.com/JaoVile" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">
              João Marcos F. Vilela
            </a>
          </p>
        </div>

        {/* Texto Gigante Decorativo */}
        <div className="w-full text-center mt-24 opacity-5 select-none pointer-events-none">
          <span className="text-[12vw] font-serif leading-none text-white">AESTHETIC</span>
        </div>
      </div>
    </footer>
  );
}