// src/app/services/page.tsx - NEW FILE

import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, Droplets, ClipboardCheck, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "QJ Technical Services Hub | Colour Matching, Consultation, Delivery",
  description: "The core technical services that separate QJ from retailers. Expert paint colour matching, on-site industrial consultation, and our reliable Trade Delivery Program.",
};

const serviceLinks = [
  {
    title: "Expert Paint Colour Matching",
    href: "/services/expert-paint-colour-matching",
    description: "Guarantee a perfect colour match for decorative, auto, or industrial paint using our digital spectrophotometer.",
    icon: Droplets,
  },
  {
    title: "On-Site Technical Consultation",
    href: "/services/on-site-technical-consultation",
    description: "Engineers assess your industrial site (e.g., Wadeville) to provide certified specifications for protective coatings.",
    icon: ClipboardCheck,
  },
  {
    title: "Trade Delivery Program",
    href: "/services/trade-delivery-program",
    description: "Priority, on-site delivery for trade partners across Alberton and JHB South, ensuring your labor crew never stops working.",
    icon: Truck,
  },
];

export default function ServicesIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Technical Difference (Leveraging USP) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl text-center">
          <h1 className="text-4xl font-bold md:text-6xl text-primary">
            Our Technical Services Hub
          </h1>
          <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto">
            We are more than just a paint supplier. These **productized services** are designed to eliminate guesswork, reduce rework, and save professional contractors time and money.
          </p>
        </div>
      </section>

      {/* Grid of Key Sub-Pages */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The QJ Technical Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceLinks.map((item) => (
              <Card key={item.title} className="flex flex-col h-full hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-accent fill-accent/10 mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-primary hover:text-primary/80">
                    <Link href={item.href}>
                        Explore Service <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA: Physical Location */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Book Your Service In-Person</h2>
          <p className="mt-2 text-xl font-medium">
            Colour matching and service scheduling are managed at our Alberton Trade Centre.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/contact-us/alberton-north">
              Find Our Location <MapPin className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}