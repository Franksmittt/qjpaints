// src/components/layout/FeaturedBrands.tsx - FULL REPLACEMENT (Reverted to 3 Columns & Asterisks Removed)

import Image from "next/image";
import Link from "next/link";
import { Star, Paintbrush, Shield, Home } from "lucide-react"; // Wrench removed
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

const allBrands = [
  // Decorative
  {
    name: "Top Paints",
    logoSrc: "/images/logos/logo-top-paints.png",
    href: "/decorative-paint/top-paints-genkem-stockist",
    alt: "Top Paints Decorative Coatings",
    vertical: "Decorative Coatings"
  },
  {
    name: "Flash Harry",
    logoSrc: "/images/logos/logo-flash-harry.png",
    href: "/decorative-paint/waterproofing-roof-paint",
    alt: "Flash Harry Waterproofing",
    vertical: "Decorative Coatings"
  },
  {
    name: "ILEX",
    logoSrc: "/images/logos/logo-ilex.png",
    href: "/decorative-paint",
    alt: "ILEX Specialty Coatings",
    vertical: "Decorative Coatings"
  },
  // Automotive
  {
    name: "mipa Coating Systems",
    logoSrc: "/images/logos/logo-mipa.png",
    href: "/automotive-paint/mipa-paint-supplier",
    alt: "mipa Professional Automotive Coating Systems",
    vertical: "Automotive Refinish"
  },
  {
    name: "HB BODY Consumables",
    logoSrc: "/images/logos/logo-hb-body.png",
    href: "/automotive-paint/hb-body-consumables",
    alt: "HB BODY and Automotive Consumables",
    vertical: "Automotive Refinish"
  },
  // Industrial
  {
    name: "Amalgamated Paints",
    logoSrc: "/images/logos/logo-amalgamated.png",
    href: "/industrial-coatings",
    alt: "Amalgamated Paints Industrial Coatings",
    vertical: "Industrial & Protective"
  },
  {
    name: "Paintchem",
    logoSrc: "/images/logos/logo-paintchem.png", 
    href: "/industrial-coatings",
    alt: "Paintchem Industrial Coatings",
    vertical: "Industrial & Protective"
  },
  // Consumables brands removed
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
          
          {/* SEO-Enhanced Subheading (Readable & Asterisks Removed) */}
          <p className="mt-4 text-xl leading-8 text-neutral-600 dark:text-neutral-300">
            We are your trusted, technical partner, offering authoritative, confirmed systems for Industrial Coatings, Automotive Refinish (mipa, HB BODY), and Premium Decorative Paint. Our expertise is your project&apos;s advantage.
          </p>
        </div>

   
        {/* 3-Column Vertical Grid */}
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-12 lg:grid-cols-3">
          {brandVerticals.map((vertical) => {
            const brandsInVertical = allBrands.filter(b => b.vertical === vertical.name);
            return (
              <div 
                key={vertical.name} 
                className={cn(
                  "group flex flex-col rounded-2xl border-4 border-accent/50 bg-white p-8 shadow-2xl transition-all duration-500",
                  "hover:border-primary/80 dark:bg-neutral-800 dark:border-accent/30 dark:hover:border-primary/80"
                )}
              >
                
                {/* Icon, Title & CTA Link */}
                <Link href={vertical.href} className="mb-6 flex flex-col space-y-4">
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
          
                {/* LOGO GRID/LIST */}
                <div className="flex-grow space-y-3">
                  <h4 className="text-sm font-semibold uppercase text-accent dark:text-primary/70">Featured Systems:</h4>
                  <div className="space-y-4 pt-1">
                  
                    {brandsInVertical.map((brand) => (
                      <Link
                          key={brand.name}
                          href={brand.href}
                          className="group/link flex items-center space-x-4 p-3 rounded-lg bg-white transition-all duration-300 hover:bg-accent/20 dark:hover:bg-accent/40 dark:bg-neutral-800"
                      >
                        <div className="relative h-8 w-16 flex-shrink-0">
                          <Image
                            src={brand.logoSrc}
                            alt={brand.alt}
                            fill
                            className="object-contain opacity-60 grayscale transition-all duration-500 group-hover/link:opacity-100 group-hover/link:grayscale-0 dark:invert"
                          />
                        </div>
                        <span className="text-base font-semibold text-neutral-900 dark:text-white">
                          {brand.name}
                        </span>
                        <span className="ml-auto text-primary text-sm font-medium transition-all duration-300 group-hover/link:text-primary/80">
                          View Page →
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