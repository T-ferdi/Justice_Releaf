"use client"

import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { PageContainer } from "@/components/page-container"

export default function ContactPage() {
  const t = useTranslations()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-6 text-center">{t('contact.title')}</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">{t('contact.description')}</p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.form.name')}
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.form.email')}
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.form.message')}
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">{t('contact.info.address.title')}</h3>
                <p className="text-muted-foreground">
                  123 Green Street<br />
                  San Diego, CA 92101
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">{t('contact.info.phone.title')}</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">{t('contact.info.email.title')}</h3>
                <p className="text-muted-foreground">info@justicereleaf.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
} 