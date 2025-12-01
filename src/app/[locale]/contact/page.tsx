'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { GlobalSpotlightBackground } from '@/components/landing/GlobalSpotlightBackground';
import { Footer } from '@/components/landing/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f7bad2cb-8035-4b87-9d80-3c6d7ae346ee',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'CashArt Dashboard - Contact Form Submission',
          from_name: 'CashArt Dashboard',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12">
            <div className="mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Questions or Feedback?
              </h1>
              <p className="text-base text-gray-600 mb-2">
                We're building CashArt with galleries like yours in mind.
              </p>
              <p className="text-sm text-gray-700 max-w-xl mx-auto">
                Share your thoughts, ask questions, or provide feedback to help us improve your experience.
              </p>
            </div>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#10B981] font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-500 font-semibold">Failed to send message</p>
                  <p className="text-sm text-gray-600 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                  placeholder="Your name"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all resize-none"
                  placeholder="Share your questions, feedback, or thoughts..."
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 bg-[#10B981] hover:bg-[#0C5F4C] text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-[#10B981]/30 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                You can also reach us directly at{' '}
                <a
                  href="mailto:hello@cashart.ai"
                  className="text-[#10B981] hover:text-[#0C5F4C] transition-colors font-medium"
                >
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
