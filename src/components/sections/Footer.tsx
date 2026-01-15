"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#12050b] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center">
          
          {/* 1. Logo Centralizada e Grande */}
          <div className="mb-8 relative group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-brand-primary/50 transition-all duration-500">
                <Image 
                   src="/assets/ICONE.jpeg" 
                   alt="Logo" 
                   width={50} 
                   height={50} 
                   className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-white mb-2">LOJA DO SIM</h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-10">Boutique Íntima</p>

          {/* 2. Menu Limpo (Linha Única) */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {['Shop', 'Sobre', 'Dúvidas', 'Trocas', 'Contato'].map((item) => (
              <Link key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-brand-soft/60 hover:text-white hover:underline decoration-brand-primary underline-offset-8 transition-all">
                {item}
              </Link>
            ))}
          </nav>

          {/* 3. Selos de Pagamento (Monocromáticos para não poluir) */}
          <div className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
             {/* Simulação de ícones de cartão - pode usar SVGs reais depois */}
             <div className="w-8 h-5 bg-white rounded"></div>
             <div className="w-8 h-5 bg-white rounded"></div>
             <div className="w-8 h-5 bg-white rounded"></div>
             <div className="w-8 h-5 bg-white rounded"></div>
          </div>

          {/* 4. Copyright Minimalista */}
          <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-widest">
            <p>© 2026 Loja do Sim. Todos os direitos reservados.</p>
            <p>Feito com ❤️ e Desejo.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}