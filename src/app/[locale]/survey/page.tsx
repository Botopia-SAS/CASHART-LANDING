'use client';

import { CollectorSurveyForm } from '@/components/landing/CollectorSurveyForm';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/landing/Header';
import { GlobalSpotlightBackground } from '@/components/landing/GlobalSpotlightBackground';
import { Footer } from '@/components/landing/Footer';
import Link from 'next/link';

export default function SurveyPage() {
  const t = useTranslations('survey');

  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12">
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('title')}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                ⏱️ {t('subtitle')}
              </p>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </div>
            <CollectorSurveyForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
