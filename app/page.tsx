import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProofAuthoritySection } from "@/components/proof-authority-section"
import { ImprovementLoopSection } from "@/components/improvement-loop-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { BenefitsSection } from "@/components/benefits-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProofAuthoritySection />
      <ImprovementLoopSection />
      <TechStackSection />
      <BenefitsSection />
      <EarlyAccessSection />
      <CTASection />
    </main>
  )
}
