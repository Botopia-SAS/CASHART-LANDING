'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
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
  initialEmail?: string;
}

export function SignUpFormFormity({ initialEmail }: SignUpFormFormityProps) {
  const t = useTranslations('auth');
  const locale = useLocale();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<'collector' | 'gallery'>('gallery');
  const [isLoading, setIsLoading] = useState(false);

  // Step 2 data
  const [website, setWebsite] = useState('');
  const [instagram, setInstagram] = useState('');
  const [priceRange, setPriceRange] = useState<'under-10k' | '10-50k' | '50-250k' | '250-500k' | 'over-500k'>('under-10k');
  const [financingExperience, setFinancingExperience] = useState<'yes' | 'no'>('no');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      userType: 'gallery',
      countryCode: '+1',
      email: initialEmail || '',
    },
  });

  const handleNextStep = async () => {
    // Validate all fields in step 1
    const isValid = await trigger(['email', 'fullName', 'galleryName', 'phone', 'password']);

    if (isValid) {
      setCurrentStep(2);
    }
  };

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      // Combine step 1 and step 2 data
      const fullData = {
        ...data,
        website,
        instagram,
        priceRange,
        financingExperience,
      };

      console.log('Sending registration data:', fullData);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error response:', errorData);
        throw new Error(errorData.error || 'Registration failed');
      }

      const responseData = await response.json();
      console.log('Registration successful:', responseData);

      // Don't call onSuccess here to avoid double redirect
      // onSuccess is already redirecting to dashboard in the parent component
      // Just redirect to dashboard directly
      router.push(`/${locale}/dashboard`);
    } catch (error) {
      console.error('Registration error:', error);
      alert(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {t('step')} {currentStep} {t('of')} 2
          </span>
          <span className="text-sm font-medium text-gray-700">
            {Math.round((currentStep / 2) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0C5F4C] transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-900 font-semibold text-base">{t('email')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your@email.com"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address with @"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
                required
              />
              {errors.email && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 px-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Full Name Field */}
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-gray-900 font-semibold text-base">{t('fullName')}</Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="John Doe"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 px-2">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Gallery Name */}
            <div className="space-y-3">
              <Label htmlFor="galleryName" className="text-gray-900 font-semibold text-base">{t('galleryName')}</Label>
              <Input
                id="galleryName"
                {...register('galleryName')}
                placeholder="Gallery Name"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
              />
              {errors.galleryName && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 px-2">
                  {errors.galleryName.message}
                </p>
              )}
            </div>

            {/* Phone Number Group */}
            <div className="space-y-3">
              <Label className="text-gray-900 font-semibold text-base">{t('phone')}</Label>
              <div className="flex gap-3">
                <Select
                  onValueChange={(value) => setValue('countryCode', value)}
                  defaultValue="+1"
                >
                  <SelectTrigger className="w-[140px] px-4 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] bg-white/50">
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
                  type="tel"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/\D/g, '');
                  }}
                  className="flex-1 px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 px-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <Label htmlFor="password" className="text-gray-900 font-semibold text-base">{t('password')}</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder="••••••••"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
              />
              {errors.password && (
                <p className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 px-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Next Button */}
            <Button
              type="button"
              onClick={handleNextStep}
              className="w-full bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white py-4 text-base rounded-full font-semibold transition-colors shadow-lg mt-8"
            >
              {t('next')}
            </Button>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Website (Optional) */}
            <div className="space-y-3">
              <Label htmlFor="website" className="text-gray-900 font-semibold text-base">
                {t('website')} <span className="text-gray-500 font-normal">({t('optional')})</span>
              </Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://www.yourgallery.com"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
              />
            </div>

            {/* Instagram (Optional) */}
            <div className="space-y-3">
              <Label htmlFor="instagram" className="text-gray-900 font-semibold text-base">
                {t('instagram')} <span className="text-gray-500 font-normal">({t('optional')})</span>
              </Label>
              <Input
                id="instagram"
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@yourgallery"
                className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] focus:border-[#0C5F4C] transition-all bg-white/50"
              />
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <Label className="text-gray-900 font-semibold text-base">{t('priceRange')}</Label>
              <Select
                onValueChange={(value) => setPriceRange(value as 'under-10k' | '10-50k' | '50-250k' | '250-500k' | 'over-500k')}
                defaultValue="under-10k"
              >
                <SelectTrigger className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] bg-white/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-10k">{t('priceRangeUnder10k')}</SelectItem>
                  <SelectItem value="10-50k">{t('priceRange10to50k')}</SelectItem>
                  <SelectItem value="50-250k">{t('priceRange50to250k')}</SelectItem>
                  <SelectItem value="250-500k">{t('priceRange250to500k')}</SelectItem>
                  <SelectItem value="over-500k">{t('priceRangeOver500k')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Financing Experience */}
            <div className="space-y-3">
              <Label className="text-gray-900 font-semibold text-base">{t('financingExperience')}</Label>
              <Select
                onValueChange={(value) => setFinancingExperience(value as 'yes' | 'no')}
                defaultValue="no"
              >
                <SelectTrigger className="w-full px-6 py-4 text-base border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-[#0C5F4C] bg-white/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">{t('yes')}</SelectItem>
                  <SelectItem value="no">{t('no')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setCurrentStep(1)}
                variant="outline"
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 text-base rounded-full font-semibold transition-colors"
              >
                {t('back')}
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white py-4 text-base rounded-full font-semibold transition-colors shadow-lg"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t('submit')}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
