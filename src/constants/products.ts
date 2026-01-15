import { Product } from '@/context/CartContext';

export const products: Omit<Product, 'quantity'>[] = [
  {
    id: 1,
    name: "Óleo de Massagem",
    price: 49.90,
    image: "/assets/fotoproduto1.jpg",
  },
  {
    id: 2,
    name: "Vibrador Power",
    price: 129.90,
    image: "/assets/fotoproduto2.avif",
  },
  {
    id: 3,
    name: "Gel Comestível",
    price: 39.90,
    image: "/assets/fotoproduto3.jpg",
  },
    {
    id: 4,
    name: "Óleo de Massagem",
    price: 49.90,
    image: "/assets/fotoproduto1.jpg",
  },
  {
    id: 5,
    name: "Vibrador Power",
    price: 129.90,
    image: "/assets/fotoproduto2.avif",
  },
  {
    id: 6,
    name: "Gel Comestível",
    price: 39.90,
    image: "/assets/fotoproduto3.jpg",
  },
];
