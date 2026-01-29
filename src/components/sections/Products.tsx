"use client";

import Image from "next/image";
import Link from "next/link";
import { products as staticProducts } from "@/constants/products";
import { useState, useEffect } from "react";

export default function Products() {
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
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-24 bg-brand-dark relative z-10" id="produtos">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-4">
            Destaques da Coleção
          </h2>
          <p className="text-white/60 font-light tracking-wide mb-6">
            Uma prévia da nossa curadoria exclusiva.
          </p>
          <Link href="/shop">
            <button className="text-brand-primary border border-brand-primary px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
              Ver Todos os Produtos
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 justify-items-center max-w-6xl mx-auto">
          {products.slice(0, 6).map((product, index) => (
            <Link href="/shop" key={product.id} className="group flex flex-col items-center w-full max-w-xs">
              
              {/* --- O CARD DA IMAGEM --- */}
              <div className={`
                relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-white/10
                transition-all duration-500 ease-out
                ${index % 2 === 0 ? 'rounded-t-[160px] rounded-b-[30px]' : 'rounded-t-[30px] rounded-b-[160px]'}
                group-hover:shadow-[0_0_40px_rgba(233,30,99,0.2)]
                group-hover:border-brand-primary/40
              `}>
                 
                 {/* Fundo suave para caso a imagem demore ou seja transparente */}
                 <div className="absolute inset-0 bg-white/5"></div>

                 <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                 />
                 
                 {/* Overlay Gradiente (para o texto brilhar mais ou dar profundidade) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* --- INFORMAÇÕES --- */}
              <div className="text-center mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl text-white font-serif tracking-wide group-hover:text-brand-primary transition-colors duration-300">
                    {product.name}
                </h3>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}