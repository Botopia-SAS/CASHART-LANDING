'use client';

import { Button } from '@/components/ui/button';
import { Shield, DollarSign, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AuthDialog } from './AuthDialog';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const [showAuth, setShowAuth] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <section className="relative pt-36 pb-0 overflow-hidden bg-white">
        {/* Radial gradient background system */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(12, 95, 76, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Left side radial gradient - more visible like Mercury */}
          <div 
            className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
            style={{
              background: 'radial-gradient(circle, rgba(12, 95, 76, 0.35) 0%, rgba(12, 95, 76, 0.2) 25%, rgba(12, 95, 76, 0.1) 45%, transparent 65%)'
            }}
          />
          
          {/* Right side radial gradient - more visible like Mercury */}
          <div 
            className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
            style={{
              background: 'radial-gradient(circle, rgba(12, 95, 76, 0.35) 0%, rgba(12, 95, 76, 0.2) 25%, rgba(12, 95, 76, 0.1) 45%, transparent 65%)'
            }}
          />
          
          {/* Side gradient like Mercury - vertical gradient on the sides */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-[400px] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(12, 95, 76, 0.15) 0%, transparent 100%)'
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-[400px] pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(12, 95, 76, 0.15) 0%, transparent 100%)'
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0C5F4C]/10 text-[#0C5F4C] border border-[#0C5F4C]/20">
              {t('earlyAccessBadge')}
            </div>

            <h1 className="text-6xl md:text-[80px] font-bold tracking-tight leading-[1.1] text-gray-900">
              {t('title')}{' '}
              <br className="hidden md:block" />
              <span className="text-[#0C5F4C]">{t('titleHighlight')}</span>
            </h1>

            <p className="text-[22px] md:text-[24px] text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
              {t('descriptionPart1')}{t('descriptionPart2')}
            </p>

            {/* Email Input & Buttons with Glow Effect */}
            <div className="relative max-w-2xl mx-auto pt-4 group">
              {/* Glow effect background - increases on input focus */}
              <div 
                className="absolute inset-0 -z-10 blur-3xl opacity-30 transition-opacity duration-300 group-focus-within:opacity-40"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(12, 95, 76, 0.4) 0%, transparent 70%)'
                }}
              />
              
              {/* CTA content */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {/* Input encapsulado con botón verde */}
                <div className="relative w-full sm:flex-1 flex items-center rounded-full border-2 border-[#0C5F4C]/40 overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm">
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="w-full h-14 pl-4 pr-36 text-[15px] focus:outline-none bg-transparent border-none"
                  />
                  <Button
                    onClick={() => setShowAuth(true)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setMousePosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                    }}
                    className="absolute right-0 h-14 bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white text-[15px] font-medium px-6 rounded-full whitespace-nowrap pointer-events-auto relative overflow-hidden transition-all duration-300"
                  >
                    <span
                      className="absolute pointer-events-none rounded-full"
                      style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)',
                        width: isHovering ? '150px' : '0px',
                        height: isHovering ? '150px' : '0px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                        opacity: isHovering ? 1 : 0,
                        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
                        filter: 'blur(20px)',
                      }}
                    />
                    <span className="relative z-10">{t('registerButton')}</span>
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#0C5F4C]/40 text-[#0C5F4C] hover:border-[#0C5F4C] hover:bg-[#0C5F4C]/10 text-[15px] font-medium px-6 h-14 rounded-full whitespace-nowrap transition-colors"
                >
                  {t('collectorSurveyButton')}
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Image */}
          <div className="mt-16 pb-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://res.cloudinary.com/dcljjtnxr/image/upload/v1763618102/WhatsApp_Image_2025-11-19_at_22.11.09_t1zhxl.jpg"
                alt={t('dashboardAlt')}
                className="w-full h-auto"
              />
            </div>
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

export function HeroFeatureGrid() {
  const t = useTranslations('hero.features');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contentFadeStart = 200;
      const contentFadeEnd = 600;
      const newOpacity = Math.min(1, Math.max(0, (scrollY - contentFadeStart) / (contentFadeEnd - contentFadeStart)));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative pt-24 pb-40 bg-white"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C5F4C]/12 via-transparent to-[#0C5F4C]/12"></div>
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<DollarSign className="h-8 w-8 text-[#0C5F4C]" />}
            title={t('title1')}
            description={t('description1')}
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-[#0C5F4C]" />}
            title={t('title2')}
            description={t('description2')}
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-[#0C5F4C]" />}
            title={t('title3')}
            description={t('description3')}
          />
        </div>
      </div>
    </section>
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
    <div className="relative rounded-xl bg-white border border-gray-200 p-8 transition-all hover:shadow-md">
      <div className="space-y-4">
        <div className="inline-flex p-3 rounded-lg bg-[#0C5F4C]/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
