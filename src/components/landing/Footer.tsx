'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-100">
      <div className="container max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src="https://res.cloudinary.com/dcljjtnxr/image/upload/v1763617566/WhatsApp_Image_2025-11-19_at_21.28.10_clizpn.jpg"
            alt="CashArt"
            className="h-12 w-auto"
          />
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            {t('description')}
          </p>

          <div className="w-full border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#0C5F4C] transition-colors">
                {t('legal.terms')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0C5F4C] transition-colors">
                {t('legal.privacy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0C5F4C] transition-colors">
                {t('legal.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
