import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'));
const PromoSection = dynamic(() => import('@/components/sections/PromoSection'));
const CoupleSection = dynamic(() => import('@/components/sections/CoupleSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PromoSection />
      <CoupleSection />
      <ContactSection />
    </main>
  );
}