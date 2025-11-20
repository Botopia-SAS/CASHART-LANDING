'use client';

import { useTranslations } from 'next-intl';

export function VideoCircleSection() {
  const t = useTranslations('videoCircle');

  return (
    <section className="relative pt-0 pb-12 bg-white dark:bg-gray-900 overflow-hidden">
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

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl sm:text-[40px] md:text-[48px] font-bold mb-4 text-gray-900 dark:text-gray-100 break-words">
            {t('title')
              .split(' ')
              .map((word: string, index: number, arr: string[]) => {
                const isGreen = word.toLowerCase().includes('cashart');
                return (
                  <span key={`${word}-${index}`} className={isGreen ? 'text-[#0C5F4C] dark:text-[#10B981]' : undefined}>
                    {word}
                    {index < arr.length - 1 ? ' ' : ''}
                  </span>
                );
              })}
          </h2>
          <p className="text-base sm:text-[19px] md:text-[21px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[47%_53%] gap-8 sm:gap-16 items-center">
          {/* Left: Circular Design */}
          <div className="relative px-2 sm:px-0 transform translate-x-0 sm:-translate-y-4 sm:translate-x-4 lg:-translate-y-6 lg:translate-x-12">
            {/* Main circle container - AUMENTADO para incluir todos los círculos */}
            <div className="relative w-full aspect-square max-w-[500px] sm:max-w-[650px] mx-auto">
              {/* Central circle - REDUCIDO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full border-3 sm:border-4 border-[#0C5F4C] dark:border-[#10B981] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 z-10 shadow-xl transition-all duration-300 hover:border-[#0A4F3E] dark:hover:border-[#059669] hover:bg-gradient-to-br hover:from-[#0C5F4C] hover:to-[#0A4F3E] dark:hover:from-[#10B981] dark:hover:to-[#059669] hover:shadow-2xl hover:scale-105 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-[#0C5F4C] dark:text-[#10B981] group-hover:text-white transition-colors">CashArt</div>
                  </div>
                </div>
              </div>

              {/* Surrounding circles - PERFECTAMENTE ESPACIADOS */}
              {[
                { id: '01', titleKey: 'circle01Title', subtitleKey: 'circle01Subtitle', initialAngle: 0, delay: '0s', colors: { border: 'border-emerald-500/60', gradient: 'from-emerald-50 to-emerald-100', hover: 'hover:from-emerald-500 hover:to-emerald-600' } },
                { id: '02', titleKey: 'circle02Title', subtitleKey: 'circle02Subtitle', initialAngle: 51.428571, delay: '0.428571s', colors: { border: 'border-blue-500/60', gradient: 'from-blue-50 to-blue-100', hover: 'hover:from-blue-500 hover:to-blue-600' } },
                { id: '03', titleKey: 'circle03Title', subtitleKey: 'circle03Subtitle', initialAngle: 102.857143, delay: '0.857143s', colors: { border: 'border-purple-500/60', gradient: 'from-purple-50 to-purple-100', hover: 'hover:from-purple-500 hover:to-purple-600' } },
                { id: '04', titleKey: 'circle04Title', subtitleKey: 'circle04Subtitle', initialAngle: 154.285714, delay: '1.285714s', colors: { border: 'border-pink-500/60', gradient: 'from-pink-50 to-pink-100', hover: 'hover:from-pink-500 hover:to-pink-600' } },
                { id: '05', titleKey: 'circle05Title', subtitleKey: 'circle05Subtitle', initialAngle: 205.714286, delay: '1.714286s', colors: { border: 'border-orange-500/60', gradient: 'from-orange-50 to-orange-100', hover: 'hover:from-orange-500 hover:to-orange-600' } },
                { id: '06', titleKey: 'circle06Title', subtitleKey: 'circle06Subtitle', initialAngle: 257.142857, delay: '2.142857s', colors: { border: 'border-cyan-500/60', gradient: 'from-cyan-50 to-cyan-100', hover: 'hover:from-cyan-500 hover:to-cyan-600' } },
                { id: '07', titleKey: 'circle07Title', subtitleKey: 'circle07Subtitle', initialAngle: 308.571429, delay: '2.571429s', colors: { border: 'border-teal-500/60', gradient: 'from-teal-50 to-teal-100', hover: 'hover:from-teal-500 hover:to-teal-600' } },
              ].map((item) => {
                const orbitRadius = 165;
                const angleRad = (item.initialAngle * Math.PI) / 180;
                const initialX = Math.round(Math.cos(angleRad) * orbitRadius * 100) / 100;
                const initialY = Math.round(Math.sin(angleRad) * orbitRadius * 100) / 100;

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
                    className={`absolute top-1/2 left-1/2 w-[95px] h-[95px] sm:w-[135px] sm:h-[135px] rounded-full border-2 sm:border-3 ${item.colors.border} flex items-center justify-center bg-gradient-to-br ${item.colors.gradient} shadow-lg transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br ${item.colors.hover} hover:shadow-2xl hover:scale-110 group cursor-pointer pointer-events-auto`}
                    style={{
                      transform: 'translate(-50%, -50%)',
                    } as React.CSSProperties & { '--initial-angle': string; '--orbit-radius': string }}
                  >
                    <div className="text-center px-2 sm:px-3 flex flex-col justify-center items-center h-full">
                      <div className="text-[10px] sm:text-xs text-gray-500 group-hover:text-white/90 transition-colors font-semibold mb-1">{item.id}</div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight break-words">{t(item.titleKey)}</div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-white transition-colors leading-tight break-words">{t(item.subtitleKey)}</div>
                    </div>
                  </div>
                </div>
                );
              })}

            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:pl-0 px-4 sm:px-6 lg:px-0">
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
