"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Lubrificantes",
    shapeClass: "rounded-t-[100px] rounded-b-[20px]", 
    bgColor: "bg-[#E9D5FF]", 
    image: "/assets/fotoproduto1.jpg", // <--- Atualizado para .jpg (sua foto cortada)
    positionClass: "object-center",    // <--- Voltamos para o padrão (centro)
  },
  {
    id: 2,
    name: "Brinquedos",
    shapeClass: "rounded-full", 
    bgColor: "bg-[#FBCFE8]", 
    image: "/assets/fotoproduto2.avif",
    positionClass: "object-center",
  },
  {
    id: 3,
    name: "Comestíveis",
    shapeClass: "rounded-t-[100px] rounded-b-[20px]", 
    bgColor: "bg-[#BFDBFE]", 
    image: "/assets/fotoproduto3.jpg",
    positionClass: "object-center",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-brand-dark relative z-10" id="produtos">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-4">
            Nossos Produtos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Link href={`/shop`} key={product.id} className="group flex flex-col items-center relative">
              <div className={`relative w-full max-w-sm h-80 ${product.shapeClass} ${product.bgColor} overflow-hidden shadow-lg group`}>
                 
                 <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover ${product.positionClass} transition-transform group-hover:scale-105`}
                 />
                 
                 <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>
              </div>
              
              <h3 className="mt-6 text-xl text-white font-sans tracking-widest uppercase group-hover:text-brand-primary transition-colors">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}