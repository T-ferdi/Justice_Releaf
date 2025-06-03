"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  const t = useTranslations('navigation')
  const locale = useLocale()

  const mainNavItems = [
    {
      title: t('about'),
      href: `/${locale}/about`,
    },
    {
      title: t('info'),
      href: `/${locale}/info`,
    },
    {
      title: t('contact'),
      href: `/${locale}/contact`,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav items={mainNavItems} />
        <MobileNav items={mainNavItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="default">
              <Link href={`/${locale}/get-involved`}>
                {t('getInvolved')}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 