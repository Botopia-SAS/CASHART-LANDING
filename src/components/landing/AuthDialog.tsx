'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SignUpFormFormity } from './SignUpFormFormity';
import { SignInForm } from './SignInForm';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: 'signin' | 'signup';
}

export function AuthDialog({ open, onOpenChange, defaultMode = 'signin' }: AuthDialogProps) {
  const t = useTranslations('auth');
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultMode);

  // Note: SignUpFormFormity now handles its own redirect to dashboard
  // This dialog is deprecated in favor of the dedicated gallery-signup page
  // Keep it for backwards compatibility but redirect to the new page
  useEffect(() => {
    if (open && activeTab === 'signup') {
      // Close dialog and redirect to dedicated signup page
      onOpenChange(false);
      router.push('/gallery-signup?mode=signup');
    }
  }, [open, activeTab, onOpenChange, router]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            {activeTab === 'signin' ? t('signIn') : t('createAccount')}
          </DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'signin' | 'signup')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">{t('signIn')}</TabsTrigger>
            <TabsTrigger value="signup">{t('signUp')}</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onSuccess={() => onOpenChange(false)} />
          </TabsContent>
          <TabsContent value="signup">
            {/* Signup now redirects to dedicated page */}
            <div className="text-center py-4 text-gray-600">
              {t('redirecting') || 'Redirecting to signup page...'}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
