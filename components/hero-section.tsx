"use client"

import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Github, href: "https://github.com/eloamello", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/eloamello/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:eloamello126@gmail.com", label: "Email" },
  ]

  return (
    <>
      {/* Fixed Left Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-[400px] xl:w-[450px] border-r border-border/40 bg-background">
        <div className="h-full flex flex-col justify-between p-8 xl:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground xl:text-5xl text-balance">
                {t.hero.name}
              </h1>
              <p className="text-lg font-medium text-accent xl:text-xl">{t.hero.title}</p>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">{t.hero.description}</p>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-3">
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
          </div>

          {/* Bottom section with social links and toggles */}
          <div className="space-y-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
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

            {/* Theme and Language Toggles */}
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <div className="h-4 w-px bg-border" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header - shows on small screens */}
      <div className="lg:hidden sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <span className="text-sm font-semibold">{t.hero.name?.split(" ")[0] || t.hero.name || "Portfolio"}</span>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div className="h-4 w-px bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
