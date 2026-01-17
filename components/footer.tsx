"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>{t.footer.copyright}</p>
        <p>{t.footer.credits}</p>
      </div>
    </footer>
  )
}
