'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type SubmitStatus = 'idle' | 'success' | 'error';

export function CollectorSurveyForm({ onSubmitted }: { onSubmitted?: () => void }) {
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
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

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
      onSubmitted?.();
    } catch (error) {
      console.error('Survey submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t('q1.question')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.q1}
          onChange={(e) => handleChange('q1', e.target.value)}
          placeholder={t('q1.placeholder')}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
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
                required
              />
              <span>{t(`q2.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t('q3.question')} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {['yes', 'no'].map((option) => (
            <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="q3"
                value={option}
                checked={formData.q3 === option}
                onChange={(e) => handleChange('q3', e.target.value)}
                className="mr-3"
                required
              />
              <span>{t(`q3.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t('q4.question')} <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.q4}
          onChange={(e) => handleChange('q4', e.target.value)}
          placeholder={t('q4.placeholder')}
          className="w-full min-h-[120px] px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t('q5.question')} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {['definitely', 'probably', 'maybe', 'unlikely'].map((option) => (
            <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="q5"
                value={option}
                checked={formData.q5 === option}
                onChange={(e) => handleChange('q5', e.target.value)}
                className="mr-3"
                required
              />
              <span>{t(`q5.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t('q6.question')} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {['critical', 'important', 'moderate', 'flexible'].map((option) => (
            <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="q6"
                value={option}
                checked={formData.q6 === option}
                onChange={(e) => handleChange('q6', e.target.value)}
                className="mr-3"
                required
              />
              <span>{t(`q6.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
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
                required
              />
              <span>{t(`q7.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {t('fields.companyName')}
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
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
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
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
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {t('fields.phoneNumber')}
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
          />
        </div>
      </motion.div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">{t('messages.success')}</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">{t('messages.error')}</p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#0C5F4C] text-white rounded-lg font-medium hover:bg-[#0A4F3E] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('submitting') : `${t('submit')} →`}
        </button>
      </div>
    </form>
  );
}

