"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
    const { cartItems, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (isClient && cartItems.length === 0) {
            router.push('/shop');
        }
    }, [isClient, cartItems, router]);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            city: formData.get('city'),
            zip: formData.get('zip'),
            items: cartItems,
            total: totalPrice,
        };

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('A resposta da rede não foi boa');
            }

            const result = await response.json();
            console.log('Success:', result);

            alert("Pedido de teste recebido! (Sem pagamento processado). Você será redirecionado.");
            clearCart();
            router.push('/'); // Or a 'thank you' page

        } catch (error) {
            console.error('Error:', error);
            alert("Ocorreu um erro ao enviar seu pedido.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (!isClient || cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <p className="text-white">Carregando...</p>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-brand-dark py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-serif text-brand-primary text-center mb-12">Finalizar Compra</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Shipping Form */}
          <div className="bg-brand-card p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Detalhes de Entrega</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80">Nome Completo</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md p-2 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md p-2 text-white" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-white/80">Endereço</label>
                <input type="text" id="address" name="address" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md p-2 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-white/80">Cidade</label>
                  <input type="text" id="city" name="city" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md p-2 text-white" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-white/80">CEP</label>
                  <input type="text" id="zip" name="zip" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md p-2 text-white" />
                </div>
              </div>
              <div className="pt-6">
                 <button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-full hover:bg-brand-secondary transition-colors disabled:bg-gray-500">
                    {isSubmitting ? 'Processando...' : 'Ir para o Pagamento (Simulado)'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-brand-card p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Resumo do Pedido</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" />
                        <div className="ml-4">
                            <p className="text-white">{item.name}</p>
                            <p className="text-sm text-white/70">Qtd: {item.quantity}</p>
                        </div>
                    </div>
                  <p className="text-white">R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/20 pt-6">
              <div className="flex justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
