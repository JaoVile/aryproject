"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useCart } from "@/hooks/useCart";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
];

const menuVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => (
  <motion.div
    variants={menuVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="fixed inset-0 bg-brand-dark z-50 flex flex-col items-center justify-center"
  >
    <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-6">
       <Link href="/" onClick={closeMenu}>
         <Image 
            src="/assets/ICONE.jpeg" 
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
       </Link>
       <button onClick={closeMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
       </button>
    </div>
    <nav className="flex flex-col items-center gap-8">
      {navLinks.map((link) => (
        <motion.div key={link.href} variants={menuItemVariants}>
          <Link 
            href={link.href}
            onClick={closeMenu}
            className="text-2xl font-bold tracking-widest text-white/80 hover:text-brand-primary transition-colors uppercase"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  </motion.div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isShopPage = pathname === '/shop';
  const { cartItems, toggleCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    if (!isShopPage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setIsScrolled(true);
    }
    return () => {
      if (!isShopPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navIsSolid = isScrolled || isShopPage;

  const CartButtonContent = () => (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 h-24 flex items-center transition-all duration-500 ${
          navIsSolid 
            ? "bg-brand-dark/95 backdrop-blur-md shadow-xl border-b border-white/5" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          
          <Link 
            href="/" 
            className="flex items-center gap-3 group transition-all duration-500"
          >
             <div className="relative w-10 h-10 rounded-full border border-white/20 overflow-hidden group-hover:border-brand-primary transition-colors">
                <Image 
                  src="/assets/ICONE.jpeg" 
                  alt="Logo"
                  fill
                  className="object-cover"
                />
             </div>
             <div className="flex flex-col">
               <span className="font-serif text-white text-lg tracking-wide leading-none">LOJA DO SIM</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {isShopPage ? (
              <Link href="/" className="text-xs font-bold tracking-[0.2em] text-white/80 hover:text-brand-primary transition-colors uppercase py-2 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              ['SHOP', 'SOBRE', 'CONTATO'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'SHOP' ? '/shop' : `#${item.toLowerCase()}`} 
                  className="text-xs font-bold tracking-[0.2em] text-white/80 hover:text-brand-primary transition-colors uppercase py-2 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))
            )}
            
            {isShopPage ? (
              <button 
                onClick={toggleCart}
                className="ml-4 w-10 h-10 flex items-center justify-center rounded-full transition-all bg-white/5 hover:bg-brand-primary"
              >
                <CartButtonContent />
              </button>
            ) : (
              <Link 
                href="/shop" 
                className="ml-4 w-10 h-10 flex items-center justify-center rounded-full transition-all bg-white/10 hover:bg-brand-primary"
              >
                <CartButtonContent />
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white cursor-pointer z-50" onClick={() => setIsMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>

        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}