"use client"

import { Leaf, Droplet, Users, Home } from "lucide-react"
import { motion } from "framer-motion"
import { bounceIn, staggerChildren } from "./animations"
import { useTranslations } from 'next-intl'

export function StatsSection() {
  const t = useTranslations()

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px" }}
      variants={staggerChildren}
      className="container py-12 md:py-16 relative"
    >
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          width="100"
          height="200"
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-100"
        >
          <path
            d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 100C22.4 100 0 122.4 0 150C0 177.6 22.4 200 50 200C77.6 200 100 177.6 100 150C100 122.4 77.6 100 50 100Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          width="100"
          height="200"
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-100"
        >
          <path
            d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 100C22.4 100 0 122.4 0 150C0 177.6 22.4 200 50 200C77.6 200 100 177.6 100 150C100 122.4 77.6 100 50 100Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
      <div className="mx-auto max-w-5xl">
        <motion.h2 
          variants={bounceIn}
          className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl"
        >
          {t('impact.title')}
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div 
            variants={bounceIn}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">10K+</h3>
            <p className="mt-2 text-muted-foreground">{t('impact.treesPlanted')}</p>
          </motion.div>
          <motion.div 
            variants={bounceIn}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">25+</h3>
            <p className="mt-2 text-muted-foreground">{t('impact.communitiesServed')}</p>
          </motion.div>
          <motion.div 
            variants={bounceIn}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">5K+</h3>
            <p className="mt-2 text-muted-foreground">{t('impact.volunteersEngaged')}</p>
          </motion.div>
          <motion.div 
            variants={bounceIn}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Droplet className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">15M</h3>
            <p className="mt-2 text-muted-foreground">{t('impact.waterSaved')}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
