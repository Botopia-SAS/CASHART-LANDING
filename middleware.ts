import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales: locales as any,
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|es|pt)/:path*']
};
