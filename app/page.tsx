import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { FeatureCards } from "@/components/feature-cards";
import { LogoSection } from "@/components/logo-section";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <MissionSection />
        <FeatureCards />
        <LogoSection />
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}