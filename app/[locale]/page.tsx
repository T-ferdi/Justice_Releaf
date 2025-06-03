"use client"

import Link from "next/link"
import { Heart, TreePine, School, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerChildren, scaleIn, bounceIn } from "@/components/animations"
import { useTranslations, useLocale } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <main className="flex-1">
      <HeroSection />

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeIn}
        className="container py-12 md:py-16 lg:py-20 relative"
      >
        <div className="absolute left-0 top-20 hidden xl:block">
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-100"
          >
            <path
              d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM60 100C37.9 100 20 82.1 20 60C20 37.9 37.9 20 60 20C82.1 20 100 37.9 100 60C100 82.1 82.1 100 60 100Z"
              fill="currentColor"
            />
            <path
              d="M60 30C43.4 30 30 43.4 30 60C30 76.6 43.4 90 60 90C76.6 90 90 76.6 90 60C90 43.4 76.6 30 60 30ZM60 80C48.9 80 40 71.1 40 60C40 48.9 48.9 40 60 40C71.1 40 80 48.9 80 60C80 71.1 71.1 80 60 80Z"
              fill="currentColor"
            />
            <path
              d="M60 50C54.5 50 50 54.5 50 60C50 65.5 54.5 70 60 70C65.5 70 70 65.5 70 60C70 54.5 65.5 50 60 50Z"
              fill="currentColor"
            />
          </motion.svg>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            variants={bounceIn}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t('mission.title')}
          </motion.h2>
          <motion.div 
            variants={scaleIn}
            className="flex justify-center my-6"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700">
              <Heart className="h-8 w-8" />
            </div>
          </motion.div>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t('mission.description')}
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={staggerChildren}
        className="container py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2 
            variants={bounceIn}
            className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl"
          >
            {t('initiatives.title')}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-green-200 relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <TreePine className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t('initiatives.urbanGreening.title')}</CardTitle>
                  <CardDescription>{t('initiatives.urbanGreening.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t('initiatives.urbanGreening.content')}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/${locale}/programs/urban-greening`}>{t('initiatives.urbanGreening.learnMore')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-green-200 relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <School className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t('initiatives.education.title')}</CardTitle>
                  <CardDescription>{t('initiatives.education.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t('initiatives.education.content')}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/${locale}/programs/education`}>{t('initiatives.education.learnMore')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-green-200 relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Heart className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t('initiatives.communityEngagement.title')}</CardTitle>
                  <CardDescription>{t('initiatives.communityEngagement.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t('initiatives.communityEngagement.content')}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/${locale}/programs/community`}>{t('initiatives.communityEngagement.learnMore')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <StatsSection />

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        variants={fadeIn}
        className="bg-green-50 py-12 md:py-16 lg:py-20"
      >
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl">
              {t('whereWeWork.title')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">{t('whereWeWork.locations.barrioLogan.title')}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  {t('whereWeWork.locations.barrioLogan.description')}
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">{t('whereWeWork.locations.cityHeights.title')}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  {t('whereWeWork.locations.cityHeights.description')}
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">{t('whereWeWork.locations.southeastSD.title')}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  {t('whereWeWork.locations.southeastSD.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <TestimonialSection />
      <NewsletterSection />
    </main>
  )
} 