"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = ["Tratamentos", "Sobre", "Tecnologia", "Depoimentos"];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || menuOpen
            ? "bg-background/70 backdrop-blur-md border-b border-white/20 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-medium tracking-tighter text-foreground z-50">
            Aesthetic<span className="text-accent">.</span>
          </Link>

          {/* Links Desktop - Agora com bordas permanentes para melhor affordance */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 border border-stone-900/10 px-4 py-2 rounded-full transition-all duration-300 hover:bg-stone-900/10 hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Agendar Consulta
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50 text-foreground p-2 -mr-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-0 bg-background z-40 md:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-3xl font-serif text-foreground hover:text-accent transition-colors">
              {item}
            </Link>
          ))}
          <button onClick={() => setMenuOpen(false)} className="mt-8 px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full">
            Agendar Consulta
          </button>
        </div>
      </motion.div>
    </>
  );
}