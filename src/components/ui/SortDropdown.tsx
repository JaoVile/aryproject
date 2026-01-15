"use client";

interface SortDropdownProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

export default function SortDropdown({
  sortOption,
  setSortOption,
}: SortDropdownProps) {
  return (
    <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-white/80">Ordenar por:</label>
        <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full bg-brand-card border border-white/10 rounded-md p-2 text-white"
        >
            <option value="default">Padrão</option>
            <option value="price-asc">Preço: Menor para Maior</option>
            <option value="price-desc">Preço: Maior para Menor</option>
            <option value="name-asc">Nome: A-Z</option>
            <option value="name-desc">Nome: Z-A</option>
        </select>
    </div>
  );
}
