"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Sérum Revitalizante",
    price: "R$ 189,00",
    image: "/assets/revitalizante.webp", // Frasco minimalista
    description: "Hidratação profunda com ácido hialurônico puro."
  },
  {
    id: 2,
    name: "Creme Reparador Noturno",
    price: "R$ 245,00",
    image: "/assets/reparadornot.webp", // Pote de creme
    description: "Regeneração celular intensiva enquanto você dorme."
  },
  {
    id: 3,
    name: "Protetor Solar Fluido",
    price: "R$ 120,00",
    image: "/assets/protetorsolar.webp", // Protetor solar
    description: "Toque seco e alta proteção UVA/UVB para peles sensíveis."
  }
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Home Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Prolongue seus <span className="italic text-primary">resultados.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay com Botão */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <button className="bg-white text-stone-900 px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-accent transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                     <ShoppingBag size={16} />
                     Comprar no WhatsApp
                   </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-stone-500 font-light mb-3">{product.description}</p>
                <p className="text-accent font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}