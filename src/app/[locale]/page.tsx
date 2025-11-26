import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CashArtTimeline } from "@/components/landing/CashArtTimeline";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Footer } from "@/components/landing/Footer";
import { GlobalSpotlightBackground } from "@/components/landing/GlobalSpotlightBackground";
import { HeroScrollDemo } from "@/components/landing/HeroScrollDemo";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-fade-in-up animate-delay-300 animate-fill-both">
        <CashArtTimeline />
      </div>
      <div className="animate-fade-in-up animate-delay-400 animate-fill-both">
        <HowItWorks />
      </div>
      <div className="animate-fade-in animate-delay-500 animate-fill-both">
        <HeroScrollDemo />
      </div>
      <div className="animate-fade-in animate-delay-600 animate-fill-both">
        <Footer />
      </div>
    </div>
  );
}
