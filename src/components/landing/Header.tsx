'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from './AuthDialog';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="pt-4 pb-5">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-10">
            <div className="flex h-16 sm:h-[78px] items-center justify-between gap-5 rounded-full bg-white/70 border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl px-6 sm:px-10">
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

            {/* Desktop Navigation - Center (fixed order, same for all locales) */}
              <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[#0b2842]">
                <Link
                  href={`/${locale}`}
                  className="text-sm 2xl:text-base font-semibold tracking-wide hover:text-[#048088] transition-colors whitespace-nowrap"
                >
                  {t('home')}
                </Link>
                <Link
                  href="#smart-liquidity"
                  className="text-sm 2xl:text-base font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors whitespace-nowrap"
                >
                  {t('smartLiquidity')}
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm 2xl:text-base font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors whitespace-nowrap"
                >
                  {t('howItWorks')}
                </Link>
                <Link
                  href="#dashboard"
                  className="text-sm 2xl:text-base font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors whitespace-nowrap"
                >
                  {t('dashboard')}
                </Link>
                <Link
                  href="#coming-soon"
                  className="text-sm 2xl:text-base font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors whitespace-nowrap"
                >
                  {t('comingSoon')}
                </Link>
              </nav>

            {/* Right Actions - Desktop */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
                <LanguageSwitcher />
                <Link href={`/${locale}/survey`}>
                  <Button
                    variant="secondary"
                    className="hidden xl:flex text-sm 2xl:text-base font-semibold bg-[#0f8b8c]/95 text-white hover:bg-[#0c7071] px-5 2xl:px-6 h-10 2xl:h-11 rounded-full whitespace-nowrap border border-white/80 shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                  >
                    {t('collectorSurveyButtonDesktop')}
                  </Button>
                </Link>
                <Button
                  onClick={() => handleAuthClick('signup')}
                  className="bg-white border border-[#11a987] text-[#0b2842] text-sm 2xl:text-base font-semibold px-5 2xl:px-6 h-10 2xl:h-11 rounded-full whitespace-nowrap hover:bg-[#11a987]/10 transition"
                >
                  {t('registerGalleryDesktop')}
                </Button>
              </div>

            {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center gap-2">
                <LanguageSwitcher />
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-[#0b2842]">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-[#0b2842] border border-[#e1e6ef] shadow-2xl">
                    <SheetHeader className="px-2">
                      <SheetTitle className="text-[#0b2842]">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8 px-2">
                      <Link
                        href={`/${locale}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-semibold hover:text-[#048088] transition-colors py-2 break-words"
                      >
                        {t('home')}
                      </Link>
                      <Link
                        href="#smart-liquidity"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors py-2 break-words"
                      >
                        {t('smartLiquidity')}
                      </Link>
                      <Link
                        href="#how-it-works"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors py-2 break-words"
                      >
                        {t('howItWorks')}
                      </Link>
                      <Link
                        href="#dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors py-2 break-words"
                      >
                        {t('dashboard')}
                      </Link>
                      <Link
                        href="#coming-soon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-[#5a6c7f] hover:text-[#0b2842] transition-colors py-2 break-words"
                      >
                        {t('comingSoon')}
                      </Link>
                      <div className="border-t border-[#e1e6ef] pt-4 mt-4 space-y-3">
                        <Link href={`/${locale}/survey`} onClick={() => setMobileMenuOpen(false)}>
                          <Button
                            variant="secondary"
                            className="w-full text-base font-semibold bg-[#0f8b8c]/95 text-white hover:bg-[#0c7071] h-11 rounded-full break-words border border-white/80"
                          >
                            {t('collectorSurveyButton')}
                          </Button>
                        </Link>
                      <Button
                        onClick={() => handleAuthClick('signup')}
                        className="w-full text-base font-semibold h-11 rounded-full break-words bg-white border border-[#11a987] text-[#0b2842] hover:bg-[#11a987]/10"
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
        </div>
      </header>
      <AuthDialog
        open={showAuth}
        onOpenChange={setShowAuth}
        defaultMode={authMode}
      />
    </>
  );
}
