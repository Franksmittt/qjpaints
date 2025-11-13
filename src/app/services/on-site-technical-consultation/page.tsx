// src/app/services/on-site-technical-consultation/page.tsx - FULL REPLACEMENT (Wadeville Removed)

import Image from "next/image";
// FIX: 'MapPin' removed from this import
import { HardHat, ClipboardCheck, Truck, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: Unused Card components removed
import { Card } from "@/components/ui/card";
export const metadata = {
  title: "On-Site Technical Consultation Service | Industrial & Commercial Coatings",
  description: "Book an on-site consultation with our expert engineers for precise technical specification of epoxy, anti-corrosion, and protective coating systems in Johannesburg South.",
};
const consultationSteps = [
  {
    icon: HardHat,
    title: "Step 1: Site Assessment",
    description: "Our engineer visits your site to assess substrate condition, traffic, and chemical exposure.",
  },
  {
    icon: ClipboardCheck,
    title: "Step 2: Specification Report",
    description: "We provide a written, certified specification detailing the exact surface preparation and coating system required for longevity.",
  },
  {
    icon: Truck,
    title: "Step 3: Priority Fulfillment",
    description: "Your order is tagged for priority fulfillment from our Alberton Trade Centre, guaranteeing the correct products are dispatched on time.",
  },
];
export default function TechnicalConsultationPage() {
  return (
    <main>
      
      {/* Hero Section: Expert Solution (Storyteller's Heart) */}
      <section className="bg-accent/90 py-12 sm:py-16 md:py-24 text-white overflow-hidden">
        <div className="container max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full px-4 sm:px-0">
              <span className="text-sm font-semibold uppercase text-primary">High-Value B2B Service</span>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words">
                On-Site Technical Consultation
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white max-w-lg break-words">
                **Stop guessing on industrial specifications.** We send our coating engineers to your facility in Johannesburg South to guarantee your epoxy, polyurethane, or anti-corrosion system will perform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-xl py-7 px-10 whitespace-nowrap">
                  <Link href="/contact-us">Schedule Your Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900 whitespace-nowrap">
                  <Link href="/industrial-coatings/case-studies">View Proof of Expertise →</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-full aspect-square">
              <Image
                src="/images/engineer-consultation.png" // Placeholder image for engineer on site
                alt="Coating engineer in a hardhat performing an inspection on an industrial site"
                fill
                priority
                className="object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process (Artisan's Praxis: Clarity) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How We Guarantee the Right System</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consultationSteps.map((item, index) => (
              <Card key={item.title} className="p-6 text-center border-accent/50 border-2">
                <div className="text-4xl font-extrabold text-primary mb-3">0{index + 1}</div>
                <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA to Location */}
      <section className="py-12 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Schedule Your Engineer Visit Now</h2>
          <p className="mt-2 text-xl font-medium">
            Consultations are managed by our expert team at the Alberton Trade Centre.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/contact-us/alberton-north">Contact Alberton Trade Centre <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}