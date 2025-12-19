import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Protocols from "@/components/sections/protocols";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Estética Premium | Beleza & Bem-estar",
  description: "Experiências estéticas transformadoras com as tecnologias mais avançadas de 2025.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      
      {/* Menu Flutuante */}
      <Navbar />
      
      {/* Seção 1: Capa com Parallax */}
      <Hero />

      {/* Seção 2: Bento Grid de Serviços */}
      <Protocols />

      {/* Seção Extra: Vitrine de Produtos (Upsell) */}
      <Products />

      {/* Seção 3: Storytelling (Sobre) */}
      <About />

      {/* Seção 4: Prova Social (Depoimentos) */}
      <Testimonials />

      {/* Seção Extra: FAQ (Quebra de Objeções) */}
      <FAQ />

      {/* Seção 5: Contato (Conversão) */}
      <Contact />

      {/* Seção 4: Rodapé (Grand Finale) */}
      <Footer />

    </main>
  );
}