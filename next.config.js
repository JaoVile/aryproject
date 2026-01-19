/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite carregar imagens de qualquer lugar (útil para desenvolvimento)
  // E desativa o modo estrito se estiver causando renderização dupla chata no dev
  reactStrictMode: true, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Se você estiver usando imagens locais sem otimização em alguns lugares:
    unoptimized: true,
  },
};

module.exports = nextConfig;