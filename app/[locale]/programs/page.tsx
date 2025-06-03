"use client"

import { useTranslations, useLocale } from 'next-intl'
import { motion } from "framer-motion"
import { fadeIn, staggerChildren } from "@/components/animations"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TreePine, School, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Leaf, Users, Droplet, Sun, Wind } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramsPage() {
  const t = useTranslations("programs")
  const locale = useLocale()

  return (
    <main className="flex-1">
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="initiatives" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="initiatives">{t("tabs.initiatives")}</TabsTrigger>
              <TabsTrigger value="partnerships">{t("tabs.partnerships")}</TabsTrigger>
              <TabsTrigger value="impact">{t("tabs.impact")}</TabsTrigger>
            </TabsList>
            <TabsContent value="initiatives" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                        <Leaf className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">{t("initiatives.urbanGreening.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {t("initiatives.urbanGreening.subtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("initiatives.urbanGreening.description")}
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {t.raw("initiatives.urbanGreening.features").map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/urban-greening">{t("initiatives.urbanGreening.learnMore")}</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                        <Sun className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">{t("initiatives.cleanEnergy.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {t("initiatives.cleanEnergy.subtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("initiatives.cleanEnergy.description")}
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {t.raw("initiatives.cleanEnergy.features").map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/clean-energy">{t("initiatives.cleanEnergy.learnMore")}</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">{t("initiatives.education.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {t("initiatives.education.subtitle")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t("initiatives.education.description")}
                    </p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {t.raw("initiatives.education.features").map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/education">{t("initiatives.education.learnMore")}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="partnerships" className="mt-6">
              <div className="grid gap-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-4">{t("partnerships.title")}</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    {t("partnerships.subtitle")}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {["sd350", "ehc", "cjbi", "gcc", "usn", "cea"].map((partner) => (
                    <Card key={partner} className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">{t(`partnerships.partners.${partner}.title`)}</CardTitle>
                        <CardDescription>{t(`partnerships.partners.${partner}.subtitle`)}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {t(`partnerships.partners.${partner}.description1`)}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {t(`partnerships.partners.${partner}.description2`)}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={partner === "sd350" || partner === "ehc" ? "w-full bg-green-600 hover:bg-green-700" : "w-full"}
                          variant={partner === "sd350" || partner === "ehc" ? "default" : "outline"}
                          asChild
                        >
                          {partner === "sd350" || partner === "ehc" ? (
                            <a
                              href={partner === "sd350" ? "https://sandiego350.org/programs" : "https://environmentalhealth.org"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t(`partnerships.partners.${partner}.cta`)}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          ) : (
                            <Link href={`/partnerships/${partner}`}>{t(`partnerships.partners.${partner}.cta`)}</Link>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="impact" className="mt-6">
              <div className="grid gap-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-4">{t("impact.title")}</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    {t("impact.subtitle")}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t("impact.environmental.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Leaf className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.environmental.urbanGreening.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.environmental.urbanGreening.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Droplet className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.environmental.waterConservation.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.environmental.waterConservation.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Sun className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.environmental.cleanEnergy.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.environmental.cleanEnergy.description")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t("impact.community.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.community.education.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.community.education.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Wind className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.community.health.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.community.health.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{t("impact.community.engagement.title")}</h3>
                            <p className="text-muted-foreground">
                              {t("impact.community.engagement.description")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-green-600 py-12 md:py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("getInvolved.title")}</h2>
            <p className="mt-4 text-lg text-green-50">
              {t("getInvolved.description")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href="/get-involved">
                  {t("getInvolved.buttons.getInvolved")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">{t("getInvolved.buttons.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 