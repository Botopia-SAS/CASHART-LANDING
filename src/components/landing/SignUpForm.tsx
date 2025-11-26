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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';

const countryCodes = [
  { code: '+1', country: 'US/CA' },
  { code: '+34', country: 'ES' },
  { code: '+55', country: 'BR' },
  { code: '+351', country: 'PT' },
  { code: '+44', country: 'UK' },
  { code: '+33', country: 'FR' },
  { code: '+49', country: 'DE' },
  { code: '+39', country: 'IT' },
  { code: '+52', country: 'MX' },
  { code: '+54', country: 'AR' },
];

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
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      userType: 'collector',
      countryCode: '+1',
    },
  });

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
        <div className="flex gap-2">
          <Select
            onValueChange={(value) => setValue('countryCode', value)}
            defaultValue="+1"
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((cc) => (
                <SelectItem key={cc.code} value={cc.code}>
                  {cc.code} {cc.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="1234567890"
            className="flex-1"
          />
        </div>
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
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
