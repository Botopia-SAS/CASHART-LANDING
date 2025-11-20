'use client';

import { useTranslations } from 'next-intl';

export function DashboardPreview() {
  const t = useTranslations('dashboardPreview');
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-white">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[150px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          <img
            src="https://res.cloudinary.com/dcljjtnxr/image/upload/v1763618102/WhatsApp_Image_2025-11-19_at_22.11.09_t1zhxl.jpg"
            alt={t('imageAlt')}
            className="w-full h-auto"
          />
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-[100px] md:w-[150px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
