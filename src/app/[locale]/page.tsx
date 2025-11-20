import { Header } from '@/components/landing/Header';
import { Hero, HeroFeatureGrid } from '@/components/landing/Hero';
import { VideoCircleSection } from '@/components/landing/VideoCircleSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoCircleSection />
      <HeroFeatureGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}
