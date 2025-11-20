'use client';

import { useTranslations } from 'next-intl';

export function VideoCircleSection() {
  const t = useTranslations('videoCircle');

  return (
    <section className="relative pt-0 pb-12 bg-white overflow-hidden">
      {/* Radial gradient background system similar to Hero */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(12, 95, 76, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Left side radial gradient */}
        <div 
          className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
          style={{
            background: 'radial-gradient(circle, rgba(12, 95, 76, 0.35) 0%, rgba(12, 95, 76, 0.2) 25%, rgba(12, 95, 76, 0.1) 45%, transparent 65%)'
          }}
        />
        
        {/* Right side radial gradient */}
        <div 
          className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
          style={{
            background: 'radial-gradient(circle, rgba(12, 95, 76, 0.35) 0%, rgba(12, 95, 76, 0.2) 25%, rgba(12, 95, 76, 0.1) 45%, transparent 65%)'
          }}
        />
        
        {/* Side gradients */}
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

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] md:text-[48px] font-bold mb-4 text-gray-900">
            {t('title')
              .split(' ')
              .map((word: string, index: number, arr: string[]) => {
                const isGreen = word.toLowerCase().includes('cashart');
                return (
                  <span key={`${word}-${index}`} className={isGreen ? 'text-[#0C5F4C]' : undefined}>
                    {word}
                    {index < arr.length - 1 ? ' ' : ''}
                  </span>
                );
              })}
          </h2>
          <p className="text-[19px] md:text-[21px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[47%_53%] gap-16 items-center">
          {/* Left: Circular Design */}
          <div className="relative transform -translate-y-2 translate-x-2 sm:-translate-y-4 sm:translate-x-4 lg:-translate-y-6 lg:translate-x-12">
            {/* Main circle container - AUMENTADO para incluir todos los círculos */}
            <div className="relative w-full aspect-square max-w-[650px] mx-auto">
              {/* Central circle - REDUCIDO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative w-[140px] h-[140px] rounded-full border-4 border-[#0C5F4C] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 z-10 shadow-xl transition-all duration-300 hover:border-[#0A4F3E] hover:bg-gradient-to-br hover:from-[#0C5F4C] hover:to-[#0A4F3E] hover:shadow-2xl hover:scale-105 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0C5F4C] group-hover:text-white transition-colors">CashArt</div>
                  </div>
                </div>
              </div>

              {/* Surrounding circles - PERFECTAMENTE ESPACIADOS */}
              {[
                { id: '01', titleKey: 'circle01Title', subtitleKey: 'circle01Subtitle', initialAngle: 0, delay: '0s' },
                { id: '02', titleKey: 'circle02Title', subtitleKey: 'circle02Subtitle', initialAngle: 51.428571, delay: '0.428571s' },
                { id: '03', titleKey: 'circle03Title', subtitleKey: 'circle03Subtitle', initialAngle: 102.857143, delay: '0.857143s' },
                { id: '04', titleKey: 'circle04Title', subtitleKey: 'circle04Subtitle', initialAngle: 154.285714, delay: '1.285714s' },
                { id: '05', titleKey: 'circle05Title', subtitleKey: 'circle05Subtitle', initialAngle: 205.714286, delay: '1.714286s' },
                { id: '06', titleKey: 'circle06Title', subtitleKey: 'circle06Subtitle', initialAngle: 257.142857, delay: '2.142857s' },
                { id: '07', titleKey: 'circle07Title', subtitleKey: 'circle07Subtitle', initialAngle: 308.571429, delay: '2.571429s' },
              ].map((item) => {
                const orbitRadius = 165;
                const angleRad = (item.initialAngle * Math.PI) / 180;
                const initialX = Math.cos(angleRad) * orbitRadius;
                const initialY = Math.sin(angleRad) * orbitRadius;

                return (
                <div
                  key={item.id}
                  className="absolute top-1/2 left-1/2 origin-center"
                  style={{
                    '--initial-angle': `${item.initialAngle}deg`,
                    '--orbit-radius': '230px',
                    transform: `translate(-50%, -50%) translate(${initialX}px, ${initialY}px)`,
                  } as React.CSSProperties & { '--initial-angle': string; '--orbit-radius': string }}
                >
                  {/* Círculo con contra-rotación para mantener texto legible */}
                  <div
                    className="absolute top-1/2 left-1/2 w-[135px] h-[135px] rounded-full border-3 border-[#0C5F4C]/50 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:border-[#0A4F3E] hover:bg-gradient-to-br hover:from-[#0C5F4C] hover:to-[#0A4F3E] hover:shadow-2xl hover:scale-110 group cursor-pointer pointer-events-auto"
                    style={{
                      transform: 'translate(-50%, -50%)',
                    } as React.CSSProperties & { '--initial-angle': string; '--orbit-radius': string }}
                  >
                    <div className="text-center px-3">
                      <div className="text-xs text-gray-400 mb-1 group-hover:text-white/80 transition-colors font-semibold">{item.id}</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">{t(item.titleKey)}</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight">{t(item.subtitleKey)}</div>
                    </div>
                  </div>
                </div>
                );
              })}

            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:pl-0">
            <div className="relative max-w-[90%] mx-auto lg:mr-auto lg:ml-0">
              <img
                src="https://res.cloudinary.com/dcljjtnxr/image/upload/v1763638653/Sujeto_v9bye1.png"
                alt={t('imageAlt')}
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
