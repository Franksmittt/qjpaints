// src/components/layout/MobileNav.tsx - FULL REPLACEMENT (Fixing Apostrophe)

"use client";

import Link from "next/link";
import { Menu, X, Phone, Briefcase, ChevronRight } from "lucide-react";
import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

// --- Nav Link Data (Retained) ---

const decorativeLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "Q-Bond & Super Glue", href: "/decorative-paint/q-bond-super-glue-solutions", description: "Industrial strength bonding systems and super glue solutions.", color: "primary" },
  { title: "PAINTCHEM Trade", href: "/decorative-paint/paintchem-trade-supplier", description: "Full range of PAINTCHEM systems for commercial use.", color: "primary" },
  { title: "Top Paints & Genkem", href: "/decorative-paint/top-paints-genkem-stockist", description: "Stockist for Top Paints and Genkem protective coatings.", color: "primary" },
  { title: "Waterproofing & Roofs", href: "/decorative-paint/waterproofing-roof-paint", description: "Complete solutions for waterproofing and roof coatings (Flash Harry).", color: "primary" },
]
const automotiveLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "mipa Coating Systems", href: "/automotive-paint/mipa-paint-supplier", description: "Premium mipa Professional Coating Systems.", color: "accent" },
  { title: "HB BODY Consumables", href: "/automotive-paint/hb-body-consumables", description: "HB BODY and HB BODY consumables supplier.", color: "accent" },
  { title: "Advanced Paint Matching", href: "/automotive-paint/spectrophotometer-paint-matching", description: "Our high-tech spectrophotometer service for a perfect blend.", color: "accent" },
  { title: "Bodyshop Consumables (3M, Klingspor)", href: "/automotive-paint/bodyshop-consumables-abrasives-fillers", description: "Full range of professional abrasives, fillers, and compounds.", color: "accent" },
]
const industrialLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "Heavy-Duty Floor Coatings", href: "/industrial-coatings/epoxy-polyurethane-floor-coatings", description: "Epoxy and Polyurethane systems for factory floors.", color: "secondary" },
  { title: "Anti-Corrosion & Steel", href: "/industrial-coatings/anti-corrosion-protective-coatings", description: "Solutions for asset protection in harsh environments (SHIELD).", color: "secondary" },
  { title: "Mining & Manufacturing", href: "/industrial-coatings/mining-manufacturing-solutions", description: "Specialized DTM and Zinc-Rich primer solutions.", color: "secondary" },
  { title: "Industrial Case Studies", href: "/industrial-coatings/case-studies", description: "See our proven solutions for local industry.", color: "secondary" },
]
const serviceLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "Expert Colour Matching", href: "/services/expert-paint-colour-matching", description: "Match any sample, from a paint chip to a fabric swatch.", color: "primary" },
  { title: "On-Site Technical Consultation", href: "/services/on-site-technical-consultation", description: "We come to your site to provide expert specifications.", color: "primary" },
  { title: "Trade Delivery Program", href: "/services/trade-delivery-program", description: "Prompt, reliable delivery for our B2B trade partners.", color: "primary" },
]
const locationLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "Alberton Trade Centre", href: "/contact-us/alberton-north", description: "Your local expert hub for Decorative & Auto Paint. Get expert colour matching here.", color: "accent" },
  { title: "Wadeville Industrial Hub", href: "/contact-us/wadeville", description: "Our B2B hub for Heavy-Duty Industrial Coatings and bulk contractor supplies.", color: "accent" },
]
// --- End of Nav Link Data ---

// Helper component for Sub-Menu Items (Retained)
const SubMenu = ({ title, links }: { title: string, links: typeof decorativeLinks }) => (
    <DropdownMenuSub>
        <DropdownMenuSubTrigger className="flex justify-between items-center pr-2 py-3">
            {title}
            <ChevronRight className="h-4 w-4" />
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-full">
            {links.map((link) => (
                <DropdownMenuItem key={link.title} asChild>
                    <Link href={link.href} className="text-sm font-medium py-3">
                        {link.title}
                    </Link>
                </DropdownMenuItem>
            ))}
        </DropdownMenuSubContent>
    </DropdownMenuSub>
)


export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    {/* Primary Call to Action on the line with the hamburger */}
                    <div className="flex items-center space-x-2">
                        {/* Call Button (visible next to hamburger) */}
                        <Button 
                            asChild 
                            size="sm" 
                            className="bg-accent text-white hover:bg-accent/80 flex items-center space-x-1"
                        >
                            <a href="tel:010-216-9131">
                                <Phone className="h-4 w-4" />
                                <span className="hidden sm:inline">Call Sales</span>
                            </a>
                        </Button>
                        {/* Hamburger Trigger */}
                        <Button variant="ghost" size="icon" className="text-white hover:bg-neutral-800">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle mobile menu</span>
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                
                {/* Mobile Menu Content (Custom styling for full-width drop-down) */}
                <DropdownMenuContent 
                    align="end" 
                    className={cn(
                        "w-[calc(100vw-1rem)] max-w-full mt-2 mr-2 md:hidden",
                        "bg-neutral-900 text-white border-neutral-800 p-2 overflow-y-auto max-h-[80vh] flex flex-col" // Added flex-col
                    )}
                >
                    {/* Main Navigation Links (Nested) - Scrolls the whole thing */}
                    <div className="flex-1 space-y-1">
                        <DropdownMenuSeparator className="bg-neutral-800 my-2" />
                        
                        <SubMenu title="Decorative Paint" links={decorativeLinks} />
                        <SubMenu title="Automotive Refinish" links={automotiveLinks} />
                        <SubMenu title="Industrial Coatings" links={industrialLinks} />
                        <SubMenu title="Our Services" links={serviceLinks} />
                        <SubMenu title="Locations" links={locationLinks} />
                        
                        <DropdownMenuSeparator className="bg-neutral-800" />
                        <DropdownMenuItem asChild>
                            <Link href="/about-us" className="text-sm font-medium py-3" onClick={handleLinkClick}>
                                Our Story
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/blog" className="text-sm font-medium py-3" onClick={handleLinkClick}>
                                Expert Resources
                            </Link>
                        </DropdownMenuItem>
                         <DropdownMenuSeparator className="bg-neutral-800" />
                    </div>

                    {/* Bottom: Contractor's Hub CTA (Moved to bottom) */}
                    <div className="pt-4 pb-2 w-full mt-auto">
                         <Button 
                            asChild 
                            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full" 
                            size="lg" 
                            onClick={handleLinkClick}
                        >
                            {/* FIX: Escaped apostrophe in "Contractor's" */}
                            <Link href="/trade-partner-program">
                                <Briefcase className="h-5 w-5 mr-2" /> Contractor&apos;s Hub
                            </Link>
                        </Button>
                    </div>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}