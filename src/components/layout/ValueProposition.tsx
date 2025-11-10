// src/components/layout/ValueProposition.tsx - REPLACEMENT

import { BrainCircuit, Droplets, Truck, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// This data is pulled directly from the research on your B2B "moat"
const features = [
  {
    name: "Expert Technical Advice",
    description: "Our secret weapon. We don't just sell paint; we provide specs. Our team has deep technical knowledge in industrial, automotive, and decorative applications.",
    icon: BrainCircuit,
    href: "/services/on-site-technical-consultation",
  },
  {
    name: "Specialist Colour Matching",
    description: "The problem solver. Bring us a chip, a piece of fabric, or a panel, and our in-house experts will match it perfectly with our advanced spectrophotometer.",
    icon: Droplets,
    href: "/services/expert-paint-colour-matching",
  },
  {
    name: "Trade Delivery Program",
    description: "We're your partner, not just a supplier. We offer a reliable, on-time delivery service for our trade partners, ensuring your project never stops.",
    icon: Truck,
    href: "/services/trade-delivery-program",
  },
];

// New Shining Card Component (Artisan's Praxis: Micro-Interaction)
const ShiningFeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-800">
      
      {/* Shining Effect Overlay - The "Spice" */}
      <div 
        className={cn(
          "absolute inset-0 block w-full h-full transform opacity-0",
          "bg-gradient-to-r from-transparent via-white/50 to-transparent",
          "animate-[shine_4s_infinite_linear] pointer-events-none"
        )}
      />

      <div className="flex flex-col space-y-4">
        {/* Icon & Title */}
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <feature.icon className="h-6 w-6 text-white dark:text-black" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold leading-7 text-neutral-900 dark:text-white">
            {feature.name}
          </h3>
        </div>
        
        {/* Description & CTA */}
        <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
          {feature.description}
        </p>
        <Link
          href={feature.href}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 dark:text-primary"
        >
          Explore Solution 
          <Star className="ml-2 h-4 w-4 fill-primary text-primary" /> {/* Added a subtle visual reward */}
        </Link>
      </div>
    </div>
  );
};


export function ValueProposition() {
  return (
    // CHANGE: bg-neutral-50 (light gray) to dark:bg-neutral-950 (deep black)
    <section className="w-full bg-neutral-50 py-16 md:py-24 dark:bg-neutral-950">
      <div className="container px-4 md:px-6">
        {/* Section Header (Architect's Precision: Clear Hierarchy) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            More Than Just a Paint Store
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            We are a **technical solutions partner** for professional contractors. This is how we help you get the job done right, the first time.
          </p>
        </div>

        {/* 3-Column Shining Feature Grid */}
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {features.map((feature) => (
            <ShiningFeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}