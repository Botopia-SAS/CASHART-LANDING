'use client';

import { useTranslations } from 'next-intl';

export function VideoCircleSection() {
  const t = useTranslations('videoCircle');

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-[40px] md:text-[48px] font-bold mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-[19px] md:text-[21px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left: Circular Design */}
          <div className="relative">
            {/* Main circle container */}
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[200px] h-[200px] rounded-full border-4 border-[#0C5F4C] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 z-10 shadow-xl transition-all duration-300 hover:border-[#0A4F3E] hover:bg-gradient-to-br hover:from-[#0C5F4C] hover:to-[#0A4F3E] hover:shadow-2xl hover:scale-105 group cursor-pointer">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-2 group-hover:text-white/80 transition-colors font-semibold">01</div>
                    <div className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">{t('circle01')}</div>
                  </div>
                </div>
              </div>

              {/* Surrounding circles - more distance from center */}
              {[
                { id: '02', titleKey: 'circle02Title', subtitleKey: 'circle02Subtitle', top: '0%', left: '50%', translateX: '-50%' },
                { id: '03', titleKey: 'circle03Title', subtitleKey: 'circle03Subtitle', top: '20%', right: '0%' },
                { id: '04', titleKey: 'circle04Title', subtitleKey: 'circle04Subtitle', bottom: '20%', right: '0%' },
                { id: '05', titleKey: 'circle05Title', subtitleKey: 'circle05Subtitle', bottom: '0%', left: '50%', translateX: '-50%' },
                { id: '06', titleKey: 'circle06Title', subtitleKey: 'circle06Subtitle', bottom: '20%', left: '0%' },
                { id: '07', titleKey: 'circle07Title', subtitleKey: 'circle07Subtitle', top: '20%', left: '0%' },
              ].map((item) => (
                <div
                  key={item.id}
                  className="absolute w-[145px] h-[145px] rounded-full border-3 border-[#0C5F4C]/50 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:border-[#0A4F3E] hover:bg-gradient-to-br hover:from-[#0C5F4C] hover:to-[#0A4F3E] hover:shadow-2xl hover:scale-110 group cursor-pointer"
                  style={{
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right,
                    transform: item.translateX ? `translateX(${item.translateX})` : undefined,
                  }}
                >
                  <div className="text-center px-3">
                    <div className="text-xs text-gray-400 mb-1 group-hover:text-white/80 transition-colors font-semibold">{item.id}</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">{t(item.titleKey)}</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">{t(item.subtitleKey)}</div>
                  </div>
                </div>
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="88%" y2="27%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="88%" y2="73%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="12%" y2="73%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="50%" y1="50%" x2="12%" y2="27%" stroke="#0C5F4C" strokeWidth="2" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:pl-8">
            <div className="relative max-w-[85%] mx-auto">
              <img
                src="https://res.cloudinary.com/drsvq4tm6/image/upload/v1763627084/image_xpuvzk.png"
                alt={t('imageAlt')}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
