import { Header } from '@/components/landing/Header';
import { Hero, HeroFeatureGrid } from '@/components/landing/Hero';
import { VideoCircleSection } from '@/components/landing/VideoCircleSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Footer } from '@/components/landing/Footer';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { AuroraShowcase } from '@/components/landing/AuroraShowcase';
import { PlaidWavesBackground } from '@/components/landing/PlaidWavesBackground';
import { MeshGradientHero } from '@/components/landing/MeshGradientHero';

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
      <div className="animate-fade-in-up animate-delay-500 animate-fill-both">
        <AuroraShowcase />
      </div>
      <div className="animate-fade-in-up animate-delay-500 animate-fill-both px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        {/* Green variant with content */}
        <PlaidWavesBackground variant="green">
          <div className="text-center text-white space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Fast & Secure Art Financing
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Get instant liquidity for your art collection with flexible terms and competitive rates.
            </p>
          </div>
        </PlaidWavesBackground>

        {/* Teal variant */}
        <PlaidWavesBackground variant="teal">
          <div className="text-center text-white space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Seamless Gallery Payments
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              24-hour payment turnaround with zero risk exposure for galleries.
            </p>
          </div>
        </PlaidWavesBackground>

        {/* Purple variant */}
        <PlaidWavesBackground variant="purple">
          <div className="text-center text-white space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Smart Art Investment
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Data-driven insights for smarter art portfolio decisions.
            </p>
          </div>
        </PlaidWavesBackground>
      </div>
      <div className="animate-fade-in animate-delay-500 animate-fill-both">
        <MeshGradientHero />
      </div>
      <div className="animate-fade-in animate-delay-500 animate-fill-both">
        <Footer />
      </div>
    </div>
  );
}
