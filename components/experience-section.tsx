"use client"

import { useLanguage } from "@/components/language-provider"
import { ExternalLink } from "lucide-react"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-16 md:py-24">
      <h2 className="mb-12 text-sm font-semibold uppercase tracking-widest text-muted-foreground lg:sr-only">
        {t.experience.title}
      </h2>

      <div className="space-y-12">
        {t.experience.items.map((item, index) => (
          <div
            key={index}
            className="group relative grid gap-4 rounded-lg p-4 transition-all hover:bg-secondary/50 sm:grid-cols-[150px_1fr] sm:gap-8 lg:p-6"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.period}</div>
            <div className="space-y-3">
              <h3 className="font-medium leading-snug text-foreground">
                <a href="#" className="group/link inline-flex items-baseline gap-1 hover:text-accent">
                  {item.role} · {item.company}
                  <ExternalLink className="ml-1 h-3 w-3 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <li key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-accent"
        >
          {t.experience.viewResume}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  )
}
