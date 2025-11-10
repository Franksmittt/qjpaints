// src/app/contact-us/alberton-north/page.tsx
import Image from "next/image";
import { Store, MapPin, Phone, Clock, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
export const metadata = {
  title: "Alberton Trade Centre | QJ Paint World: Address, Hours & Contact",
  description: "The primary QJ Paint World location for all retail, decorative, and automotive needs. Get expert colour matching, 6 Piet Retief Rd, Alberton North.",
};
const storeServices = [
  { icon: Store, title: "Retail & Trade Counter", description: "Dedicated counter service for homeowners and professional trade partners, with large stock reserves."
},
  { icon: Star, title: "Expert Colour Matching", description: "Our in-house lab and spectrophotometer service guarantee a perfect colour match from any sample."
},
  { icon: Truck, title: "Trade Delivery Service", description: "Fast, reliable priority delivery service for our trade customers across Alberton."
}, 
];

export default function AlbertonHubPage() {
  return (
    <main>
      
      {/* Hero Section: Local Trade Focus (Storyteller's Heart) */}
      <section className="bg-white py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-primary">Your Local Paint Headquarters</span>
            
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Alberton Trade Centre
            </h1>
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              This is our flagship retail and trade store, serving the Alberton community for over 10 years. Get in-store expert advice on decorative, auto, and industrial projects.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="http://googleusercontent.com/maps.google.com/3" target="_blank" rel="noopener noreferrer">Get Directions</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="tel:010-216-9131">Call Now: 010 216 9131</Link>
              </Button>
            </div>
          </div>
          
          {/* --- ERROR WAS LIKELY HERE --- */}
          {/* This div (line 28) was missing its closing tag */}
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/store-front.png" // Using the same authoritative storefront image
              alt="QJ Paint World Alberton Trade Centre Storefront"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* --- FIX: This is the missing closing </div> tag --- */}
          
        </div>
      </section>

      {/* NAP & Hours Detail (Architect's Precision: Data Clarity) */}
      <section className="py-16 bg-secondary/10 dark:bg-neutral-800">
        <div className="container grid md:grid-cols-3 gap-12">
          
          {/* Address */}
          <Card className="text-center p-6 shadow-md">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
             <CardTitle>Our Location (NAP)</CardTitle>
            <CardContent className="pt-2">
              <address className="not-italic text-lg font-semibold">6 Piet Retief Rd, Alberton North, 1450</address>
            </CardContent>
          </Card>
          
          {/* Hours (CANONICAL HOURS FIX) */}
           <Card className="text-center p-6 shadow-md">
            
            <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
            <CardTitle>Operating Hours</CardTitle>
            <CardContent className="pt-2 space-y-1">
              <p>Mon - Fri: 8:00 am – 5:00 pm</p>
              <p>Saturday: 8:00 am – 12:30 pm</p>
             </CardContent>
          </Card>

          {/* Call (CANONICAL PHONE FIX) */}
          <Card className="text-center p-6 shadow-md">
            <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
            <CardTitle>Call Our Experts</CardTitle>
            <CardContent className="pt-2">
              <a href="tel:010-216-9131" className="text-xl font-bold text-accent hover:text-primary">010 216 9131</a>
              <p className="text-sm text-neutral-500">The canonical number for all services.</p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Store Services CTA */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">What You&apos;ll Find In-Store</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {storeServices.map((item) => (
              <Card key={item.title} className="p-4 flex flex-col items-center text-center hover:border-accent transition-colors">
                <item.icon className="h-8 w-8 text-accent fill-accent/10 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}