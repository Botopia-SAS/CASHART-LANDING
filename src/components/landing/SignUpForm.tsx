'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { authSchema, type AuthFormData } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/lib/store/auth-store';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';

interface SignUpFormProps {
  onSuccess: () => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const t = useTranslations('auth');
  const locale = useLocale();
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [userType, setUserType] = useState<'collector' | 'gallery'>('collector');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      userType: 'collector',
      countryCode: '+1',
    },
  });

  const [phoneInput, setPhoneInput] = useState('');

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);

    // Simulate registration - auto redirect to dashboard
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: data.email,
        fullName: data.fullName,
        phone: data.phone,
        countryCode: data.countryCode,
        userType: data.userType,
        ...(data.userType === 'gallery' && data.galleryName
          ? { galleryName: data.galleryName }
          : {}),
      };

      setUser(mockUser);
      onSuccess();
      router.push(`/${locale}/dashboard`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <Tabs
        value={userType}
        onValueChange={(v) => {
          const type = v as 'collector' | 'gallery';
          setUserType(type);
          setValue('userType', type);
        }}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="collector">{t('collector')}</TabsTrigger>
          <TabsTrigger value="gallery">{t('gallery')}</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName">{t('fullName')}</Label>
        <Input
          id="fullName"
          {...register('fullName')}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      {userType === 'gallery' && (
        <div className="space-y-2">
          <Label htmlFor="galleryName">{t('galleryName')}</Label>
          <Input
            id="galleryName"
            {...register('galleryName')}
            placeholder="Gallery Name"
          />
          {errors.galleryName && (
            <p className="text-sm text-destructive">{errors.galleryName.message}</p>
          )}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="phone">{t('phone')}</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">+</span>
          <Input
            id="phone"
            type="tel"
            value={phoneInput}
            onChange={(e) => {
              let value = e.target.value;

              // Only allow numbers, spaces, and hyphens
              value = value.replace(/[^\d\s-]/g, '');

              setPhoneInput(value);

              // Extract country code and phone number
              const match = value.match(/^(\d{1,4})\s*(.*)$/);
              if (match) {
                setValue('countryCode', `+${match[1]}`);
                setValue('phone', match[2].replace(/[\s-]/g, ''));
              } else {
                // User is still typing or only has numbers
                setValue('countryCode', value ? `+${value.replace(/[\s-]/g, '')}` : '+1');
                setValue('phone', '');
              }
            }}
            placeholder="1 1234567890"
            className="w-full pl-7"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {t('phoneHint')}
        </p>
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
        {errors.countryCode && (
          <p className="text-sm text-destructive">{errors.countryCode.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t('password')}</Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t('submit')}
      </Button>
    </form>
  );
}
