// src/components/layout/Header.tsx - FULL REPLACEMENT (Fixing Apostrophe)

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
} from "@/components/ui/navigation-menu"

// 1. IMPORT THE NEW MOBILE NAVIGATION COMPONENT
import { MobileNav } from "@/components/layout/MobileNav"

// --- Link Data (RETAINED from original Header.tsx) ---
const decorativeLinks: { title: string; href: string; description: string; color: string }[] = [
  {
    title: "Q-Bond & Super Glue",
    href: "/decorative-paint/q-bond-super-glue-solutions",
    description: "Industrial strength bonding systems and super glue solutions.",
    color: "primary",
  },
  {
    title: "PAINTCHEM Trade",
    href: "/decorative-paint/paintchem-trade-supplier",
    description: "Full range of PAINTCHEM systems for commercial use.",
    color: "primary",
  },
  {
    title: "Top Paints & Genkem",
    href: "/decorative-paint/top-paints-genkem-stockist",
    description: "Stockist for Top Paints and Genkem protective coatings.",
    color: "primary",
  },
  {
    title: "Waterproofing & Roofs",
    href: "/decorative-paint/waterproofing-roof-paint",
    description: "Complete solutions for waterproofing and roof coatings (Flash Harry).",
    color: "primary",
  },
]
const automotiveLinks: { title: string; href: string; description: string; color: string }[] = [
  {
    title: "mipa Coating Systems",
    href: "/automotive-paint/mipa-paint-supplier",
    description: "Premium mipa Professional Coating Systems.",
    color: "accent",
  },
  {
    title: "HB BODY Consumables",
    href: "/automotive-paint/hb-body-consumables",
    description: "HB BODY and HB BODY consumables supplier.",
    color: "accent",
  },
  {
    title: "Advanced Paint Matching",
    href: "/automotive-paint/spectrophotometer-paint-matching",
    description: "Our high-tech spectrophotometer service for a perfect blend.",
    
    color: "accent",
  },
  {
    title: "Bodyshop Consumables (3M, Klingspor)",
    href: "/automotive-paint/bodyshop-consumables-abrasives-fillers",
    description: "Full range of professional abrasives, fillers, and compounds.",
    color: "accent",
  },
]
const industrialLinks: { title: string; href: string; description: string; color: string }[] = [
  {
    title: "Heavy-Duty Floor Coatings",
    href: "/industrial-coatings/epoxy-polyurethane-floor-coatings",
    description: "Epoxy and Polyurethane systems for factory floors.",
    color: "secondary",
  },
  {
    title: "Anti-Corrosion & Steel",
    href: "/industrial-coatings/anti-corrosion-protective-coatings",
    description: "Solutions for asset protection in harsh environments (SHIELD).",
    color: "secondary",
  },
  {
    title: "Mining & Manufacturing",
    href: "/industrial-coatings/mining-manufacturing-solutions",
    description: "Specialized DTM and Zinc-Rich primer solutions.",
   
    color: "secondary",
  },
  {
    title: "Industrial Case Studies",
    href: "/industrial-coatings/case-studies",
    description: "See our proven solutions for local industry.",
    color: "secondary",
  },
]
const serviceLinks: { title: string; href: string; description: string; color: string }[] = [
  {
    title: "Expert Colour Matching",
    href: "/services/expert-paint-colour-matching",
    description: "Match any sample, from a paint chip to a fabric swatch.",
    color: "primary",
  },
  {
    title: "On-Site Technical Consultation",
    href: "/services/on-site-technical-consultation",
    description: "We come to your site to provide expert specifications.",
    color: "primary",
  },
  {
    title: "Trade Delivery Program",
    href: "/services/trade-delivery-program",
    description: "Prompt, reliable delivery for our B2B trade partners.",
    color: "primary",
  },
]
const locationLinks: { title: string; href: string; description: string; color: string }[] = [
  {
    title: "Alberton Trade Centre",
    href: "/contact-us/alberton-north",
    description: "Your local expert hub for Decorative & Auto Paint. Get expert colour matching here.",
    color: "accent",
  },
  {
    title: "Wadeville Industrial Hub",
    href: "/contact-us/wadeville",
    description: "Our B2B hub for Heavy-Duty Industrial Coatings and bulk contractor supplies.",
    color: "accent",
  },
]
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

        {/* 2. Main Navigation (Center) - DESKTOP ONLY */}
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
                        colorClass={item.color} // Pass the color
          
   
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
                        colorClass={item.color} // Pass the color
  
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
                      
 
                        colorClass={item.color} // Pass the color
                  
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
                 
                       
                        colorClass={item.color} // Pass the color
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
                        colorClass={item.color} // Pass the color
 
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

        {/* 3. Right-Side B2B Actions (Far Right) - DESKTOP ONLY */}
        <div className="flex flex-shrink-0 items-center justify-end space-x-4 md:flex">
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
  
       
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden md:inline-flex"
          >
            <Link href="/trade-partner-program">Contractor&apos;s Hub</Link>
          </Button>
          
          {/* 4. MOBILE HAMBURGER MENU (MOBILE ONLY) */}
          <div className="md:hidden">
              <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

// Helper component for fly-out menu (RETAINED from original Header.tsx)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {colorClass?: string} // ADDED colorClass prop
>(({ className, title, children, colorClass = 'primary', ...props }, ref) => {

  // Dynamically map colorClass to Tailwind classes
  const hoverClass = colorClass === 'primary' ?
'hover:text-primary' : colorClass === 'accent' ?
 'hover:text-accent' : 'hover:text-secondary-foreground';
const borderClass = colorClass === 'primary' ?
'border-primary/50' : colorClass === 'accent' ? 'border-accent/50' : 'border-secondary/50';
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "focus:bg-accent focus:text-accent-foreground",
            "hover:bg-accent/10 dark:hover:bg-neutral-900", // Base hover for entire card
       
 
            className
          )}
          {...props}
        >
          {/* Title - Apply Dynamic Color and Border */}
          <div className={cn(
            "text-sm font-medium leading-none transition-colors group-hover:underline",
      
         
            `border-l-4 pl-2 ${borderClass} dark:text-white`, // Add Vertical Color Bar
  
            hoverClass // Apply Text Hover Color
          )}>
            {title}
          </div>
          {/* Description */}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground pl-3">
        
   
            {children}
          </p>
    
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"