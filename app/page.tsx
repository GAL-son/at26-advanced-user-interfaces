import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <FeaturesSection />
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border" />
      </div>
      <ConnectSection />
      <Footer />
    </main>
  )
}
