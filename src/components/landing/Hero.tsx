'use client';

import { Button } from '@/components/ui/button';
import { Shield, DollarSign, Clock, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AuthDialog } from './AuthDialog';
import { CollectorSurveyDialog } from './CollectorSurveyDialog';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const [showAuth, setShowAuth] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <section className="relative pt-36 pb-0 overflow-hidden bg-white">

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
                  onClick={() => setShowSurveyModal(true)}
                  className="w-full sm:w-auto border-2 border-[#0C5F4C]/40 text-[#0C5F4C] hover:border-[#0C5F4C] hover:bg-[#0C5F4C]/10 text-[15px] font-medium px-6 h-14 rounded-full whitespace-nowrap transition-colors"
                >
                  {t('collectorSurveyButton')}
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Image */}
          <div className="mt-16 pb-12 relative flex justify-center px-4">
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
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
      <CollectorSurveyDialog open={showSurveyModal} onOpenChange={setShowSurveyModal} />
    </>
  );
}

export function HeroFeatureGrid() {
  const t = useTranslations('hero.features');
  const introT = useTranslations('hero.featuresIntro');
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

  const featureCards = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: t('title1'),
      description: t('description1'),
      accentColor: 'from-emerald-500 to-emerald-700',
      statValue: t('card1StatValue'),
      statLabel: t('card1StatLabel'),
      points: [t('card1Point1'), t('card1Point2')],
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t('title2'),
      description: t('description2'),
      accentColor: 'from-emerald-600 to-teal-700',
      statValue: t('card2StatValue'),
      statLabel: t('card2StatLabel'),
      points: [t('card2Point1'), t('card2Point2')],
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: t('title3'),
      description: t('description3'),
      accentColor: 'from-teal-500 to-emerald-600',
      statValue: t('card3StatValue'),
      statLabel: t('card3StatLabel'),
      points: [t('card3Point1'), t('card3Point2')],
    },
  ];

  return (
    <section
      className="relative py-14 md:py-18 bg-gradient-to-b from-white via-[#f6fbf9] to-white overflow-hidden"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0C5F4C]/10 blur-[130px]" />
        <div className="absolute bottom-0 -right-16 h-48 w-48 bg-[#0C5F4C]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#0C5F4C]/30 to-transparent" />
      </div>
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#0C5F4C] bg-white shadow-sm border border-[#0C5F4C]/20">
            {introT('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-6 mb-4">
            {introT('title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {introT('subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              accentColor={card.accentColor}
              statValue={card.statValue}
              statLabel={card.statLabel}
              points={card.points}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  statValue: string;
  statLabel: string;
  points: string[];
  index: number;
}>;

function FeatureCard({
  icon,
  title,
  description,
  accentColor,
  statValue,
  statLabel,
  points,
  index,
}: FeatureCardProps) {
  return (
    <div className="group relative h-full rounded-3xl bg-white/80 backdrop-blur-md p-[1px] shadow-[0_20px_45px_rgba(12,95,76,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(12,95,76,0.15)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-[#0C5F4C]/10 to-transparent" />
      <div className="relative z-10 h-full rounded-[calc(1.5rem-1px)] bg-white p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accentColor}`}>
            {icon}
          </div>
          <span className="text-sm font-semibold text-gray-400">0{index}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center gap-3">
          <div className="rounded-2xl border border-[#0C5F4C]/15 bg-[#0C5F4C]/5 px-4 py-3">
            <div className="text-2xl font-semibold text-[#0C5F4C] leading-none">{statValue}</div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mt-1">{statLabel}</p>
          </div>
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <p className="text-sm text-gray-500 max-w-[140px]">CashArt advantage</p>
        </div>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0C5F4C]/10 text-[#0C5F4C]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
