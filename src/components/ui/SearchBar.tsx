"use client";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 bg-brand-card border border-white/10 rounded-md text-white"
    />
  );
}
