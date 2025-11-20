'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function ValueProposition() {
  const t = useTranslations('valueProposition');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 800;
      const fadeEnd = 1300;
      const newOpacity = Math.min(1, Math.max(0, (scrollY - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="pt-48 pb-48 bg-gradient-to-b from-white via-gray-100 via-gray-300 via-gray-600 to-gray-900 text-white relative overflow-hidden"
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      {/* Multiple green gradient overlays for richness */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C5F4C]/25 via-transparent to-[#0C5F4C]/25"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(12, 95, 76, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(12, 95, 76, 0.15), transparent)',
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[40px] md:text-[52px] font-bold mb-8 text-white">
            {t('title')}
          </h2>
          <p className="text-[19px] md:text-[22px] text-gray-200 leading-relaxed mb-12">
            {t('description')}
          </p>

          {/* Stats grid with green accents */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#0C5F4C] mb-2">{t('stat1Value')}</div>
              <div className="text-sm text-gray-300">{t('stat1Label')}</div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#0C5F4C] mb-2">{t('stat2Value')}</div>
              <div className="text-sm text-gray-300">{t('stat2Label')}</div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#0C5F4C] mb-2">{t('stat3Value')}</div>
              <div className="text-sm text-gray-300">{t('stat3Label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
