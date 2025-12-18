"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999" // Substitua pelo número real da clínica
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.5, type: "spring" }} // Aparece sutilmente após o Preloader
      className="fixed bottom-8 right-8 z-50 bg-[#1C1917] text-[#F9F7F2] p-4 rounded-full shadow-2xl hover:bg-accent hover:text-[#1C1917] transition-all duration-500 group flex items-center justify-center"
      aria-label="Agendar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip elegante que aparece no hover */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-medium px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none translate-x-2 group-hover:translate-x-0">
        Agendar Avaliação
      </span>
    </motion.a>
  );
}