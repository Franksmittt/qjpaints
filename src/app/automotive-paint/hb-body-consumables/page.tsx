// src/app/automotive-paint/hb-body-consumables/page.tsx - FULL REPLACEMENT (Link Fix)

import Image from "next/image";
import { MoveRight, Package, HardHat, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Targeting the high-volume consumables market
  title: "HB BODY Consumables Supplier Alberton | Fillers, Primers, and Polishes",
  description: "Official supplier of HB BODY fillers, primers, and clearcoats. We stock a full range of automotive refinish consumables, including Farécla compounds and PREPSOL degreasers.",
};

// Features focused on the practical needs of a busy bodyshop
const consumablesFocus = [
  {
    icon: Package,
    title: "All-in-One Supply Chain",
    description: "Source all necessary consumables—from HB BODY fillers to 3M abrasives—from a single supplier, reducing logistics time and cost.",
  },
  {
    icon: HardHat,
    title: "Professional-Grade Fillers & Putties",
    description: "High-quality, easy-to-sand HB BODY fillers and putties that guarantee flawless surface repairs and minimize labor time.",
  },
  {
    icon: Layers,
    title: "Integrated Refinish Solutions",
    description: "Consumables selected to integrate seamlessly with the mipa paint system, ensuring chemical compatibility from bare metal to final clearcoat.",
  },
];

export default function HbBodyConsumablesPage() {
  return (
    <main>
      
      {/* Hero Section: Consumables Focus (Problem-Solution Positioning) */}
      <section className="bg-neutral-900 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">Surface Prep & Finishing Essentials</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                Official HB BODY Consumables Supplier
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg break-words">
                **HB BODY** provides the crucial primers, fillers, and polishes needed for professional automotive refinishing. We stock the high-volume consumables that keep your shop profitable.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  <Link href="/automotive-paint/mipa-paint-supplier">Explore mipa Paint Systems</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white whitespace-nowrap">
                   <Link href="/services/trade-delivery-program">Priority Trade Delivery →</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/hb-body-fillers-polishes.png" // Placeholder image for HB BODY products
                 alt="Assortment of HB BODY fillers, putties, and clearcoats"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
           </div>
        </div>
      </section>

      {/* Consumables Advantage Grid: Focus on Workflow Efficiency */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The QJ Consumables Advantage (HB BODY & More)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consumablesFocus.map((item) => (
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
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Need 3M Abrasives or Farécla Polishing Compounds?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            We stock the full range of preparation, cutting, and polishing accessories.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            {/* UPDATED LINK */}
            <Link href="/consumables/automotive-bodyshop">
              View All Bodyshop Consumables <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}