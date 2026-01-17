"use client"

import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="space-y-6 text-base leading-relaxed text-muted-foreground">
      <p>{t.hero.bio}</p>
      <p>
        {t.hero.currentRole}{" "}
        <a
          href="#"
          className="font-medium text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
        >
          {t.hero.company}
        </a>
        , {t.hero.companyDescription}
      </p>
      {t.hero.pastExperience && t.hero.pastExperience.trim() && <p>{t.hero.pastExperience}</p>}
      <p>{t.hero.personalTime}</p>
    </section>
  )
}
