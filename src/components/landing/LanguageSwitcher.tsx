'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLocale = mounted ? (pathname.split('/')[1] || 'en') : 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const renderTrigger = (flag: string) => (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 text-sm font-semibold h-10 px-2 rounded-full bg-transparent text-[#0b2842] hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
    >
      <Globe className="h-4 w-4 text-[#0b2842]" />
      <span>{flag}</span>
    </Button>
  );

  if (!mounted) {
    return renderTrigger('🇺🇸');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {renderTrigger(currentLanguage.flag)}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-[#e1e6ef] text-[#0b2842]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer hover:bg-[#f0f4fb] ${currentLocale === language.code ? 'bg-[#f0f4fb]' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
