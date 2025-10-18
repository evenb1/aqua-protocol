import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import SupportedAssets from '@/components/SupportedAssets';
import Safety from '@/components/Safety';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollIndicator />
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <SupportedAssets />
        <Safety />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}