import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F9F7F2] text-[#1C1917] relative overflow-hidden">
      {/* Background Noise */}
      <div className="bg-noise" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-9xl italic text-primary opacity-50 select-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest mt-4">Página não encontrada</h2>
        <p className="text-stone-500 mt-4 mb-10 font-light text-lg max-w-md mx-auto">
          O caminho para a beleza às vezes tem desvios. A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="inline-block px-8 py-4 bg-[#1C1917] text-[#F9F7F2] rounded-full hover:bg-accent hover:text-[#1C1917] transition-all duration-300 shadow-lg">
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}