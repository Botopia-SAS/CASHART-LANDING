'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AuthDialog } from './AuthDialog';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('landing');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <>
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ArtFintech
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              onClick={() => handleAuthClick('signin')}
            >
              {t('login')}
            </Button>
            <Button
              onClick={() => handleAuthClick('signup')}
            >
              {t('cta')}
            </Button>
          </nav>
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
