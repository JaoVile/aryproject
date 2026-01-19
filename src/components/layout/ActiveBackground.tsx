"use client";

// Versão Otimizada: Usa CSS keyframes nativos em vez de Framer Motion pesado
export default function ActiveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#12050b]">
      
      {/* Luz 1 - Rosa */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-primary/20 rounded-full blur-[80px] animate-pulse-slow opacity-60"></div>
      
      {/* Luz 2 - Roxo */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8B5CF6]/20 rounded-full blur-[80px] animate-pulse-slow opacity-60" style={{ animationDelay: "2s" }}></div>

      {/* Camada de Noise (Textura) - Imagem estática é muito mais leve */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.04] mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>
      
      {/* Vignette para focar no centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,5,11,0.8)_100%)] z-[2]"></div>
    </div>
  );
}