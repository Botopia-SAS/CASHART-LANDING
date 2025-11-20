'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, BarChart3, Palette, Building2, Users } from 'lucide-react';
import { useState } from 'react';
import { AuthDialog } from './AuthDialog';
import Particles from '@/components/magicui/particles';
import Marquee from '@/components/magicui/marquee';

const artworks = [
  { name: "Abstract Dreams", artist: "Maria Santos", price: "$45,000" },
  { name: "Urban Landscape", artist: "John Park", price: "$32,000" },
  { name: "Digital Genesis", artist: "Alex Chen", price: "$78,000" },
  { name: "Color Symphony", artist: "Sophie Laurent", price: "$52,000" },
  { name: "Modern Sculpture", artist: "David Kim", price: "$95,000" },
];

export function Hero() {
  const t = useTranslations('landing');
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* PatternCraft Background - Dots Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-background to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(147,51,234,0.1),transparent)]"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Particles Effect */}
        <Particles className="absolute inset-0" quantity={50} />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card/50 backdrop-blur-sm mb-4">
              <Palette className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">Trusted by 10,000+ collectors worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => setShowAuth(true)}
              >
                {t('cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Marquee - Trending Artworks */}
          <div className="mt-16 relative">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-muted-foreground">Trending on ArtFintech</p>
            </div>
            <Marquee pauseOnHover className="[--duration:20s]">
              {artworks.map((artwork, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center w-64 h-32 rounded-xl border bg-card/50 backdrop-blur-sm p-4 mx-2"
                >
                  <div className="w-full h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-2" />
                  <p className="font-semibold text-sm">{artwork.name}</p>
                  <p className="text-xs text-muted-foreground">{artwork.artist}</p>
                  <p className="text-sm font-bold text-purple-600 mt-1">{artwork.price}</p>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-purple-600" />}
              title={t('features.portfolio.title')}
              description={t('features.portfolio.description')}
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-blue-600" />}
              title={t('features.market.title')}
              description={t('features.market.description')}
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-cyan-600" />}
              title={t('features.security.title')}
              description={t('features.security.description')}
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
            <StatItem value="$2.5B+" label="Total Value" />
            <StatItem value="10K+" label="Collectors" />
            <StatItem value="500+" label="Galleries" />
            <StatItem value="50K+" label="Artworks" />
          </div>
        </div>
      </section>
      <AuthDialog
        open={showAuth}
        onOpenChange={setShowAuth}
        defaultMode="signup"
      />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-8 transition-all hover:shadow-xl hover:border-purple-500/50 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative space-y-4">
        <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
