"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Instale: npm install react-icons

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-primary/20 pt-16 md:pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Chamada Principal (Alinhada ao tom da marca) */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-4"
          >
            Seu prazer, <br />
            <span className="text-brand-primary italic">nossa prioridade.</span>
          </motion.h2>
          <p className="text-brand-soft/60 font-sans max-w-md mx-auto md:mx-0">
             Explore um universo de sensações com segurança, discrição e uma curadoria pensada para você.
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 text-center md:text-left">
          
          {/* Coluna 1: Institucional */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">A Loja</h3>
            <ul className="space-y-3">
               <li><Link href="/sobre" className="text-brand-soft/70 hover:text-white transition-colors">Quem Somos</Link></li>
               <li><Link href="/shop" className="text-brand-soft/70 hover:text-white transition-colors">Nossa Loja</Link></li>
               <li><Link href="/#produtos" className="text-brand-soft/70 hover:text-white transition-colors">Destaques</Link></li>
            </ul>
          </div>

          {/* Coluna 2: Ajuda */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">Ajuda</h3>
            <ul className="space-y-3">
               <li><Link href="/ajuda" className="text-brand-soft/70 hover:text-white transition-colors">Envio Discreto</Link></li>
               <li><Link href="/ajuda" className="text-brand-soft/70 hover:text-white transition-colors">Trocas e Devoluções</Link></li>
               <li><Link href="/ajuda" className="text-brand-soft/70 hover:text-white transition-colors">Privacidade (LGPD)</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">Fale Conosco</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
               {/* Ícones Sociais */}
               <Link href="https://www.instagram.com/alojadosim_sexshop6/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                  <FaInstagram size={28} />
               </Link>
               <Link href="https://wa.me/558799699843" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                  <FaWhatsapp size={28} />
               </Link>
            </div>
          </div>

          {/* Coluna 4: Pagamento (Simulação visual) */}
          <div>
             <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-6">Pagamento</h3>
             <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-brand-soft">PIX</div>
                <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-brand-soft">Crédito</div>
                <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-brand-soft">Boleto</div>
             </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-soft/40">
          <p>© 2025 A Loja do Sim. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://www.linkedin.com/in/joao-marcos-ferreira-vilela/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">João Vilela</a>
          </p>
        </div>

        {/* Texto Gigante Decorativo (Marca D'água) */}
        <div className="absolute bottom-0 left-0 w-full text-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
          <span className="text-[15vw] font-serif leading-none text-white whitespace-nowrap">LOJA DO SIM</span>
        </div>
      </div>
    </footer>
  );
}