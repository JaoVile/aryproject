"use client";

import { useState, useEffect } from "react";
// CORREÇÃO: Importar do Context (o lugar certo)
import { useCart } from "@/context/CartContext"; 
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Se não tiver itens e já carregou, volta pra loja
    if (isClient && cartItems.length === 0) {
        router.push('/');
    }
  }, [isClient, cartItems, router]);

  if (!isClient) return null;

  const handleFinishOrder = () => {
    setIsSubmitting(true);
    
    // --- LÓGICA DE VENDA VIA WHATSAPP ---
    const messageHeader = `Olá! Gostaria de finalizar meu pedido na Loja do Sim:%0A%0A`;
    
    const itemsList = cartItems.map(item => 
      `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`
    ).join('%0A');
    
    const total = `%0A%0A*Valor Total: R$ ${totalPrice.toFixed(2)}*`;
    const footer = `%0A%0AGostaria de saber as formas de pagamento e envio.`;

    // Número da loja (apenas números, com DDD e 55 do Brasil)
    const phoneNumber = "558799699843"; 
    const fullMessage = `${messageHeader}${itemsList}${total}${footer}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
    
    // Limpar carrinho e voltar
    clearCart(); 
    router.push("/"); 
    setIsSubmitting(false);
  };

  return (
    <section className="py-32 bg-brand-dark min-h-screen text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-brand-primary mb-12 text-center">Revisar Pedido</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-white/60 mb-6">Seu carrinho está vazio.</p>
            <button onClick={() => router.push('/')} className="text-brand-primary underline hover:text-white transition-colors">Voltar para a loja</button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded overflow-hidden bg-black/20">
                       <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{item.name}</p>
                      <p className="text-sm text-white/60">Quantidade: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-mono text-lg">R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center text-xl font-bold mb-8 pt-4 border-t border-white/20">
              <span>Total a pagar:</span>
              <span className="text-brand-primary">R$ {totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handleFinishOrder}
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white py-4 rounded-full font-bold hover:bg-brand-secondary transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Redirecionando..." : "Enviar Pedido no WhatsApp"}
            </button>
            
            <p className="text-center text-xs text-white/40 mt-4">
              Você será redirecionado para o WhatsApp da loja para combinar o pagamento e a entrega com total segurança.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}