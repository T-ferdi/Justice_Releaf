import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justice Releaf - Environmental Justice for All Communities',
  description: 'Justice Releaf works to address environmental inequalities by bringing sustainable solutions, green spaces, and climate education to underprivileged communities.',
}

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
