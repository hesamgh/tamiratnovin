import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { SeoContent } from "@/components/sections/seo-content";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <SeoContent />
    </>
  );
}
