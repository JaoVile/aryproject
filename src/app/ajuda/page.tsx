// c:\Projetos\Workana\Sexshop\aryelleproject\src\app\ajuda\page.tsx

"use client";

import { motion } from "framer-motion";
import { Package, RefreshCw, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AjudaPage() {
  return (
    <main className="relative z-10 bg-brand-dark min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header da Página */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-6 text-brand-primary">
            <HelpCircle size={32} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Como podemos <span className="text-brand-primary italic">ajudar?</span>
          </h1>
          <p className="text-white/60 text-lg font-light">
            Tire suas dúvidas sobre nossos processos. Sua tranquilidade e satisfação são nossa prioridade.
          </p>
        </motion.div>

        {/* Grid de Tópicos */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Envio Discreto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="mb-6 bg-brand-dark w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 text-brand-primary group-hover:scale-110 transition-transform">
              <Package size={28} />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">Envio 100% Discreto</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Prezamos pela sua privacidade. Nossas embalagens são pardas, sem logotipos externos ou menção ao conteúdo. 
              Na fatura do cartão, o nome que aparece é genérico para garantir total sigilo.
            </p>
          </motion.div>

          {/* Card 2: Trocas e Devoluções */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="mb-6 bg-brand-dark w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 text-brand-primary group-hover:scale-110 transition-transform">
              <RefreshCw size={28} />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">Trocas e Devoluções</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Respeitamos o Código de Defesa do Consumidor. Você tem até 7 dias corridos após o recebimento para devolução por arrependimento (desde que o produto esteja lacrado) e garantia contra defeitos.
            </p>
          </motion.div>

          {/* Card 3: Privacidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="mb-6 bg-brand-dark w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 text-brand-primary group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">Privacidade (LGPD)</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Seus dados estão seguros conosco. Utilizamos suas informações exclusivamente para processar o pedido e realizar a entrega. Nunca compartilhamos seus dados com terceiros.
            </p>
          </motion.div>

        </div>

        {/* Rodapé da Seção */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
        >
            <p className="text-white/40 mb-4 text-sm">Ainda tem alguma dúvida específica?</p>
            <Link 
                href="https://wa.me/558799699843" 
                target="_blank"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-white transition-colors font-medium"
            >
                Fale conosco no WhatsApp
                <ArrowRight size={16} />
            </Link>
        </motion.div>

      </div>
    </main>
  );
}
