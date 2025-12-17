"use client";

import { motion } from "framer-motion";
import { Sparkles, Syringe, ScanFace, Flower2, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Harmonização Facial",
    description: "Estruturação e simetria com preenchedores de alta densidade.",
    icon: ScanFace,
    colSpan: "md:col-span-2", // Ocupa 2 colunas (Destaque)
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" // Rosto feminino clean
  },
  {
    title: "Bioestimuladores",
    description: "Colágeno puro para firmeza.",
    icon: Sparkles,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2070&auto=format&fit=crop" // Textura rica de creme/colágeno
  },
  {
    title: "Laser Lavieen",
    description: "Pele de porcelana e textura uniforme.",
    icon: Syringe, // Placeholder icon
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" // Luz/Laser abstrato
  },
  {
    title: "Spa & Relaxamento",
    description: "Protocolos sensoriais para corpo e mente.",
    icon: Flower2,
    colSpan: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" // Ambiente spa
  }
];

export default function Services() {
  return (
    <section id="tratamentos" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Nossos Protocolos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Curadoria de <br />
              <span className="italic text-accent">Excelência.</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-600 font-light leading-relaxed text-right md:text-left">
            Selecionamos apenas as tecnologias que entregam resultados reais, sem exageros.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.colSpan} relative rounded-[2rem] p-8 group overflow-hidden min-h-[350px]`}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                {/* Gradiente inferior para garantir leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 group-hover:rotate-45" />
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}