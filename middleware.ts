import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Get hostname from environment variable
const hostname = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: defaultLocale,
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'always',

  // Configure redirects
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 