import { CollectorSurveyForm } from '@/components/landing/CollectorSurveyForm';
import { useTranslations } from 'next-intl';

export default function SurveyPage() {
  const t = useTranslations('survey');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-sm text-gray-600 mb-4">⏱️ {t('subtitle')}</p>
          <p className="text-gray-700">{t('description')}</p>
        </div>
        <CollectorSurveyForm />
      </div>
    </div>
  );
}
