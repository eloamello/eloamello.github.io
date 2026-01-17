import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Column - Fixed Sidebar */}
      <HeroSection />
      
      {/* Right Column - Scrollable Content */}
      <main className="flex-1 ml-0 lg:ml-[400px] xl:ml-[450px] overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32 space-y-16 md:space-y-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
          <Footer />
        </footer>
      </main>
    </div>
  )
}
