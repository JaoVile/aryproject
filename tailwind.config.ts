import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // As cores da "Loja do Sim"
        brand: {
          dark: '#180a12',    // Fundo quase preto, levemente vinho
          primary: '#e91e63', // Rosa vibrante (botões/destaques)
          secondary: '#ff4081', // Rosa um pouco mais claro
          soft: '#fce4ec',    // Rosa bem clarinho para textos secundários
          card: '#2a121d',    // Cor de fundo dos cards
        }
      },
      fontFamily: {
        // Configuração com fallback de segurança
        serif: ['var(--font-playfair)', 'serif'], 
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #180a12 0%, rgba(24,10,18,0.6) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;