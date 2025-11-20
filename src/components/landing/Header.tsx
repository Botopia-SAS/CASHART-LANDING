'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from './AuthDialog';
import { CollectorSurveyDialog } from './CollectorSurveyDialog';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const t = useTranslations('header');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showSurvey, setShowSurvey] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full border-b border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
            {/* Logo - Left */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1763663304/daewusmce0jbacjvqxxk.png"
                  alt="CashArt"
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              <Link
                href="/"
                className="text-sm 2xl:text-base font-medium text-gray-900 dark:text-gray-100 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors whitespace-nowrap"
              >
                {t('home')}
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm 2xl:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors whitespace-nowrap"
              >
                {t('howItWorks')}
              </Link>
              <Link
                href="#about"
                className="text-sm 2xl:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors whitespace-nowrap"
              >
                {t('about')}
              </Link>
              <Link
                href="#pricing"
                className="text-sm 2xl:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors whitespace-nowrap"
              >
                {t('pricing')}
              </Link>
            </nav>

            {/* Right Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <LanguageSwitcher />
              <Button
                variant="outline"
                onClick={() => setShowSurvey(true)}
                className="hidden xl:flex text-sm 2xl:text-base font-medium border-[#0C5F4C]/30 dark:border-gray-600 text-[#0C5F4C] dark:text-gray-300 hover:bg-[#0C5F4C]/10 dark:hover:bg-gray-700 px-3 2xl:px-4 h-9 2xl:h-10 rounded-full whitespace-nowrap"
              >
                {t('collectorSurveyButton')}
              </Button>
              <Button
                onClick={() => handleAuthClick('signup')}
                className="bg-[#0C5F4C] hover:bg-[#0A4F3E] dark:bg-[#10B981] dark:hover:bg-[#059669] text-white text-sm 2xl:text-base font-medium px-4 2xl:px-6 h-9 2xl:h-10 rounded-full shadow-sm whitespace-nowrap"
              >
                {t('registerGallery')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-gray-900 dark:text-gray-100">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 dark:border-gray-700">
                  <SheetHeader className="px-2">
                    <SheetTitle className="dark:text-gray-100">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8 px-2">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors py-2 break-words"
                    >
                      {t('home')}
                    </Link>
                    <Link
                      href="#how-it-works"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors py-2 break-words"
                    >
                      {t('howItWorks')}
                    </Link>
                    <Link
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors py-2 break-words"
                    >
                      {t('about')}
                    </Link>
                    <Link
                      href="#pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C5F4C] dark:hover:text-[#10B981] transition-colors py-2 break-words"
                    >
                      {t('pricing')}
                    </Link>
                    <div className="border-t dark:border-gray-700 pt-4 mt-4 space-y-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setShowSurvey(true);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-base font-medium border-[#0C5F4C]/30 dark:border-gray-600 text-[#0C5F4C] dark:text-gray-300 hover:bg-[#0C5F4C]/10 dark:hover:bg-gray-700 h-11 rounded-full break-words"
                      >
                        {t('collectorSurveyButton')}
                      </Button>
                      <Button
                        onClick={() => handleAuthClick('signup')}
                        className="w-full bg-[#0C5F4C] hover:bg-[#0A4F3E] dark:bg-[#10B981] dark:hover:bg-[#059669] text-white text-base font-medium h-11 rounded-full shadow-sm break-words"
                      >
                        {t('registerGallery')}
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
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
