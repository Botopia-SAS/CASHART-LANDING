'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function SurveyPage() {
  const t = useTranslations('survey');

  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    companyName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Survey submission failed');
      }

      setSubmitStatus('success');
      console.log('Form submitted successfully:', formData);

      // Reset form after successful submission
      setFormData({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        companyName: '',
        fullName: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Survey submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-sm text-gray-600 mb-4">⏱️ {t('subtitle')}</p>
          <p className="text-gray-700">{t('description')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Q1 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q1.question')} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['monthly', 'fewMonths', 'yearOrLess'].map((option) => (
                <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="q1"
                    value={option}
                    checked={formData.q1 === option}
                    onChange={(e) => handleChange('q1', e.target.value)}
                    className="mr-3"
                  />
                  <span>{t(`q1.options.${option}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q2.question')} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['under10k', '10kTo50k', '50kTo250k', 'over250k'].map((option) => (
                <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="q2"
                    value={option}
                    checked={formData.q2 === option}
                    onChange={(e) => handleChange('q2', e.target.value)}
                    className="mr-3"
                  />
                  <span>{t(`q2.options.${option}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q3.question')} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['yesOften', 'yesSometimes', 'never'].map((option) => (
                <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="q3"
                    value={option}
                    checked={formData.q3 === option}
                    onChange={(e) => handleChange('q3', e.target.value)}
                    className="mr-3"
                  />
                  <span>{t(`q3.options.${option}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q4 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q4.question')} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['tooComplex', 'highRates', 'didntKnow', 'possession'].map((option) => (
                <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="q4"
                    value={option}
                    checked={formData.q4 === option}
                    onChange={(e) => handleChange('q4', e.target.value)}
                    className="mr-3"
                  />
                  <span>{t(`q4.options.${option}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q5 - Scale 1-5 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q5.question')} <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-600 w-24">{t('q5.scale.notAppealing')}</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="flex items-center justify-center w-12 h-12 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="q5"
                      value={num}
                      checked={formData.q5 === String(num)}
                      onChange={(e) => handleChange('q5', e.target.value)}
                      className="sr-only"
                    />
                    <span className={formData.q5 === String(num) ? 'font-bold text-blue-600' : ''}>{num}</span>
                  </label>
                ))}
              </div>
              <span className="text-sm text-gray-600 w-24 text-right">{t('q5.scale.appealing')}</span>
            </div>
          </div>

          {/* Q6 - Scale 1-5 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q6.question')} <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-600 w-24">{t('q6.scale.notImportant')}</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="flex items-center justify-center w-12 h-12 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="q6"
                      value={num}
                      checked={formData.q6 === String(num)}
                      onChange={(e) => handleChange('q6', e.target.value)}
                      className="sr-only"
                    />
                    <span className={formData.q6 === String(num) ? 'font-bold text-blue-600' : ''}>{num}</span>
                  </label>
                ))}
              </div>
              <span className="text-sm text-gray-600 w-24 text-right">{t('q6.scale.essential')}</span>
            </div>
          </div>

          {/* Q7 */}
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-4">
              {t('q7.question')} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['yesDefinitely', 'notRightNow'].map((option) => (
                <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="q7"
                    value={option}
                    checked={formData.q7 === option}
                    onChange={(e) => handleChange('q7', e.target.value)}
                    className="mr-3"
                  />
                  <span>{t(`q7.options.${option}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {t('fields.companyName')}
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {t('fields.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {t('fields.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {t('fields.phoneNumber')} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">Thank you! Your survey has been submitted successfully.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">An error occurred. Please try again.</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : `${t('submit')} →`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
