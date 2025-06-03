"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Leaf } from "lucide-react"

export function SiteFooter() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="border-t bg-green-900 text-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Leaf className="h-6 w-6" />
              <span>Justice Releaf</span>
            </div>
            <p className="text-green-100">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-green-100 hover:text-white">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/info`} className="text-green-100 hover:text-white">
                  {t('navigation.info')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/programs`} className="text-green-100 hover:text-white">
                  {t('navigation.programs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/get-involved`} className="text-green-100 hover:text-white">
                  {t('navigation.getInvolved')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-green-100 hover:text-white">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-green-100">
              <p>123 Green Street</p>
              <p>San Diego, CA 92101</p>
              <p className="mt-2">info@justicereleaf.org</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.followUs')}</h3>
            {/* Social media links would go here */}
          </div>
        </div>
        <div className="mt-8 border-t border-green-800 pt-6 text-center text-green-100">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  )
} 