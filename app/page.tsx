import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero-section"
import ProfessionalAmbitionSection from "@/components/sections/professional-ambition-section"
import JourneyPathwaySection from "@/components/sections/journey-pathway-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProfessionalAmbitionSection />
      <JourneyPathwaySection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
