"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Heart } from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GetInvolvedPage() {
  const t = useTranslations('getInvolved')
  const locale = useLocale()

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
          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="volunteer">{t('tabs.volunteer')}</TabsTrigger>
              <TabsTrigger value="donate">{t('tabs.donate')}</TabsTrigger>
              <TabsTrigger value="events">{t('tabs.events')}</TabsTrigger>
            </TabsList>
            <TabsContent value="volunteer" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{t('volunteer.title')}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t('volunteer.description')}
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">{t('volunteer.opportunities.title')}</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {t.raw('volunteer.opportunities.list').map((opportunity: string) => (
                      <li key={opportunity}>{opportunity}</li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href={`/${locale}/volunteer-form`}>
                      {t('volunteer.button')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <figure>
                    <img
                      src="/climate_together.jpg"
                      alt={t('volunteer.imageAlt')}
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                      {t('volunteer.image.caption')}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="donate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg overflow-hidden">
                  <figure>
                    <img
                      src="/garden_work.jpg"
                      alt={t('donate.imageAlt')}
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                      {t('donate.image.caption')}
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{t('donate.title')}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t('donate.description')}
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">{t('donate.impact.title')}</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    {t.raw('donate.impact.list').map((impact: string) => (
                      <li key={impact}>{impact}</li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                    <Link href={`/${locale}/donate`}>
                      {t('donate.button')}
                      <Heart className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="events" className="mt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">{t('events.title')}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {t.raw('events.list').map((event: any) => (
                  <Card key={event.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/${locale}/events/${event.id}`}>{t('events.register')}</Link>
                      </Button>
                    </CardFooter>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('partner.title')}</h2>
            <p className="mt-4 text-lg text-green-50">
              {t('partner.description')}
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-green-700 hover:bg-green-50">
              <Link href={`/${locale}/contact`}>
                {t('partner.button')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 