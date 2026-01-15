"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
// 1. Adicionei 'Variants' na importação
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, isCartOpen, toggleCart, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    toggleCart();
    router.push('/checkout');
  };

  // 2. Adicionei a tipagem ': Variants' aqui. 
  // Isso diz ao TypeScript que "easeInOut" é um valor válido para animação.
  const cartVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleCart}
        >
          <motion.div 
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md h-full bg-brand-card shadow-2xl flex flex-col border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <h2 className="text-2xl font-serif text-brand-primary">Carrinho</h2>
              <button onClick={toggleCart} className="text-white/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-grow flex items-center justify-center">
                <p className="text-white/70">Seu carrinho está vazio.</p>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between relative bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-white/10">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-white">{item.name}</p>
                          <div className="flex items-center mt-2">
                            <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-0.5 bg-white/10 rounded-md text-white/80 hover:bg-white/20">-</button>
                            <p className="text-sm text-white/70 px-3">{item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)} className="px-2 py-0.5 bg-white/10 rounded-md text-white/80 hover:bg-white/20">+</button>
                          </div>
                        </div>
                      </div>
                      <p className="font-semibold text-white text-lg">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/50 hover:text-brand-primary transition-colors absolute top-2 right-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-white/10">
                  <div className="flex justify-between items-center text-lg font-semibold text-white mb-4">
                    <span>Total:</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-full hover:bg-brand-secondary transition-colors"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}