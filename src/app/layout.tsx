import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";

// Configuração Otimizada de Fontes (Padrão Next.js 2025)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aesthetic Clinic | A Nova Era da Beleza",
  description: "Tratamentos estéticos de alta performance com tecnologia de ponta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        
        {/* 3. A Camada de Textura (Cinematic Feel) */}
        {/* Sem isso, o site perde o efeito de 'papel premium' */}
        <div className="bg-noise" />

        {/* 4. Motor de Scroll Suave */}
        <SmoothScroll />

        {/* 5. Preloader Cinematográfico */}
        <Preloader />

        {/* O conteúdo do site entra aqui */}
        {children}
        
      </body>
    </html>
  );
}