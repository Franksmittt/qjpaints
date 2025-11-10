// src/app/services/expert-paint-colour-matching/page.tsx
import Image from "next/image";
import { Droplets, Settings, MapPin, Search, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// FIX: Unused Card components removed
import { Card } from "@/components/ui/card";
export const metadata = {
  title: "Expert Paint Colour Matching Service Alberton | Spectrophotometer Accuracy",
  // UPDATED: Removed "classic car" reference
  description: "Advanced colour matching for decorative, automotive, and industrial paints. Bring us a sample, and we guarantee a perfect match using our digital spectrophotometer.",
};
const matchingSteps = [
  {
    icon: Search,
    title: "Step 1: Digital Scan",
    description: "We use our spectrophotometer to take a precise digital reading of your sample (paint chip, fabric, or car panel).",
  },
  {
    icon: Settings,
    title: "Step 2: Formula Calculation",
    description: "The software calculates the exact formulation required, adjusting for color fade, material type, and base code variants.",
  },
  {
    icon: Droplets,
    title: "Step 3: Test and Tint",
    description: "Our expert technician mixes a small sample, tests the match against your original, and fine-tunes the tinting process.",
  },
  {
    icon: MapPin,
    title: "Step 4: Your Perfect Colour",
    description: "We supply your custom-mixed paint in the volume you require, with a formula saved in our system for easy re-ordering.",
  },
];
export default function ExpertColourMatchingPage() {
  return (
    <main>
      
      {/* Hero Section: Value Proposition (Storyteller's Heart) */}
      <section className="bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-primary">In-House Technical Service</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Expert Paint Colour Matching Service
            </h1>
            {/* FIX: Replaced ' with &apos; */}
            <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-lg">
              Don&apos;t compromise on colour. Whether it&apos;s restoring a vehicle or matching an antique wall shade, our digital spectrophotometer 
              guarantees 
              a perfect, repeatable result.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us/alberton-north">Bring in Your Sample Today</Link>
              </Button>
              <Button asChild 
                variant="link" 
                size="lg" className="text-accent hover:text-accent/80">
                 <Link href="#process">See The 4-Step Process →</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/colour-matching-station.png" // Placeholder image for mixing counter
              alt="Expert technician using a paint mixing machine and spectrophotometer"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Process Section: Step-by-Step Trust (Artisan's Praxis) */}
      <section id="process" className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Guaranteed 4-Step Matching Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {matchingSteps.map((step, index) => ( // <<< FIX APPLIED: Added 'index' here
              <Card key={step.title} className="p-4 flex flex-col items-center text-center border-accent/30 border-2">
                {/* FIX APPLIED: Used 'index' */}
                <div className="text-4xl font-extrabold text-primary mb-3">0{index + 1}</div>
                <step.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Automotive & Decorative */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
           <h2 className="text-3xl font-bold">This Service Supports All Your Projects</h2>
          <p className="mt-2 text-xl font-medium">
            From industrial equipment to **PAINTCHEM** decorative schemes, we match it all.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/automotive-paint/spectrophotometer-paint-matching">
                Learn About Automotive Matching <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
 
  );
}