"use client";

import { products } from "@/constants/products";

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

// NOTE: Using product names as categories for now. 
// A dedicated category field in the product data would be better.
const categories = [...new Set(products.map((p) => p.name))];

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
          <label key={category} className="flex items-center space-x-2 text-white/80 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 bg-brand-dark border-white/20 rounded text-brand-primary focus:ring-brand-primary"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
