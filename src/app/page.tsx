import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'));
const PromoSection = dynamic(() => import('@/components/sections/PromoSection'));
const Products = dynamic(() => import('@/components/sections/Products'));
const CoupleSection = dynamic(() => import('@/components/sections/CoupleSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PromoSection />
      <Products />
      <CoupleSection />
      <ContactSection />
    </main>
  );
}