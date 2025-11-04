// src/components/layout/FeaturedBrands.tsx - Fix Unused Variables and Unescaped Entity

import Image from "next/image";
import Link from "next/link";
import { Star, Paintbrush, Shield, Home } from "lucide-react"; // Only keeping the used icons
import { cn } from "@/lib/utils";

// The data is grouped by vertical to reinforce the "Expert Generalist" USP.
const brandVerticals = [
  {
    name: "Decorative Coatings",
    description: "Premium interior and exterior systems.",
    href: "/decorative-paint",
    icon: Home, 
  },
  {
    name: "Automotive Refinish",
    description: "OEM-approved high-performance systems.",
    href: "/automotive-paint",
    icon: Paintbrush, // Icon for Automotive (Vehicle/Refinish)
  },
  {
    name: "Industrial & Protective",
    description: "Heavy-duty coatings for asset protection.",
    href: "/industrial-coatings",
    icon: Shield, // Icon for Industrial (Protection/Authority)
  },
];

// Replicated the actual logo list data here for full code
const allBrands = [
  {
    name: "Plascon",
    logoSrc: "https://logo.clearbit.com/kansaipaints.com",
    href: "/decorative-paint/plascon-supplier-alberton",
    alt: "Plascon Paint TradePro Range Stockist",
    vertical: "Decorative Coatings"
  },
  {
    name: "Dulux Trade",
    logoSrc: "https://logo.clearbit.com/akzonobel.com",
    href: "/decorative-paint/dulux-trade-supplier-alberton",
    alt: "Official Dulux Trade Paint Stockist Alberton",
    vertical: "Decorative Coatings"
  },
  {
    name: "R-M Paint Systems",
    logoSrc: "https://logo.clearbit.com/basf.com",
    href: "/automotive-paint/rm-paint-supplier",
    alt: "R-M Automotive Refinish Supplier (BASF)",
    vertical: "Automotive Refinish"
  },
  {
    name: "baslac® Paint Systems",
    logoSrc: "https://logo.clearbit.com/basf.com",
    href: "/automotive-paint/baslac-paint-supplier",
    alt: "baslac Cost-Effective Paint Systems",
    vertical: "Automotive Refinish"
  },
  // Placeholder industrial brands
  {
    name: "Epoxy Flooring Systems",
    logoSrc: "https://logo.clearbit.com/sika.com", 
    href: "/industrial-coatings/epoxy-polyurethane-floor-coatings",
    alt: "Heavy-Duty Epoxy and Polyurethane Floor Coatings",
    vertical: "Industrial & Protective"
  },
  {
    name: "Anti-Corrosion Primers",
    logoSrc: "https://logo.clearbit.com/ppg.com", 
    href: "/industrial-coatings/anti-corrosion-protective-coatings",
    alt: "Zinc-Rich Primers and Protective Coatings",
    vertical: "Industrial & Protective"
  },
];


export function FeaturedBrands() {
  return (
    // Use secondary/10 as background for subtle texture and contrast
    <section className="w-full bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 transition-colors duration-500">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Authorised Technical Partner for Leading Brands
          </h2>
          
          {/* SEO-Enhanced Subheading (Readable) */}
          <p className="mt-4 text-xl leading-8 text-neutral-600 dark:text-neutral-300">
            We are your trusted, technical partner, offering authoritative, confirmed systems for **Industrial Coatings**, **Automotive Refinish**, and **Premium Decorative Paint**. Our expertise is your project&apos;s advantage.
          </p>
        </div>

        {/* 3-Column Vertical Grid - THE VISUAL PUNCH */}
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-12 lg:grid-cols-3">
          {brandVerticals.map((vertical) => {
            const brandsInVertical = allBrands.filter(b => b.vertical === vertical.name);
            return (
            <div 
              key={vertical.name} 
              // BOLD BORDER & SHADOW: Technical Authority (Artisan's Praxis)
              className={cn(
                "group flex flex-col rounded-2xl border-4 border-accent/50 bg-white p-8 shadow-2xl transition-all duration-500",
                "hover:border-primary/80 dark:bg-neutral-800 dark:border-accent/30 dark:hover:border-primary/80"
              )}
            >
              
              {/* Icon, Title & CTA Link */}
              <Link href={vertical.href} className="mb-6 flex flex-col space-y-4">
                
                {/* LARGE ACCENT ICON: New focal point */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                    <vertical.icon className="h-7 w-7 text-white dark:text-black" />
                </div>

                <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-neutral-900 group-hover:text-primary transition-colors dark:text-white dark:group-hover:text-primary">
                        {vertical.name}
                    </h3>
                    <Star className="h-6 w-6 text-primary fill-primary opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
                </div>
              </Link>
              
              {/* Description */}
              <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-6">
                {vertical.description}
              </p>

              {/* LOGO GRID/LIST - Dynamic Micro-Interaction */}
              <div className="flex-grow space-y-3">
                <h4 className="text-sm font-semibold uppercase text-accent dark:text-primary/70">Featured Systems:</h4>
                <div className="space-y-4 pt-1">
                {brandsInVertical.map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    // HIGH CONTRAST HOVER: Background shifts to accent color with softer animation
                    className="group/link flex items-center space-x-4 p-3 rounded-lg bg-white transition-all duration-300 hover:bg-accent/20 dark:hover:bg-accent/40 dark:bg-neutral-800"
                  >
                    {/* LOGO DYNAMIC EFFECT: Grayscale to Color shift */}
                    <div className="relative h-8 w-16 flex-shrink-0">
                      <Image
                        src={brand.logoSrc}
                        alt={brand.alt}
                        fill
                        // The magic: transition-all on opacity and filter
                        className="object-contain opacity-60 grayscale transition-all duration-500 group-hover/link:opacity-100 group-hover/link:grayscale-0 dark:invert"
                      />
                    </div>
                    <span className="text-base font-semibold text-neutral-900 dark:text-white">
                      {brand.name}
                    </span>
                    <span className="ml-auto text-primary text-sm font-medium transition-all duration-300 group-hover/link:text-primary/80">
                        View Page &rarr;
                    </span>
                  </Link>
                ))}
                </div>
              </div>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}