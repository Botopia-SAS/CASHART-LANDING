import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CashArtFlowSection } from "@/components/landing/CashArtFlowSection";
import { TimelineSection } from "@/components/landing/TimelineSection";
import { Footer } from "@/components/landing/Footer";
import { GlobalSpotlightBackground } from "@/components/landing/GlobalSpotlightBackground";
import { HeroScrollDemo } from "@/components/landing/HeroScrollDemo";
import { GlobeDemo } from "@/components/landing/GlobeDemo";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <Hero />
      <CashArtFlowSection />
      <TimelineSection />
      <div className="animate-fade-in animate-delay-500 animate-fill-both">
        <HeroScrollDemo />
      </div>
      <div className="animate-fade-in animate-delay-700 animate-fill-both">
        <GlobeDemo />
      </div>
      <div className="animate-fade-in animate-delay-800 animate-fill-both">
        <Footer />
      </div>
    </div>
  );
}
