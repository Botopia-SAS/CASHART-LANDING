'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { loginSchema, type LoginFormData } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from '@/lib/store/auth-store';

interface SignInFormProps {
  onSuccess: () => void;
  initialEmail?: string;
}

export function SignInForm({ onSuccess, initialEmail }: SignInFormProps) {
  const t = useTranslations('auth');
  const locale = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: initialEmail || '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    // Simulate login - auto redirect to dashboard
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: data.email,
        fullName: data.email.split('@')[0],
        phone: '',
        countryCode: '',
        userType: 'collector' as const,
      };

      setUser(mockUser);
      onSuccess();
      router.push(`/${locale}/dashboard`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
      <div className="space-y-3">
        <Label htmlFor="signin-email" className="text-gray-900 font-semibold text-base">{t('email')}</Label>
        <Input
          id="signin-email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
        />
        {errors.email && (
          <p className="text-sm text-red-600 px-2">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="signin-password" className="text-gray-900 font-semibold text-base">{t('password')}</Label>
        <Input
          id="signin-password"
          type="password"
          {...register('password')}
          placeholder="••••••••"
          className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
        />
        {errors.password && (
          <p className="text-sm text-red-600 px-2">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white py-4 text-base rounded-full font-semibold transition-colors shadow-lg mt-8"
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t('signIn')}
      </Button>
    </form>
  );
}
