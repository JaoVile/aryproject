// c:\Projetos\Workana\Sexshop\aryelleproject\src\components\sections\PromoSection.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products as staticProducts, type Product } from "@/constants/products";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function PromoSection() {
  // Usa os produtos estáticos primeiro, depois atualiza com os da API (que têm as imagens certas)
  const [products, setProducts] = useState(staticProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Erro ao carregar destaques:", error);
      }
    };
    fetchProducts();
  }, []);

  // === LÓGICA DE VITRINE INTELIGENTE ===
  const featuredProducts = (() => {
    // 1. Filtra apenas produtos com estoque disponível
    const available = products.filter(p => p.stock > 0);

    // 2. Tenta pegar os seus favoritos (IDs 26, 5, 14)
    const preferredIds = [26, 5, 14];
    const primary = preferredIds
      .map(id => available.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);

    // 3. Se faltar produto (ex: algum favorito acabou), completa com outros da loja
    if (primary.length < 3) {
      const others = available.filter(p => !preferredIds.includes(p.id));
      const needed = 3 - primary.length;
      // Adiciona os que faltam para sempre ter 3 na vitrine
      return [...primary, ...others.slice(0, needed)];
    }

    return primary;
  })();

  return (
    <section id="produtos" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Fundo Decorativo (Luz ambiente) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Os Favoritos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Destaques da <span className="italic text-brand-primary">Coleção</span>
            </h2>
            <p className="text-white/60 mt-4 text-lg font-light">
              Uma seleção exclusiva do que há de mais desejado. Produtos que transformam momentos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/shop" className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-brand-primary hover:border-brand-primary transition-all">
              Ver Todos os Produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid de Produtos (Limitado a 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product!.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card do Produto */}
              <Link href="/shop" className="block relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-brand-primary/50 group-hover:shadow-2xl group-hover:shadow-brand-primary/10">
                
                {/* Imagem com Zoom no Hover */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                   <Image
                     src={product!.image}
                     alt={product!.name}
                     fill
                     className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                     sizes="(max-width: 768px) 100vw, 33vw"
                     priority={index === 0} // Prioriza a primeira imagem para carregar mais rápido
                   />
                </div>

                {/* Overlay Gradiente para leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Conteúdo (Texto sobre a imagem) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  
                  <h3 className="font-serif text-2xl text-white mb-1">{product!.name}</h3>
                  <p className="text-brand-primary font-bold text-lg">R$ {product!.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
