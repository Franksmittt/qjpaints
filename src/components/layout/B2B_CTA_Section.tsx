// src/components/layout/B2B_CTA_Section.tsx - FULL REPLACEMENT (Escaping final entity)

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function B2B_CTA_Section() {
  return (
    // We use the dark background to contrast the white section above
    <section className="w-full bg-neutral-900 text-white">
      <div className="container grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        
        {/* 1. Left Column: Map */}
        <div className="relative h-80 w-full md:h-full min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.1959569965675!2d28.12920277462924!3d-26.255302866055633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9510110859e1e7%3A0x6b9ae21cd9574093!2sQj%20Paint%20World!5e0!3m2!1sen!2sza!4v1762189616593!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="QJ Paint World Location Map"
          ></iframe>
        </div>

        {/* 2. Right Column: Text & CTA */}
        <div className="flex flex-col justify-center p-8 py-12 md:p-12 lg:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Become a QJ Trade Partner
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-300">
            {/* FIX APPLIED: Escaped the apostrophe in Contractor's Hub */}
            Join our Contractor&apos;s Hub to get exclusive trade pricing,
            priority on-site technical support, specialist colour matching, and
            our reliable delivery service to your site in Alberton and
            surrounds.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/trade-partner-program">
                Apply for Trade Account 
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}