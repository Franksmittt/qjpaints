// src/app/consumables/q-bond-adhesives/page.tsx - FULL REPLACEMENT (Apostrophe Fix)

import Image from "next/image";
import { MoveRight, HardHat, LinkIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Targeting niche problem-solving searches
  title: "Q-Bond & Super Glue Solutions Alberton | High-Strength Adhesives & Fillers",
  description: "Official stockist of Q-Bond ultra-strong adhesive and filling powder repair kits. We supply industrial-grade cyanoacrylate (super glue) for contractors and complex repairs.",
};

// Features focused on problem-solving applications
const adhesiveFocus = [
  {
    icon: LinkIcon,
    title: "Ultra-Strong Bonding",
    description: "Q-Bond provides an exceptionally strong bond on plastics, metals, and rubber, often stronger than the material being repaired.",
  },
  {
    icon: HardHat,
    title: "Filling & Reinforcement",
    description: "Use the filling powders (black/grey) with the adhesive to quickly rebuild broken parts, filling cracks and holes in minutes.",
  },
  {
    icon: Settings,
    title: "Versatile Repair Kits",
    description: "Essential for automotive bodyshops and general contractors for quick, reliable, and structural repairs without welding or complex machinery.",
  },
];

export default function QBondSuperGluePage() {
  return (
    <main>
      
      {/* Hero Section: Q-Bond Focus (Problem-Solution Positioning) */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">Specialized Repair & Bonding Systems</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Q-Bond & High-Strength Adhesive Solutions
              </h1>
              {/* APOSTROPHE FIX HERE */}
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                **Q-Bond** is more than just super glue—it&apos;s a two-part repair system designed for permanent, structural fixes. We stock the full range of Q-Bond and industrial-grade cyanoacrylate adhesives.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/contact-us/alberton-north">See Q-Bond Demos In-Store</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                  <Link href="/consumables/automotive-bodyshop">View Bodyshop Consumables →</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/q-bond-repair-kit.png" // Placeholder image for Q-Bond kit
                alt="Q-Bond adhesive bottle and filling powders used to repair a broken part"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Q-Bond Advantage Grid: Focus on Structural Integrity */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Q-Bond Structural Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {adhesiveFocus.map((item) => (
              <Card key={item.title} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <item.icon className="h-6 w-6 text-primary" /> <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Related Consumables */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Need Other Industrial or Automotive Consumables?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            Q-Bond is part of our complete consumables hub.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            <Link href="/consumables">
              View All Consumables <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}