// ARQUIVO: src/constants/products.ts

// DEFINIÇÃO DO TIPO (Aqui mesmo, sem importar de lugar nenhum)
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

// LISTA DE DADOS
export const products: Product[] = [
  {
    id: 1,
    name: "Lubrificante Intimacy Plus",
    price: 49.90,
    image: "/assets/fotoproduto1.jpg",
    category: "Lubrificantes",
    description: "Lubrificante à base de água, hipoalergênico."
  },
  {
    id: 2,
    name: "Vibrador Elegance Pro",
    price: 129.90,
    image: "/assets/fotoproduto2.avif",
    category: "Brinquedos",
    description: "Tecnologia avançada para máximo prazer."
  },
  {
    id: 3,
    name: "Óleo Sensual Chocolate",
    price: 89.90,
    image: "/assets/fotoproduto3.jpg",
    category: "Comestíveis",
    description: "Óleo comestível com sabor delicioso."
  },
  {
    id: 4,
    name: "Massageador Relax Plus",
    price: 79.90,
    image: "/assets/fotodois.jpg",
    category: "Brinquedos",
    description: "Perfeito para massagens sensuais."
  },
  {
    id: 5,
    name: "Lubrificante Aqua Fresh",
    price: 54.90,
    image: "/assets/fototres.jpg",
    category: "Lubrificantes",
    description: "Frescor e suavidade em cada toque."
  },
  {
    id: 6,
    name: "Kit Casal Premium",
    price: 199.90,
    image: "/assets/fotoquatro.jpg",
    category: "Brinquedos",
    description: "Seleção especial para casais."
  },
  {
    id: 7,
    name: "Gel Sensual Morango",
    price: 69.90,
    image: "/assets/fotocinco.jpg",
    category: "Comestíveis",
    description: "Gel comestível com sabor frutado."
  },
  {
    id: 8,
    name: "Vibrador Compact Deluxe",
    price: 149.90,
    image: "/assets/fotoproduto2.avif",
    category: "Brinquedos",
    description: "Design discreto e potente."
  },
  {
    id: 9,
    name: "Lubrificante Silk Touch",
    price: 59.90,
    image: "/assets/fotoproduto1.jpg",
    category: "Lubrificantes",
    description: "Textura sedosa e de longa duração."
  },
];