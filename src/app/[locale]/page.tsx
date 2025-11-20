import { Header } from '@/components/landing/Header';
import { Hero, HeroFeatureGrid } from '@/components/landing/Hero';
import { VideoCircleSection } from '@/components/landing/VideoCircleSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-fade-in-up animate-delay-200 animate-fill-both">
        <VideoCircleSection />
      </div>
      <div className="animate-fade-in-up animate-delay-300 animate-fill-both">
        <HeroFeatureGrid />
      </div>
      <div className="animate-fade-in-up animate-delay-400 animate-fill-both">
        <HowItWorks />
      </div>
      <div className="animate-fade-in animate-delay-500 animate-fill-both">
        <Footer />
      </div>
    </div>
  );
}
