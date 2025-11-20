'use client';

import { Building2, ShieldCheck, DollarSign, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-14 bg-white dark:bg-gray-900"
      id="how-it-works"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-[#0C5F4C] dark:text-[#10B981] bg-white dark:bg-gray-800 shadow-sm border border-[#0C5F4C]/20 dark:border-[#10B981]/30">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-[38px] md:text-[46px] font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100 break-words">
            {t('title')}
          </h2>
          <p className="text-base sm:text-[18px] md:text-[20px] text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards with Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline line behind cards */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700" style={{ zIndex: 0 }}>
            {/* Animated progress line */}
            {isVisible && (
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0C5F4C] to-emerald-500 dark:from-[#10B981] dark:to-emerald-400 origin-left animate-timeline-progress"
                style={{ zIndex: 1 }}
              />
            )}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col gap-4 rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_15px_30px_rgba(12,95,76,0.08)] dark:shadow-[0_15px_30px_rgba(16,185,129,0.08)] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(12,95,76,0.12)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] relative ${
                    isVisible ? `animate-card-scale-${step.number}` : 'opacity-50 scale-95'
                  }`}
                  style={{ zIndex: 10 }}
                >
                  {/* Connection dot on timeline */}
                  <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0C5F4C] dark:bg-[#10B981] border-2 border-white dark:border-gray-900 shadow-lg" style={{ zIndex: 11 }} />

                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-12 w-12 rounded-full bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#0C5F4C] dark:text-[#10B981]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0C5F4C] dark:text-[#10B981]">0{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards without timeline - Mobile/Tablet */}
        <div className="grid gap-6 md:grid-cols-2 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_15px_30px_rgba(12,95,76,0.08)] dark:shadow-[0_15px_30px_rgba(16,185,129,0.08)] p-6 transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(12,95,76,0.12)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#0C5F4C] dark:text-[#10B981]" />
                  </div>
                  <span className="text-sm font-semibold text-[#0C5F4C] dark:text-[#10B981]">0{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-words">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
