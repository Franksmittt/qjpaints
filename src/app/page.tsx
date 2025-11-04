import { HeroSection } from "@/components/layout/HeroSection";
import { CategorySection } from "@/components/layout/CategorySection";
import { FeaturedBrands } from "@/components/layout/FeaturedBrands";
import { ValueProposition } from "@/components/layout/ValueProposition";
import { B2B_CTA_Section } from "@/components/layout/B2B_CTA_Section";
import { Testimonials } from "@/components/layout/Testimonials";
import { FAQ } from "@/components/layout/FAQ"; // 1. Import the new section

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedBrands />
      <ValueProposition />
      <B2B_CTA_Section />
      <Testimonials />

      {/* 2. Add the new section right below */}
      <FAQ />

      {/* Other homepage sections will go here */}
    </main>
  );
}