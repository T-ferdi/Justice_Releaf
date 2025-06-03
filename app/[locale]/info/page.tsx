"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fadeIn, bounceIn, scaleIn } from "../../../lib/animations"
import { TreeDeciduous, Users, Building2, PiggyBank, Lightbulb, BookOpen } from "lucide-react"

const LeafPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg 
      className="absolute right-0 top-0 w-1/2 max-w-[400px] text-green-100/20" 
      viewBox="0 0 100 100" 
      fill="currentColor"
      aria-label="Decorative leaf pattern symbolizing environmental growth"
    >
      <path d="M50,3c0,0-45,47-45,72s20,25,45,25s45,0,45-25S50,3,50,3z M50,90c-20,0-35-2-35-15s25-52,35-62 c10,10,35,49,35,62S70,90,50,90z"/>
    </svg>
    <span className="sr-only">Decorative leaf pattern representing growth and nature</span>
  </div>
)

const WavePattern = () => (
  <div className="absolute inset-x-0 bottom-0 pointer-events-none">
    <svg 
      className="w-full h-16 text-gray-50" 
      viewBox="0 0 1440 54" 
      preserveAspectRatio="none"
      aria-label="Decorative wave pattern representing flowing change"
    >
      <path 
        d="M0 27C148.667 -9 288.667 -9 420 27C551.333 63 682.667 63 814 27C945.333 -9 1085.33 -9 1234 27C1382.67 63 1513.33 63 1626 27L1440 54H0V27Z"
        fill="currentColor"
      />
    </svg>
    <span className="sr-only">Wave pattern symbolizing the flow of environmental justice</span>
  </div>
)

const DecorativeShape = ({ shape, description }: { shape: React.ReactNode, description: string }) => (
  <div className="absolute right-0 top-0 h-32 w-32 transform translate-x-8 -translate-y-8">
    <div className="relative">
      {shape}
      <span className="sr-only">{description}</span>
    </div>
  </div>
)

export default function InfoPage() {
  const t = useTranslations("info")

  return (
    <main className="flex-1">
      <motion.section 
        className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-600 pt-20 pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <LeafPattern />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              variants={bounceIn}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t("title")}
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="mt-6 text-lg text-green-50 md:text-xl"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>
        <WavePattern />
      </motion.section>

      <motion.section 
        className="container py-12 md:py-16 bg-gray-50"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8">
            {/* Systemic Inequalities */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Circle representing unity and wholeness">
                    <circle cx="50" cy="50" r="40" fill="currentColor" />
                  </svg>
                }
                description="Circular pattern symbolizing the interconnected nature of systemic inequalities"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-green-600" />
                  <CardTitle>{t("sections.systemicInequalities.title")}</CardTitle>
                </div>
                <CardDescription className="text-green-700">{t("sections.systemicInequalities.description")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sections.systemicInequalities.keyPoints").map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Environmental Racism */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-700 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Wave pattern representing the flow of change">
                    <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="currentColor" />
                  </svg>
                }
                description="Wave pattern representing the ongoing movement for environmental justice"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-green-700" />
                  <CardTitle>{t("sections.environmentalRacism.title")}</CardTitle>
                </div>
                <CardDescription className="text-green-800">{t("sections.environmentalRacism.description")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sections.environmentalRacism.examples").map((example: string, index: number) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Indigenous Communities */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-800 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Triangle representing strength and resilience">
                    <path d="M50,10 L90,90 L10,90 Z" fill="currentColor" />
                  </svg>
                }
                description="Triangle pattern symbolizing the strength and wisdom of indigenous communities"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <TreeDeciduous className="h-6 w-6 text-green-800" />
                  <CardTitle>{t("sections.indigenousImpacts.title")}</CardTitle>
                </div>
                <CardDescription className="text-green-900">{t("sections.indigenousImpacts.description")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sections.indigenousImpacts.keyPoints").map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Economic Factors */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Square representing foundation and stability">
                    <rect x="20" y="20" width="60" height="60" fill="currentColor" />
                  </svg>
                }
                description="Square pattern representing the foundational economic factors in environmental justice"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <PiggyBank className="h-6 w-6 text-green-600" />
                  <CardTitle>{t("sections.economicFactors.title")}</CardTitle>
                </div>
                <CardDescription className="text-green-700">{t("sections.economicFactors.description")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sections.economicFactors.barriers").map((barrier: string, index: number) => (
                    <li key={index}>{barrier}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Concentric circles representing ripple effects of solutions">
                    <circle cx="50" cy="50" r="30" fill="currentColor" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" />
                  </svg>
                }
                description="Concentric circles pattern representing the ripple effect of environmental solutions"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-green-500" />
                  <CardTitle>{t("sections.solutions.title")}</CardTitle>
                </div>
                <CardDescription className="text-green-600">{t("sections.solutions.description")}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sections.solutions.actions").map((action: string, index: number) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Sources */}
            <Card className="relative overflow-hidden border-l-4 border-l-green-400 shadow-lg hover:shadow-xl transition-shadow">
              <DecorativeShape 
                shape={
                  <svg className="text-green-50" viewBox="0 0 100 100" aria-label="Document pattern representing research and knowledge">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z M30,30 L70,30 M30,45 L70,45 M30,60 L70,60" fill="none" stroke="currentColor" strokeWidth="5" />
                  </svg>
                }
                description="Document pattern representing the importance of research and citations"
              />
              <CardHeader className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-green-400" />
                  <CardTitle>{t("sources.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {t.raw("sources.list").map((source: string, index: number) => (
                    <li key={index}>{source}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
    </main>
  )
} 