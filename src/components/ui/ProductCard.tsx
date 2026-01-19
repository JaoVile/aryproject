"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
// CORREÇÃO: Importar do Context
import { useCart } from "@/context/CartContext"; 

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar se estiver dentro de um Link
    e.stopPropagation();
    
    addToCart({
      id,
      name,
      price,
      image
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(233,30,99,0.15)]"
    >
      {/* Imagem */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Botão Add Rápido (Aparece no Hover) */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-secondary z-20"
          title="Adicionar ao Carrinho"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Info */}
      <div className="p-6 relative z-10">
        <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">{category}</p>
        <h3 className="text-xl text-white font-serif mb-2 group-hover:text-brand-primary transition-colors line-clamp-1">{name}</h3>
        <p className="text-white/80 font-sans font-light text-lg">R$ {price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}