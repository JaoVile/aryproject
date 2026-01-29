// c:\Projetos\Workana\Sexshop\aryelleproject\src\components\layout\Navbar.tsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBumped, setIsBumped] = useState(false);
  const pathname = usePathname();

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Lógica: Mostrar carrinho sempre na loja, ou apenas se tiver itens fora dela
  const isShopPage = pathname === "/" || pathname === "/shop";
  const showCartButton = isShopPage || itemCount > 0;

  // Efeito de "pulo" no ícone quando adiciona item
  useEffect(() => {
    if (itemCount === 0) return;
    setIsBumped(true);
    const timer = setTimeout(() => setIsBumped(false), 300);
    return () => clearTimeout(timer);
  }, [itemCount]);

  // Detectar scroll para mudar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fundo escuro se rolou a página OU se o menu mobile estiver aberto (para o X ficar visível)
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isMobileMenuOpen) ? "bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tighter hover:opacity-90 transition-opacity">
          Loja do <span className="text-brand-primary italic">Sim</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-medium">Início</Link>
          <Link href="/sobre" className="text-white/80 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-medium">Sobre</Link>
          <Link href="/#produtos" className="text-white/80 hover:text-brand-primary transition-colors text-sm uppercase tracking-widest font-medium">Produtos</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button Otimizado */}
          <AnimatePresence>
            {showCartButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Link href="/checkout" className="relative group p-2 block" aria-label="Carrinho de Compras">
                  <motion.div
                    animate={{ scale: isBumped ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ShoppingBag className={`w-6 h-6 transition-colors ${itemCount > 0 ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'}`} />
                  </motion.div>
                  
                  <AnimatePresence>
                    {itemCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-dark shadow-sm"
                      >
                        {itemCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:text-brand-primary transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6 items-center text-center">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-brand-primary text-xl font-serif">Início</Link>
              <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-brand-primary text-xl font-serif">Sobre</Link>
              <Link href="/#produtos" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-brand-primary text-xl font-serif">Produtos</Link>
              
              {/* Botão de Checkout no Menu Mobile */}
              {itemCount > 0 && (
                <Link href="/checkout" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-brand-primary text-white py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg mt-2">
                  Finalizar Compra ({itemCount})
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
