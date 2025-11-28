'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/landing/Header';
import { GlobalSpotlightBackground } from '@/components/landing/GlobalSpotlightBackground';
import { Footer } from '@/components/landing/Footer';
import { SignUpFormFormity } from '@/components/landing/SignUpFormFormity';
import { SignInForm } from '@/components/landing/SignInForm';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function GallerySignupPage() {
  return (
    <Suspense fallback={null}>
      <GallerySignupPageContent />
    </Suspense>
  );
}

function GallerySignupPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.split('/')[1] || 'en';
  const t = useTranslations('auth');

  // Get mode and email from URL query parameters
  const modeParam = searchParams.get('mode') as 'signin' | 'signup' | null;
  const emailParam = searchParams.get('email');
  const [activeMode, setActiveMode] = useState<'signin' | 'signup'>(modeParam || 'signup');

  // Update activeMode when URL changes
  useEffect(() => {
    if (modeParam) {
      setActiveMode(modeParam);
    }
  }, [modeParam]);

  const handleSuccess = () => {
    // Redirect to dashboard after successful signup/signin
    router.push(`/${locale}/dashboard`);
  };

  const options: { id: 'signin' | 'signup'; label: string }[] = [
    { id: 'signin', label: t('signIn') },
    { id: 'signup', label: t('signUp') },
  ];
  const activeIndex = options.findIndex((opt) => opt.id === activeMode);

  return (
    <div className="min-h-screen relative">
      <GlobalSpotlightBackground />
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-10 lg:p-12">
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {activeMode === 'signin' ? t('signIn') : t('createAccount')}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                Gallerist Registration
              </p>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                Register as a gallerist to offer flexible payment options to your collectors while getting paid upfront.
              </p>
            </div>

            {/* Toggle between Sign In and Sign Up - Style from HowItWorks */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-[#0C5F4C]/30 shadow-lg shadow-[#0C5F4C]/10">
                {/* Animated background slider */}
                <div
                  className="absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full bg-[#0C5F4C] transition-all duration-500 ease-out shadow-lg shadow-[#0C5F4C]/30"
                  style={{
                    left: `calc(${(activeIndex / options.length) * 100}% + 0.375rem)`,
                    width: `calc(${100 / options.length}% - 0.75rem)`,
                  }}
                />

                {/* Option buttons */}
                <div className="relative grid grid-cols-2 gap-1.5 sm:gap-2">
                  {options.map((option) => {
                    const isActive = option.id === activeMode;

                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveMode(option.id)}
                        className={`
                          relative z-10 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300
                          ${isActive ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                        `}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Forms */}
            {activeMode === 'signin' ? (
              <SignInForm onSuccess={handleSuccess} initialEmail={emailParam || undefined} />
            ) : (
              <SignUpFormFormity onSuccess={handleSuccess} initialEmail={emailParam || undefined} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
