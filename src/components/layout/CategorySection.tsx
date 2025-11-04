// src/components/layout/CategorySection.tsx - Fix Unused Variable
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Button } from "@/components/ui/button" // REMOVED UNUSED IMPORT
import { ArrowRight, Paintbrush, Factory, Car } from "lucide-react"
import { cn } from "@/lib/utils"

// Data structure updated to use local image paths
const verticals = [
  {
    title: "Decorative Paint",
    description:
      "Premium interior and exterior systems. Your local official stockist for Plascon, Dulux Trade, and Prominent Paints. Full range, expert color advice.",
    href: "/decorative-paint",
    imageUrl: "/images/decorative.png", 
    imageAlt: "A beautifully painted modern living room wall and decorative tin of paint",
    icon: Paintbrush,
  },
  {
    title: "Automotive Refinish",
    description:
      "High-performance refinish systems for professional bodyshops. We supply superior R-M and baslac paint systems, backed by our spectrophotometer matching service.",
    href: "/automotive-paint",
    imageUrl: "/images/automotive.png", 
    imageAlt: "A car being professionally spray painted in a bodyshop booth",
    icon: Car,
  },
  {
    title: "Industrial Coatings",
    description:
      "Heavy-duty, specified solutions for asset protection. Epoxy floor coatings, anti-corrosion primers, and specialized systems for mining and manufacturing.",
    href: "/industrial-coatings",
    imageUrl: "/images/industrial.png", 
    imageAlt: "A large industrial warehouse with a durable coated floor",
    icon: Factory,
  },
]

export function CategorySection() {
  return (
    // Use the secondary light background for separation and professionalism
    <section className="w-full bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 transition-colors duration-500">
      <div className="container px-4 md:px-6">
        {/* Section Header (Storyteller's Heart: Clarity and Focus) */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            Your Technical Partner Across Three Core Verticals
          </h2>
          <p className="mt-4 text-xl leading-8 text-neutral-600 dark:text-neutral-300">
            We are the only supplier in the region providing expert consultation for decorative, automotive, and heavy-duty industrial projects under one roof.
          </p>
        </div>

        {/* 3-Column Grid with Hover Effects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {verticals.map((vertical) => (
            // The Link component now wraps the entire structure, including the Card.
            <Link
              href={vertical.href}
              key={vertical.title}
              className="group"
              // Adding the Link-as-a-block class to make the whole area clickable
              style={{ display: 'block' }} 
            >
              <Card 
                // Card Border Effect: Hover border and increased shadow
                className={cn(
                  "flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-300 shadow-xl",
                  "hover:border-primary/50 hover:shadow-2xl dark:bg-neutral-800 dark:shadow-none"
                )}
              >
                {/* Card Header with Image */}
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={vertical.imageUrl}
                      alt={vertical.imageAlt}
                      fill
                      // Image Zoom Effect: Subtle movement on hover
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw" // Optimization for Next/Image
                      priority={vertical.title === "Decorative Paint"} // Prioritize loading the main image
                    />
                  </div>
                  {/* Icon Overlay for Clarity */}
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-primary/90 shadow-lg">
                      <vertical.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </CardHeader>
                
                {/* Card Content */}
                <CardContent className="flex-1 p-6">
                  <CardTitle className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                    {vertical.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-600 dark:text-neutral-400 text-base">
                    {vertical.description}
                  </CardDescription>
                </CardContent>
                
                {/* Card Footer with CTA Button */}
                <CardFooter className="p-6 pt-0">
                    <span 
                        // CTA Color: Use primary color with hover effect
                        className="text-primary font-semibold hover:text-primary/80 dark:text-primary inline-flex items-center"
                    >
                      Explore Solutions
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}