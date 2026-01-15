"use client";

import { products } from "@/constants/products";
import ProductCard from "../ui/ProductCard";
import { useState, useEffect } from "react";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";
import SortDropdown from "../ui/SortDropdown";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isFilterOpen]);

  const filteredAndSortedProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(product.name);
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  
  const Filters = () => (
    <aside className="space-y-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
    </aside>
  );

  return (
    <section className="py-24 bg-brand-dark" id="shop">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-4">
            Nossos produtos
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Uma seleção de escolhida só para você.
          </p>
        </div>

        {/* --- CONTROLES --- */}
        {/* Controles Mobile */}
        <div className="lg:hidden mb-8 space-y-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex justify-between items-center gap-4">
                <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 text-white bg-white/5 px-4 py-3 rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    <span>Filtros</span>
                </button>
                <div className="flex-1">
                    <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros Desktop */}
            <div className="hidden lg:block">
                <Filters />
            </div>

            {/* Grid de Produtos */}
            <main className="lg:col-span-3">
                <div className="hidden lg:flex justify-between items-center mb-6">
                    <p className="text-white/80">{filteredAndSortedProducts.length} produtos encontrados</p>
                    <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredAndSortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredAndSortedProducts.length === 0 && (
                        <p className="text-white/70 text-center col-span-full py-12">Nenhum produto encontrado com os filtros selecionados.</p>
                    )}
                </div>
            </main>
        </div>
      </div>

      {/* Overlay de Filtros Mobile */}
      <AnimatePresence>
        {isFilterOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center lg:hidden"
                onClick={() => setIsFilterOpen(false)}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-[90%] max-w-sm bg-brand-card rounded-lg shadow-2xl flex flex-col max-h-[85vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 border-b border-white/10 flex justify-between items-center flex-shrink-0">
                        <h3 className="text-xl font-semibold text-white">Filtros</h3>
                        <button onClick={() => setIsFilterOpen(false)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 overflow-y-auto">
                      <Filters />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
