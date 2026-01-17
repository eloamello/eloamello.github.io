"use client"

import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "https://github.com/eloamello", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/eloamello/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:eloamello126@gmail.com", label: "Email" },
  ]

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left Column - Name and Nav */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {t.hero.name}
            </h1>
            <p className="text-lg font-medium text-accent md:text-xl">{t.hero.title}</p>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">{t.hero.description}</p>
          </div>

          {/* Navigation Links */}
          <nav className="hidden space-y-3 lg:block">
            {[
              { href: "#about", label: t.nav.about },
              { href: "#experience", label: t.nav.experience },
              { href: "#projects", label: t.nav.projects },
              { href: "#contact", label: t.nav.contact },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
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
          <p>
            {t.hero.pastExperience} <span className="font-medium text-foreground">{t.hero.agencies}</span> {t.hero.and}{" "}
            <span className="font-medium text-foreground">{t.hero.corporations}</span> {t.hero.to}{" "}
            <span className="font-medium text-foreground">{t.hero.startups}</span> {t.hero.and}{" "}
            <span className="font-medium text-foreground">{t.hero.studios}</span>
          </p>
          <p>{t.hero.personalTime}</p>
        </div>
      </div>
    </section>
  )
}
