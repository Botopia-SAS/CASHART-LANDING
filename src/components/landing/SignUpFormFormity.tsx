'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import { authSchema, type AuthFormData } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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

interface SignUpFormFormityProps {
  onSuccess: () => void;
}

export function SignUpFormFormity({ onSuccess }: SignUpFormFormityProps) {
  const t = useTranslations('auth');
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

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      onSuccess();
    } catch (error) {
      console.error('Registration error:', error);
      alert(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      {/* User Type Selector with Formity-style approach */}
      <div className="space-y-2">
        <Label>{t('collector')} / {t('gallery')}</Label>
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
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="transition-all focus:ring-2 focus:ring-purple-500"
        />
        {errors.email && (
          <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Full Name Field */}
      <div className="space-y-2">
        <Label htmlFor="fullName">{t('fullName')}</Label>
        <Input
          id="fullName"
          {...register('fullName')}
          placeholder="John Doe"
          className="transition-all focus:ring-2 focus:ring-purple-500"
        />
        {errors.fullName && (
          <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Conditional Gallery Name - Formity-style conditional rendering */}
      {userType === 'gallery' && (
        <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
          <Label htmlFor="galleryName">{t('galleryName')}</Label>
          <Input
            id="galleryName"
            {...register('galleryName')}
            placeholder="Gallery Name"
            className="transition-all focus:ring-2 focus:ring-purple-500"
          />
          {errors.galleryName && (
            <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
              {errors.galleryName.message}
            </p>
          )}
        </div>
      )}

      {/* Phone Number Group - Formity-style field grouping */}
      <div className="space-y-2">
        <Label>{t('phone')}</Label>
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
            className="flex-1 transition-all focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {errors.phone && (
          <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password">{t('password')}</Label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          placeholder="••••••••"
          className="transition-all focus:ring-2 focus:ring-purple-500"
        />
        {errors.password && (
          <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t('submit')}
      </Button>
    </form>
  );
}
