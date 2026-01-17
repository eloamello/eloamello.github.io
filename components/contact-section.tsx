"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.title}</h2>
        <p className="max-w-lg text-base leading-relaxed text-muted-foreground">{t.contact.description}</p>
        <Button asChild className="group">
          <a href={`mailto:${t.contact.email}`}>
            <Mail className="mr-2 h-4 w-4" />
            {t.contact.cta}
          </a>
        </Button>
      </div>
    </section>
  )
}
