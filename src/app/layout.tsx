import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Importando o Rodapé
import { CartProvider } from "@/context/CartContext";
import ActiveBackground from "@/components/layout/ActiveBackground"; // Importando o Fundo Vivo
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Loja do Sim | Boutique Íntima",
  description: "Diga sim para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* 1. Removi 'bg-brand-dark' daqui porque o ActiveBackground já cuida da cor.
          2. Adicionei 'relative' para posicionar os elementos filhos corretamente.
      */}
      <body className={`${inter.variable} ${playfair.variable} font-sans text-white antialiased selection:bg-brand-primary/30 selection:text-white relative bg-brand-dark`}>
        <CartProvider>
          {/* Camada 0: Fundo Vivo (desabilitado para performance) */}
          {/* <ActiveBackground /> */}
          
          {/* Camada 50: Navbar (fixa no topo) */}
          <Navbar />
          
          {/* Camada 10: Conteúdo Principal (para ficar acima do fundo) */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Rodapé no final */}
          <Footer />
          
          {/* Botão Flutuante WhatsApp */}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}