"use client"
import Shop from '@/components/sections/ShopSection';
import Cart from '@/components/ui/Cart';
import { useCart } from '@/hooks/useCart';
import { useState, useEffect } from 'react';

export default function ShopPage() {
    const { isCartOpen } = useCart();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <div>
        {isClient && (
            <div>
                <Shop />
                {isCartOpen && <Cart />}
            </div>
        )}
    </div>
  );
}