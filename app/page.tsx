import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <main className="ml-0 lg:ml-[400px] xl:ml-[450px]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Footer />
        </footer>
      </main>
    </div>
  )
}
