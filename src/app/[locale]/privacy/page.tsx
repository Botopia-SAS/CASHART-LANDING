'use client';

import { Header } from '@/components/landing/Header';
import { GlobalSpotlightBackground } from '@/components/landing/GlobalSpotlightBackground';
import { Footer } from '@/components/landing/Footer';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12">
            <div className="prose prose-gray max-w-none">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('title')}
              </h1>

              <p className="text-sm text-gray-600 italic mb-2">
                {t('subtitle')}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>{t('lastUpdated')}</strong>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>{t('contact')}</strong>{' '}
                <a href="mailto:hello@cashart.ai" className="text-[#10B981] hover:text-[#0C5F4C]">
                  hello@cashart.ai
                </a>
              </p>

              <p className="text-gray-700 mb-8 whitespace-pre-line">
                {t('intro')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section1.title')}
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t('section1.subsection1.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('section1.subsection1.content')}
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                {t.raw('section1.subsection1.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t('section1.subsection2.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('section1.subsection2.content')}
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                {t.raw('section1.subsection2.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t('section1.subsection3.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('section1.subsection3.content')}
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                {t.raw('section1.subsection3.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-6">
                {t('section1.subsection3.footer')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section2.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('section2.content')}
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                {t.raw('section2.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-6">
                {t('section2.footer')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section3.title')}
              </h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {t('section3.content')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section4.title')}
              </h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {t('section4.content')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section5.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('section5.content')}
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                {t.raw('section5.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-6">
                {t('section5.footer')}{' '}
                <a href="mailto:hello@cashart.ai" className="text-[#10B981] hover:text-[#0C5F4C] font-medium">
                  hello@cashart.ai
                </a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section6.title')}
              </h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {t('section6.content')}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t('section7.title')}
              </h2>
              <p className="text-gray-700">
                {t('section7.content')}{' '}
                <a href="mailto:hello@cashart.ai" className="text-[#10B981] hover:text-[#0C5F4C] font-medium">
                  hello@cashart.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
