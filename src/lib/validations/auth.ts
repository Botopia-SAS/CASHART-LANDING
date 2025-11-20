import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  phone: z.string().min(6, { message: 'Phone number must be at least 6 digits' }),
  countryCode: z.string().min(1, { message: 'Country code is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  userType: z.enum(['collector', 'gallery']),
  galleryName: z.string().optional(),
}).refine((data) => {
  if (data.userType === 'gallery') {
    return data.galleryName && data.galleryName.length >= 2;
  }
  return true;
}, {
  message: 'Gallery name is required for gallery accounts',
  path: ['galleryName'],
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type AuthFormData = z.infer<typeof authSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
