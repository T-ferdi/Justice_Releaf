"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en'
    // Get the path without the locale
    const newPath = pathname.replace(`/${locale}`, '')
    // Create the new path with the new locale
    router.push(`/${nextLocale}${newPath || ''}`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="relative"
        onClick={toggleLocale}
        title={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      >
        <Languages className="h-5 w-5" />
        <span className="sr-only">
          {locale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
        </span>
      </Button>
    </motion.div>
  )
} 