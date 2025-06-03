import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

type GenerateMetadataProps = {
  params: { locale: string }
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata' })
  return {
    title: `${t('title')} - Info`,
    description: t('description')
  }
}

export const dynamic = 'force-static'
export const revalidate = false

export default async function InfoPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Get translations
  const t = await getTranslations('info')

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
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-green mx-auto">
            <h2>{t('whatWeDo.title')}</h2>
            <p>{t('whatWeDo.description')}</p>

            <h2>{t('howItWorks.title')}</h2>
            <p>{t('howItWorks.description')}</p>

            <h2>{t('impact.title')}</h2>
            <ul>
              {t.raw('impact.points').map((point: string) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h2>{t('getInvolved.title')}</h2>
            <p>{t('getInvolved.description')}</p>
          </div>
        </div>
      </section>
    </main>
  )
} 