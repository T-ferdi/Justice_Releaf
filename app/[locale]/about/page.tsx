import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function AboutPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Get translations
  const t = await getTranslations('about')

  return (
    <main className="flex-1">
      <section className="bg-green-50 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('title')}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">{t('tabs.mission')}</TabsTrigger>
              <TabsTrigger value="story">{t('tabs.story')}</TabsTrigger>
              <TabsTrigger value="team">{t('tabs.team')}</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{t('mission.title')}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t('mission.description1')}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t('mission.description2')}
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">{t('mission.values.title')}</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {t.raw('mission.values.list').map((value: string) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <figure>
                    <img
                      src="/water_bottle_pick_up.jpg"
                      alt="Community members cleaning up plastic waste"
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                      {t('mission.image.caption')}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="story" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg overflow-hidden">
                  <figure>
                    <img
                      src="/climate_justice_image.jpg"
                      alt="Climate justice activists advocating for environmental change"
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                      {t('story.image.caption')}
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{t('story.title')}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t('story.description1')}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t('story.description2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('story.description3')}
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="team" className="mt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">{t('team.title')}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {['katelyn', 'madison', 'tristan', 'akshay', 'rishit'].map((member) => (
                  <Card key={member}>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <figure>
                            <img
                              src="/placeholder.svg"
                              alt={t(`team.members.${member}.name`)}
                              className="w-full h-full object-cover"
                            />
                            <figcaption className="sr-only">
                              {t(`team.members.${member}.name`)} - {t(`team.members.${member}.role`)}
                            </figcaption>
                          </figure>
                        </div>
                        <h3 className="text-xl font-semibold">{t(`team.members.${member}.name`)}</h3>
                        <p className="text-green-600 mb-2">{t(`team.members.${member}.role`)}</p>
                        <p className="text-muted-foreground text-sm">
                          {t(`team.members.${member}.bio`)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-green-600 py-12 md:py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('joinMission.title')}</h2>
            <p className="mt-4 text-lg text-green-50">
              {t('joinMission.description')}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href={`/${locale}/get-involved`}>
                  {t('joinMission.buttons.getInvolved')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href={`/${locale}/contact`}>{t('joinMission.buttons.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 