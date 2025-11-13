// src/components/layout/MobileNav.tsx - FULL REPLACEMENT (Consumables Nav Added)

"use client";

import Link from "next/link";
import { Menu, X, Phone, Briefcase } from "lucide-react";
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
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// --- Nav Link Data (Retained) ---

const decorativeLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "PAINTCHEM Trade", href: "/decorative-paint/paintchem-trade-supplier", description: "Full range of PAINTCHEM systems for commercial use.", color: "primary" },
  { title: "Top Paints & Genkem", href: "/decorative-paint/top-paints-genkem-stockist", description: "Stockist for Top Paints and Genkem protective coatings.", color: "primary" },
  { title: "Waterproofing & Roofs", href: "/decorative-paint/waterproofing-roof-paint", description: "Complete solutions for waterproofing and roof coatings (Flash Harry).", color: "primary" },
]
const automotiveLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "mipa Coating Systems", href: "/automotive-paint/mipa-paint-supplier", description: "Premium mipa Professional Coating Systems.", color: "accent" },
  { title: "HB BODY Consumables", href: "/automotive-paint/hb-body-consumables", description: "HB BODY and HB BODY consumables supplier.", color: "accent" },
  { title: "Advanced Paint Matching", href: "/automotive-paint/spectrophotometer-paint-matching", description: "Our high-tech spectrophotometer service for a perfect blend.", color: "accent" },
]
// NEW CONSUMABLES LINKS
const consumableLinks: { title: string; href: string; description: string; color: string }[] = [
  { title: "General Paint Supplies", href: "/consumables/general-paint-supplies", description: "Abrasives, masking, brushes, rollers, & PPE.", color: "secondary" },
  { title: "Automotive Bodyshop", href: "/consumables/automotive-bodyshop", description: "Fillers, degreasers (PREPSOL), & polishing (Farécla).", color: "secondary" },
  { title: "Industrial & Heavy-Duty", href: "/consumables/industrial-heavy-duty", description: "Rust converters, solvents, & thick-film rollers.", color: "secondary" },
  { title: "Q-Bond Adhesive Kits", href: "/consumables/q-bond-adhesives", description: "Ultra-strong adhesives for structural repairs.", color: "secondary" },
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
// --- End of Nav Link Data ---

// Helper component for Sub-Menu Items (Using Accordion for vertical expansion)
const SubMenu = ({ title, links, value, onLinkClick }: { title: string, links: typeof decorativeLinks, value: string, onLinkClick: () => void }) => (
    <AccordionItem value={value} className="border-none">
        <AccordionTrigger className="text-white hover:no-underline hover:text-white py-3 px-2 data-[state=open]:text-white">
            <span className="text-sm font-medium">{title}</span>
        </AccordionTrigger>
        <AccordionContent className="pb-2 pt-0">
            <div className="space-y-1 pl-4">
                {links.map((link) => (
                    <Link 
                        key={link.title} 
                        href={link.href} 
                        className="block text-sm font-medium py-2 px-2 rounded-sm hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                        onClick={onLinkClick}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </AccordionContent>
    </AccordionItem>
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
                    {/* Main Navigation Links (Using Accordion for vertical expansion) */}
                    <div className="flex-1">
                        <DropdownMenuSeparator className="bg-neutral-800 my-2" />
                        
                        <Accordion type="single" collapsible className="w-full">
                            <SubMenu title="Decorative Paint" links={decorativeLinks} value="decorative" onLinkClick={handleLinkClick} />
                            <SubMenu title="Automotive Refinish" links={automotiveLinks} value="automotive" onLinkClick={handleLinkClick} />
                            <SubMenu title="Industrial Coatings" links={industrialLinks} value="industrial" onLinkClick={handleLinkClick} />
                            <SubMenu title="Consumables & Tools" links={consumableLinks} value="consumables" onLinkClick={handleLinkClick} />
                            <SubMenu title="Our Services" links={serviceLinks} value="services" onLinkClick={handleLinkClick} />
                        </Accordion>
                        
                        <DropdownMenuSeparator className="bg-neutral-800 my-2" />
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