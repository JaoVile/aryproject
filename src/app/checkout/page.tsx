"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext"; 
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Se não tiver itens e já carregou, volta pra loja automaticamente
    if (isClient && cartItems.length === 0) {
        router.push('/shop');
    }
  }, [isClient, cartItems, router]);

  // Evita erros de hidratação (diferença entre servidor e navegador)
  if (!isClient) return null;

  const handleFinishOrder = () => {
    setIsSubmitting(true);
    
    // --- LÓGICA DE VENDA VIA WHATSAPP (AQUI QUE VOCÊ EDITA) ---
    
    // 1. Cabeçalho da mensagem
    const messageHeader = `Olá! Gostaria de finalizar meu pedido na Loja do Sim:%0A%0A`;
    
    // 2. Lista de produtos
    const itemsList = cartItems.map(item => 
      `- ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`
    ).join('%0A');
    
    // 3. Total e Rodapé
    const total = `%0A%0A*Valor Total: R$ ${totalPrice.toFixed(2)}*`;
    const footer = `%0A%0AGostaria de saber as formas de pagamento e envio.`;

    // 4. Número da loja (apenas números, com DDD e 55 do Brasil)
    // EDITE O NÚMERO AQUI SE PRECISAR
    const phoneNumber = "558799699843"; 
    
    const fullMessage = `${messageHeader}${itemsList}${total}${footer}`;
    
    // 5. Abre o WhatsApp em uma nova aba
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
    
    // 6. Limpa o carrinho e volta para a home
    clearCart(); 
    router.push("/"); 
    setIsSubmitting(false);
  };

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-20 bg-brand-dark min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-serif text-brand-primary mb-8 md:mb-12 text-center">Revisar Pedido</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-white/60 mb-6">Seu carrinho está vazio.</p>
            <button onClick={() => router.push('/shop')} className="text-brand-primary underline hover:text-white transition-colors">Voltar para a loja</button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  
                  {/* Bloco Imagem + Info Mobile */}
                  <div className="flex gap-4 w-full sm:w-auto items-center">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-black/20 flex-shrink-0">
                         <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill 
                            className="object-cover" 
                            sizes="(max-width: 640px) 80px, 80px"
                            priority={true} 
                         />
                    </div>
                    {/* Info visível apenas no mobile ao lado da foto */}
                    <div className="flex-1 sm:hidden">
                         <p className="font-bold text-base text-white line-clamp-2">{item.name}</p>
                         <p className="font-mono text-brand-primary mt-1">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  
                  {/* Controles e Nome Desktop */}
                  <div className="flex-1 min-w-0 w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-start">
                    <p className="font-bold text-lg text-white hidden sm:block truncate w-full">{item.name}</p>
                    
                    <div className="flex items-center gap-4 mt-0 sm:mt-2 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="flex items-center bg-white/5 rounded-md border border-white/10">
                            <button 
                                onClick={() => decreaseQuantity(item.id)}
                                className="p-3 hover:bg-white/10 text-white transition-colors"
                                aria-label="Diminuir quantidade"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="text-base w-8 text-center font-medium text-white">{item.quantity}</span>
                            <button 
                                onClick={() => increaseQuantity(item.id)}
                                className="p-3 hover:bg-white/10 text-white transition-colors"
                                aria-label="Aumentar quantidade"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 text-white/40 hover:text-red-400 transition-colors"
                            aria-label="Remover item"
                            title="Remover item"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                  </div>
                  
                  {/* Preço Desktop */}
                  <div className="text-right hidden sm:block">
                      <p className="font-mono text-base sm:text-lg whitespace-nowrap text-white">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      {item.quantity > 1 && (
                          <p className="text-xs text-white/40">R$ {item.price.toFixed(2)} un.</p>
                      )}
                  </div>
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
            
            <button
              onClick={() => router.push('/shop')}
              className="w-full mt-3 bg-transparent border border-white/10 text-white/70 py-3 rounded-full font-medium hover:bg-white/5 hover:text-white transition-colors"
            >
              Continuar Comprando
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