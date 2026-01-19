"use client";

import { products } from "@/constants/products";

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

// Usando o campo category correto dos produtos
const categories = [...new Set(products.map((p) => p.category))].sort();

export default function CategoryFilter({
  selectedCategories,
  setSelectedCategories,
}: CategoryFilterProps) {
  const handleCategoryChange = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Categorias</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 text-white/80 cursor-pointer hover:text-white transition-colors">
            <input
              type="checkbox"
              className="h-5 w-5 bg-brand-dark border-white/20 rounded text-brand-primary focus:ring-brand-primary focus:ring-2 cursor-pointer"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
