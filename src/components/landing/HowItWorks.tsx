'use client';

import { Building2, ShieldCheck, DollarSign, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const [opacity, setOpacity] = useState(0);

  const steps = [
    {
      number: 1,
      icon: Building2,
      title: t('step1.title'),
      description: t('step1.description')
    },
    {
      number: 2,
      icon: ShieldCheck,
      title: t('step2.title'),
      description: t('step2.description')
    },
    {
      number: 3,
      icon: DollarSign,
      title: t('step3.title'),
      description: t('step3.description')
    },
    {
      number: 4,
      icon: Calendar,
      title: t('step4.title'),
      description: t('step4.description')
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 400;
      const fadeEnd = 900;
      const newOpacity = Math.min(1, Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="pt-0 pb-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      id="how-it-works"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      {/* Multiple green gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C5F4C]/12 via-transparent to-[#0C5F4C]/12"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(12, 95, 76, 0.08) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(12, 95, 76, 0.05))',
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-bold mb-3 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-[19px] md:text-[21px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="relative bg-white rounded-xl border border-gray-200 p-6 h-full hover:shadow-md transition-shadow">
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-full bg-[#0C5F4C] flex items-center justify-center text-white font-bold text-sm mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 rounded-lg bg-[#0C5F4C]/10">
                    <Icon className="w-8 h-8 text-[#0C5F4C]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
