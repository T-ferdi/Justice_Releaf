import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    throw new Error('Invalid locale');
  }

  const messages = await import(`./messages/${locale}.json`).then(module => module.default);

  return {
    messages,
    timeZone: 'America/Los_Angeles',
    getMessageFallback: ({ namespace, key, error }) => {
      const fallback = `${namespace}.${key}`;
      console.error('Missing translation:', fallback, error.message);
      return fallback;
    }
  };
}); 