// src/app/automotive-paint/spectrophotometer-paint-matching/page.tsx - FULL REPLACEMENT (New Brands)

import Image from "next/image";
// FIX: 'Sparkles' removed from this import
import { MoveRight, Droplets, Microscope, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
export const metadata = {
  title: "Spectrophotometer Paint Matching Alberton | QJ Paint World",
  // UPDATED: Added approved brands
  description: "Advanced automotive paint colour matching service in Johannesburg. We match to mipa and HB BODY systems, eliminating costly rework. Ideal for professional bodyshops.",
};
const serviceFeatures = [
  {
    icon: Microscope,
    title: "Digital Accuracy",
    description: "Our spectrophotometer reads the exact formula required from the vehicle's actual surface, accounting for fade and batch variance.",
  },
  {
    icon: Droplets,
    title: "Flawless Blends",
    description: "Eliminate visible colour differences (metamerism). Our system ensures the new paint seamlessly integrates with the existing finish (mipa, HB BODY, etc.).",
  },
  {
    icon: AlertTriangle,
    title: "Risk Elimination",
    description: "Stop wasting time and materials on manual tinting and rework. Get the precise colour formula instantly, guaranteed.",
  },
];
export default function AutomotiveMatchingPage() {
  return (
    <main>
      
      {/* Hero Section: Technical Superiority (Innovator's Horizon) */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">High-Tech Colour Science</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Advanced Automotive Paint Matching
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                Stop guessing. Our **spectrophotometer service** is the only risk-free way for professional bodyshops to guarantee a perfect colour blend every time.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/contact-us">Request On-Site Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="#why-it-fails">Why Code Matching Fails →</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/spectrophotometer-hero.png" // Placeholder image for spectrophotometer
                alt="Technician using a spectrophotometer to match automotive paint colour"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid: Science Behind the Service (Artisan's Praxis: Clarity) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Guarantee of Perfect Colour</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature) => (
              <Card key={feature.title} className="hover:border-primary transition-colors duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <feature.icon className="h-8 w-8 text-accent fill-accent/10" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution Section (Problem-First SEO: Storyteller's Heart) */}
      <section id="why-it-fails" className="py-12 sm:py-16 md:py-24 bg-secondary/10 dark:bg-neutral-900 overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white break-words">
                Why Matching by Paint Code Fails (The Risk)
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 break-words">
                The standard industry practice of ordering paint based *only* on the manufacturer&apos;s paint code is a **costly risk**.
                The problem is that every vehicle&apos;s actual colour has shifted due to:
              </p>
              <ul className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300 list-disc list-inside ml-4">
                <li>Environmental fade from UV exposure (sunlight).</li>
                <li>Batch-to-batch variation from the paint factory.</li>
                <li>The manufacturer&apos;s original formula having several official colour *variants*.</li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-accent dark:text-primary break-words">
                Using a spectrophotometer eliminates this risk by reading the current, aged colour.
              </p>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/auto-problem-fade.png" // Placeholder image for fade/rework
                alt="Faded car paint panel showing two slightly different shades"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Value and Partnership */}
      <section className="bg-primary py-12 md:py-16 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Ready for Flawless Refinish Results?</h2>
          <p className="mt-2 text-xl font-medium">
            Contact us today to book your consultation or place a premium paint system order.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/contact-us">Book Matching Service <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}