"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou antes
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 4000); // Delay para não brigar com o Preloader
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-sm z-40 bg-white/90 backdrop-blur-md border border-stone-200 p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h4 className="font-serif text-lg text-foreground mb-2">Sua privacidade importa.</h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed mb-4">
                Utilizamos cookies para personalizar sua experiência. Ao continuar navegando, você concorda com nossa política.
              </p>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-stone-400 hover:text-foreground">
              <X size={20} />
            </button>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={accept}
              className="flex-1 bg-[#1C1917] text-[#F9F7F2] py-2 px-4 rounded-lg text-xs font-medium hover:bg-accent hover:text-[#1C1917] transition-colors"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}