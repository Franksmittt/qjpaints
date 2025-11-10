// src/app/contact-us/page.tsx - FULL REPLACEMENT (Theme Update)

import { Phone, MapPin, Store, Factory, MoveRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: 'CardDescription' import removed
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contact QJ Paint World | Alberton Trade Centre or Wadeville Industrial Hub",
  description: "Contact us for expert colour matching, industrial specifications, or trade sales. We have two locations: Alberton for retail/trade, and Wadeville for B2B industrial.",
};

const locationCards = [
  {
    icon: Store,
    title: "Alberton Trade Centre",
    link: "/contact-us/alberton-north",
    address: "6 Piet Retief Rd, Alberton North",
    phone: "010 216 9131",
    purpose: "Best for: Retail orders, decorative paint, auto matching, and general trade supplies.",
    hours: "Mon - Fri: 8:00 am – 5:00 pm",
  },
  {
    icon: Factory,
    title: "Wadeville Industrial Hub",
    link: "/contact-us/wadeville",
    address: "Unit 33, Crocker Industrial Park, Wadeville",
    phone: "010 216 9131",
    purpose: "Best for: Industrial coatings specifiers, bulk orders, and scheduling technical consultation.",
    hours: "Mon - Fri: 7:00 am – 4:30 pm (Industrial Hours)",
  },
];

export default function ContactHubPage() {
  return (
    <main>
      
      {/* Hero Section: The Location Router (Architect's Precision) */}
      {/* CHANGE: bg-secondary/10 (light gray) to dark:bg-neutral-950 (deep black) */}
      <section className="bg-secondary/10 py-16 md:py-24 dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            Where Should We Meet?
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            To get the best service, choose the location that matches your project needs. We are here to serve you at both our local trade centre and our industrial hub.
          </p>
        </div>
      </section>

      {/* Location Router Cards */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container grid md:grid-cols-2 gap-10">
          {locationCards.map((loc) => (
            <Card key={loc.title} className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between p-6 bg-accent/10 dark:bg-accent/30">
                <CardTitle className="text-2xl font-bold text-accent">{loc.title}</CardTitle>
                <loc.icon className="h-8 w-8 text-accent" />
              </CardHeader>
              
              <CardContent className="flex-1 p-6 space-y-4">
                <p className="flex items-center space-x-3 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{loc.address}</span>
                </p>
                 <p className="flex items-center space-x-3 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{loc.phone}</span>
                </p>
                <p className="flex items-center space-x-3 text-lg text-neutral-600 dark:text-neutral-400">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Hours: {loc.hours}</span>
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 pt-3 border-t border-neutral-200">
                    {loc.purpose}
                </p>
              </CardContent>

              <CardFooter className="mt-auto p-6 pt-0">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                   <Link href={loc.link}>
                    View Location Details <MoveRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Central CTA */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Have a Quick Question? Call Our Main Line.</h2>
          <p className="mt-2 text-xl font-medium">
            We are ready to assist you immediately.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <a href="tel:010-216-9131">Call Now: 010 216 9131</a>
          </Button>
        </div>
      </section>
      
    </main>
  );
}