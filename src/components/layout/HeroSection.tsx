// src/components/layout/HeroSection.tsx - FULL REPLACEMENT (Local Image Anchor)

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Star } from "lucide-react"

export function HeroSection() {
  // Header (h-14) + TopBar (h-10) = 6rem total height to account for
  return (
    <section className="w-full bg-neutral-900 text-white min-h-[calc(100vh-6rem)] flex items-center">
      <div className="container px-4 md:px-6">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          
          {/* 1. Left Column: Text & CTAs */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Expert Partner in Paint.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-neutral-300">
              From high-performance industrial coatings to flawless automotive
              finishes and premium decorative paints—we are your complete
              technical supplier.
            </p> 

            {/* Google Review Trust Signal (Storyteller's Heart) */}
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="text-md font-medium text-white">
                4,824 Google Reviews
              </span>
            </div>
            
            {/* CTA Buttons (Artisan's Praxis: Focus) */}
            <div className="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              
              {/* PRIMARY CTA: Get Directions (Gold/Yellow) */}
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link
                  // Updated URL to canonical location data
                  href="http://googleusercontent.com/maps.google.com/3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Link>
              </Button>
              
              {/* SECONDARY CTA: Call Us (The Fixed Contrast Button) */}
              <Button
                asChild
                size="lg"
                className="
                  bg-white text-black border-2 border-white 
                  hover:bg-accent hover:text-white hover:border-accent 
                  transition-colors duration-300
                "
              >
                <Link href="tel:010-216-9131">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us: 010-216-9131
                </Link>
              </Button>
            </div>
          </div>

          {/* 2. Right Column: IMAGE UPDATE (Using your local store-front image) */}
          <div className="flex items-center justify-center">
            <Image
              // === IMAGE PATH UPDATED HERE ===
              src="/images/store-front.png" 
              alt="QJ Paint World Alberton Store Front and Trade Counter"
              width={800}
              height={600}
              className="rounded-lg object-cover shadow-2xl aspect-[4/3] w-full" // Added w-full for better responsiveness
              priority // High priority since it's the hero image
            />
          </div>

        </div>
      </div>
    </section>
  )
}