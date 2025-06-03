"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl">
          <Leaf className="h-6 w-6 text-green-600" />
          <span>Justice Releaf</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href={`/${locale}`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.home')}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.about')}
          </Link>
          <Link href={`/${locale}/info`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.info')}
          </Link>
          <Link href={`/${locale}/programs`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.programs')}
          </Link>
          <Link href={`/${locale}/get-involved`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.getInvolved')}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium hover:underline underline-offset-4">
            {t('navigation.contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-4">
          <LanguageSwitcher />
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href={`/${locale}/donate`}>{t('navigation.donate')}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 