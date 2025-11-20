import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { detectLocationByIP, mapLanguageToLocale } from './src/lib/api/ip-detection';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false // We'll handle detection manually
});

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If locale is already in pathname, use intl middleware
  if (pathnameHasLocale) {
    return intlMiddleware(request);
  }

  // Detect locale from IP address
  let detectedLocale = defaultLocale;

  try {
    // Get client IP from headers
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               undefined;

    const location = await detectLocationByIP(ip);

    if (location && location.language) {
      detectedLocale = mapLanguageToLocale(location.language);
    }
  } catch (error) {
    console.error('Error in IP detection middleware:', error);
  }

  // Redirect to the detected locale
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
