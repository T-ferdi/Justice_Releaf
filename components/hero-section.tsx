"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-700/70 z-10"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/istockphoto-1435005448-612x612.jpg')" }}
      >
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg text-white drop-shadow-lg"
          >
            {t('hero.description')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg">
                <Link href="/get-involved">
                  {t('hero.getInvolved')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-400 bg-amber-500 text-white hover:bg-amber-600 hover:border-amber-500 shadow-lg"
              >
                <Link href="/donate">{t('hero.donate')}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
