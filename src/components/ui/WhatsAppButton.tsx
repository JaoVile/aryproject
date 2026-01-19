"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function WhatsAppButton() {
  const { cartItems, totalPrice } = useCart();
  const phoneNumber = "558799699843";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    let whatsappLink: string;
    
    if (cartItems.length > 0) {
      // Se tiver itens no carrinho, incluir na mensagem
      const messageHeader = `Olá! Gostaria de finalizar meu pedido na Loja do Sim:%0A%0A`;
      
      const itemsList = cartItems.map(item => 
        `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`
      ).join('%0A');
      
      const total = `%0A%0A*Valor Total: R$ ${totalPrice.toFixed(2)}*`;
      const footer = `%0A%0AGostaria de saber as formas de pagamento e envio.`;
      
      const fullMessage = `${messageHeader}${itemsList}${total}${footer}`;
      whatsappLink = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
    } else {
      // Se não tiver itens, mensagem genérica
      const message = `Olá! Gostaria de conhecer os produtos da Loja do Sim.`;
      whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.5, type: "spring" }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-500 group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      
      {/* Badge de quantidade no carrinho */}
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cartItems.reduce((acc, item) => acc + item.quantity, 0) > 9 ? '9+' : cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      )}
      
      {/* Tooltip elegante que aparece no hover */}
      <span className="absolute right-full mr-2 sm:mr-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none translate-x-2 group-hover:translate-x-0 hidden sm:block">
        {cartItems.length > 0 ? 'Finalizar Pedido' : 'Falar no WhatsApp'}
      </span>
    </motion.a>
  );
}