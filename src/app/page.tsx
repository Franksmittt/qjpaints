// src/app/page.tsx - FULL REPLACEMENT (Integrating ArtisanGallery)

import { HeroSection } from "@/components/layout/HeroSection";
import { CategorySection } from "@/components/layout/CategorySection";
import { FeaturedBrands } from "@/components/layout/FeaturedBrands";
import { ValueProposition } from "@/components/layout/ValueProposition";
import { B2B_CTA_Section } from "@/components/layout/B2B_CTA_Section";
import { Testimonials } from "@/components/layout/Testimonials";
import { FAQ } from "@/components/layout/FAQ";
// 1. Import the new section: ArtisanGallery
import { ArtisanGallery } from "@/components/layout/ArtisanGallery";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      
      {/* --- NEW SECTION PLACEMENT --- */}
      <ArtisanGallery />
      {/* ----------------------------- */}
      
      <FeaturedBrands />
      <ValueProposition />
      <B2B_CTA_Section />
      <Testimonials />

      <FAQ />
    </main>
  );
}