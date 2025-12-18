import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import CookieBanner from "@/components/ui/CookieBanner";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
  description: "Clínica de estética avançada especializada em harmonização facial, bioestimuladores e tecnologias a laser. Protocolos exclusivos em São Paulo.",
  openGraph: {
    title: "Aesthetic Clinic | A Nova Era da Beleza",
    description: "Descubra sua melhor versão com nossos protocolos exclusivos de estética avançada.",
    url: "https://aesthetic-clinic.vercel.app", // Substitua pelo seu domínio real depois
    siteName: "Aesthetic Clinic",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Clinic | A Nova Era da Beleza",
    description: "Descubra sua melhor versão com nossos protocolos exclusivos.",
  },
  robots: "index, follow",
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

        {/* 6. Botão de Conversão Flutuante */}
        <WhatsAppButton />

        {/* 7. Aviso de Privacidade (Compliance) */}
        <CookieBanner />

        {/* O conteúdo do site entra aqui */}
        {children}
        
      </body>
    </html>
  );
}