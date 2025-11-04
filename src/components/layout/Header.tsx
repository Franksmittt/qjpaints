// src/components/layout/Header.tsx - Fix Unused Variable and Unescaped Entity
"use client"

import * as React from "react"
import Link from "next/link"
import { Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle, // REMOVED UNUSED IMPORT
} from "@/components/ui/navigation-menu"

// --- Link Data from Strategic Blueprint ---
// Decorative Coatings Vertical
const decorativeLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Plascon Supplier",
    href: "/decorative-paint/plascon-supplier-alberton",
    description: "Official Plascon stockist with the full TradePro range.",
  },
  {
    title: "Dulux Trade Supplier",
    href: "/decorative-paint/dulux-trade-supplier-alberton",
    description: "Expert advice on Dulux Trade vs. retail paints.",
  },
  {
    title: "Prominent Paints",
    href: "/decorative-paint/prominent-paints-alberton",
    description: "Your local expert partner for Prominent's Select Range.",
  },
  {
    title: "Waterproofing & Roofs",
    href: "/decorative-paint/waterproofing-roof-paint",
    description: "Complete solutions for waterproofing and roof coatings.",
  },
]
// Automotive Refinish Vertical
const automotiveLinks: { title: string; href: string; description: string }[] = [
  {
    title: "R-M Paint Systems",
    href: "/automotive-paint/rm-paint-supplier",
    description: "Premium, OEM-approved refinish systems for high productivity.",
  },
  {
    title: "baslac® Paint Systems",
    href: "/automotive-paint/baslac-paint-supplier",
    description: "BASF quality for all repair jobs at a cost-effective price.",
  },
  {
    title: "Advanced Paint Matching",
    href: "/automotive-paint/spectrophotometer-paint-matching",
    description: "Our high-tech spectrophotometer service for a perfect blend.",
  },
  {
    title: "Bodyshop Consumables",
    href: "/automotive-paint/bodyshop-consumables-abrasives-fillers",
    description: "Abrasives, fillers, polishing compounds, and more.",
  },
]
// Industrial Coatings Vertical
const industrialLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Heavy-Duty Floor Coatings",
    href: "/industrial-coatings/epoxy-polyurethane-floor-coatings",
    description: "Epoxy and Polyurethane systems for factory floors.",
  },
  {
    title: "Anti-Corrosion & Steel",
    href: "/industrial-coatings/anti-corrosion-protective-coatings",
    description: "Solutions for asset protection in harsh environments.",
  },
  {
    title: "Mining & Manufacturing",
    href: "/industrial-coatings/mining-manufacturing-solutions",
    description: "Specialized DTM and Zinc-Rich primer solutions.",
  },
  {
    title: "Industrial Case Studies",
    href: "/industrial-coatings/case-studies",
    description: "See our proven solutions for local industry.",
  },
]
// Services & Expertise
const serviceLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Expert Colour Matching",
    href: "/services/expert-paint-colour-matching",
    description: "Match any sample, from a paint chip to a fabric swatch.",
  },
  {
    title: "On-Site Technical Consultation",
    href: "/services/on-site-technical-consultation",
    description: "We come to your site to provide expert specifications.",
  },
  {
    title: "Trade Delivery Program",
    href: "/services/trade-delivery-program",
    description: "Prompt, reliable delivery for our B2B trade partners.",
  },
]
// --- NEW: Locations Data for 2-Location Strategy (NAP Resolution) ---
const locationLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Alberton Trade Centre",
    href: "/contact-us/alberton-north",
    description: "Your local expert hub for Decorative & Auto Paint. Get expert colour matching here.",
  },
  {
    title: "Wadeville Industrial Hub",
    href: "/contact-us/wadeville",
    description: "Our B2B hub for Heavy-Duty Industrial Coatings and bulk contractor supplies.",
  },
];
// --- End of Data ---


export function Header() 
{
  return (
    // Use deep black for the header, making the primary-colored text and buttons pop
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black text-white">
      <div className="container relative flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* 1. Logo (Far Left) - Use primary color for brand pop */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-primary sm:inline-block">
              QJ Paint World
            </span>
          </Link>
        </div>

        {/* 2. Main Navigation (Center) - Highlighting technical verticals */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* Decorative Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black hover:bg-neutral-900">
                  Decorative
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card text-card-foreground border border-border">
                    {decorativeLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-accent/10 dark:hover:bg-neutral-900"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Automotive Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black hover:bg-neutral-900">
                  Automotive
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card text-card-foreground border border-border">
                    {automotiveLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-accent/10 dark:hover:bg-neutral-900"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industrial Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black hover:bg-neutral-900">
                  Industrial
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card text-card-foreground border border-border">
                    {industrialLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-accent/10 dark:hover:bg-neutral-900"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Services Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black hover:bg-neutral-900">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] bg-card text-card-foreground border border-border">
                    {serviceLinks.map((item) => (
                      
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-accent/10 dark:hover:bg-neutral-900"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* NEW: Locations Link (Architectural Clarity) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black hover:bg-neutral-900">
                  Locations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] bg-card text-card-foreground border border-border">
                    {locationLinks.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-accent/10 dark:hover:bg-neutral-900"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. Right-Side B2B Actions (Far Right) - Use primary color for CTA */}
        <div className="flex flex-shrink-0 items-center justify-end space-x-4">
          <Link
            href="tel:010-216-9131"
            className="hidden items-center space-x-2 text-sm font-medium hover:text-primary lg:flex"
          >
            <Phone className="h-4 w-4" />
            <span>010-216-9131</span>
          </Link>

          <Button
            asChild
            // Use primary color for maximum visibility and impact
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/trade-partner-program">Contractor&apos;s Hub</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Helper component for fly-out menu (no change)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* Using muted foreground for secondary text in flyout menu */}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"