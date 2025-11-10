// src/components/layout/BrandSlider.tsx - FULL REPLACEMENT (Updated with New Approved Brands)
"use client"

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Brand Data (Updated to reflect Q-Bond, HB BODY, PAINTCHEM, mipa, SHIELD) ---
const brands = [
    { name: "PAINTCHEM", logoSrc: "https://logo.clearbit.com/paintchem.co.za", href: "/decorative-paint/paintchem-trade-supplier", alt: "PAINTCHEM Trade" },
    { name: "HB BODY", logoSrc: "https://logo.clearbit.com/hbbody.com", href: "/automotive-paint/hb-body-consumables", alt: "HB BODY Consumables" },
    { name: "mipa Coatings", logoSrc: "https://logo.clearbit.com/mipa.com", href: "/automotive-paint/mipa-paint-supplier", alt: "mipa Coating Systems" },
    { name: "SHIELD", logoSrc: "https://logo.clearbit.com/shieldcoatings.com", href: "/industrial-coatings/anti-corrosion-protective-coatings", alt: "SHIELD Protective Coatings" },
    { name: "Q-BOND", logoSrc: "https://logo.clearbit.com/qbond.co.za", href: "/decorative-paint/q-bond-super-glue-solutions", alt: "Q-Bond Industrial Adhesives" },
    { name: "3M", logoSrc: "https://logo.clearbit.com/3m.com", href: "/automotive-paint/bodyshop-consumables-abrasives-fillers", alt: "3M Abrasives" },
    { name: "KLINGSPOR", logoSrc: "https://logo.clearbit.com/klingspor.de", href: "/automotive-paint/bodyshop-consumables-abrasives-fillers", alt: "KLINGSPOR Abrasives" },
    { name: "Flash Harry", logoSrc: "https://logo.clearbit.com/flashharry.co.za", href: "/decorative-paint/waterproofing-roof-paint", alt: "Flash Harry Waterproofing" },
];
// Repeat the brands list to ensure continuous scrolling
const allBrands = [...brands, ...brands, ...brands];

export function BrandSlider() {
    return (
        // The container needs overflow-hidden to hide the replicated logos outside the viewport
        // ADDED py-4 for clear vertical separation
        <div className="w-full bg-white py-4 border-t border-b border-primary/50 relative overflow-hidden">
            
            {/* The actual scrolling marquee wrapper */}
            
            <div className={cn(
                "flex space-x-12",
                // Tailwind utility to force animation using a custom duration (tailwind.config.ts)
                "animate-[scroll-fast_60s_linear_infinite]"
            )} style={{
                // Custom CSS keyframe name defined in tailwind.config.ts 
                animationName: 'scroll-fast', 
                whiteSpace: 'nowrap'
            }}>
                {allBrands.map((brand, index) => (
                    <Link
                 
                        key={index} // Use index as key since the content is duplicated
                        href={brand.href}
                        className="inline-flex items-center space-x-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-accent group/brand"
                    >
       
                        <div className="relative h-6 w-16 opacity-60 grayscale transition-all duration-300 group-hover/brand:opacity-100 group-hover/brand:grayscale-0">
                            <Image
                                src={brand.logoSrc}
              
                                alt={brand.alt}
                                fill
                                className="object-contain"
                  
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Fades on the edges to imply the scrolling continues outside the frame */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />
        </div>
    );
}