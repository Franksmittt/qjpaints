// src/app/contact-us/wadeville/page.tsx
import Image from "next/image";
import { MapPin, Phone, Clock, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Wadeville Industrial Hub | B2B Bulk Coatings Supplier",
  description: "QJ Industrial's Wadeville Hub is dedicated to heavy-duty, bulk industrial coatings. Anti-corrosion, epoxy flooring, and on-site technical consultation for Johannesburg B2B.",
};

export default function WadevilleHubPage() {
  return (
    <main>
      
      {/* Hero Section: B2B Industrial Focus (Architect's Precision) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-accent">QJ Industrial B2B Expansion Hub</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Wadeville Industrial Hub
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              This location is our warehouse and B2B dispatch centre, strategically placed in Crocker Industrial Park to serve the heavy manufacturing and mining sectors of Johannesburg South.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/industrial-coatings/anti-corrosion-protective-coatings">Explore Anti-Corrosion</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
                <Link href="tel:010-216-9131">Call the Hub Directly</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/wadeville-warehouse.png" // Placeholder image for industrial hub
              alt="Industrial warehouse loading bay with stacked paint drums"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Location Details and Map */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container grid md:grid-cols-2 gap-12">
          
          {/* Map Location */}
          <div className="relative h-80 w-full md:h-full min-h-[300px]">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.1959569965675!2d28.12920277462924!3d-26.255302866055633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9510110859e1e7%3A0x6b9ae21cd9574093!2sQj%20Paint%20World!5e0!3m2!1sen!2sza!4v1762189616593!5m2!1sen!2sza" // Placeholder Map Link
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wadeville Industrial Hub Map"
              ></iframe>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Wadeville Hub Details (B2B Only)</h2>
            <div className="space-y-4 text-lg">
                <p className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>**Address:** Unit 33 Crocker Industrial Park, 7 Crocker Road, Wadeville, 1422</span>
                </p>
                <p className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>**Phone:** 010 216 9131 (Direct Line)</span>
                </p>
                
                <p className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>**Hours:** Mon - Fri: 7:00 am – 4:30 pm (Industrial Hours)</span>
                </p>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Key Services Managed from this Hub:</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-400">
                  <li>Bulk Order Dispatch & Trade Delivery</li>
                  <li>Technical Specification Documentation</li>
                  <li>On-Site Consultation Scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA to Services */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Need a Specification or Consultation?</h2>
          <p className="mt-2 text-xl font-medium text-neutral-600 dark:text-neutral-300">
            Let our engineers help you choose the right system.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-white hover:bg-accent/90">
            <Link href="/services/on-site-technical-consultation">Book Technical Consult <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}