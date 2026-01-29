"use client";

import Shop from '@/components/sections/ShopSection';
import { useState, useEffect } from 'react';

export default function ShopPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <div>
        {isClient && (
            <div>
                <Shop />
            </div>
        )}
    </div>
  );
}