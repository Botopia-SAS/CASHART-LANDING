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
      className="relative py-10 md:py-14 bg-white"
      id="how-it-works"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-[#0C5F4C] bg-white shadow-sm border border-[#0C5F4C]/20">
            {t('badge')}
          </span>
          <h2 className="text-[38px] md:text-[46px] font-bold mt-6 mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-white shadow-[0_15px_30px_rgba(12,95,76,0.08)] p-6 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(12,95,76,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#0C5F4C]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#0C5F4C]" />
                  </div>
                  <span className="text-sm font-semibold text-[#0C5F4C]">0{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
