"use client";

import Image from "next/image";
import { Product } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Omit<Product, 'quantity'>;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-brand-card rounded-lg shadow-lg overflow-hidden group border border-white/10 transition-colors hover:border-brand-primary/50">
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-white/70 mt-2">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-full hover:bg-brand-secondary transition-colors"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
