import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações do React (mantendo o que você tinha) */
  reactCompiler: false, // Se o seu Next.js for versão 15+, isso pode precisar ir dentro de 'experimental', mas deixe assim se estava funcionando.

  /* Configurações de Imagens (ESSENCIAL para o Unsplash) */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // O Unsplash usa esse domínio também, é bom ter garantido
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Otimizações
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;