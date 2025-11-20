'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from './AuthDialog';
import { CollectorSurveyDialog } from './CollectorSurveyDialog';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Header() {
  const t = useTranslations('header');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showSurvey, setShowSurvey] = useState(false);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      <header className="fixed top-0 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-xl z-50">
        <div className="flex h-20 items-center justify-between px-8 relative">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dcljjtnxr/image/upload/v1763617566/WhatsApp_Image_2025-11-19_at_21.28.10_clizpn.jpg"
                alt="CashArt"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-base font-medium text-gray-900 hover:text-[#0C5F4C] transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-gray-600 hover:text-[#0C5F4C] transition-colors"
            >
              {t('howItWorks')}
            </Link>
            <Link
              href="#about"
              className="text-base font-medium text-gray-600 hover:text-[#0C5F4C] transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href="#pricing"
              className="text-base font-medium text-gray-600 hover:text-[#0C5F4C] transition-colors"
            >
              {t('pricing')}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              onClick={() => setShowSurvey(true)}
              className="hidden sm:flex text-base font-medium border-[#0C5F4C]/30 text-[#0C5F4C] hover:bg-[#0C5F4C]/10 px-4 h-10 rounded-full"
            >
              {t('collectorSurveyButton')}
            </Button>
            <Button
              onClick={() => handleAuthClick('signup')}
              className="bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white text-base font-medium px-6 h-10 rounded-full shadow-sm"
            >
              {t('registerGallery')}
            </Button>
          </div>
        </div>
      </header>
      <AuthDialog
        open={showAuth}
        onOpenChange={setShowAuth}
        defaultMode={authMode}
      />
      <CollectorSurveyDialog open={showSurvey} onOpenChange={setShowSurvey} />
    </>
  );
}
