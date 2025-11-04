import Image from "next/image";
// FIX: 'HardHat' and 'Beaker' removed from this import
import { MoveRight, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Heavy-Duty Epoxy & Polyurethane Floor Coatings Johannesburg | QJ Paint",
  description: "Definitive guide and supplier for industrial floor coatings in Johannesburg. We specify Epoxy systems vs. Polyurethane Screeds for factory floors and high-traffic areas.",
};

const systemComparison = [
  {
    system: "Epoxy Floor Coatings",
    use: "Warehouses, Retail, Light Manufacturing",
    advantage: "Excellent adhesion, chemical resistance, and lower material cost. Ideal for standard industrial and commercial use.",
  },
  {
    system: "Polyurethane Screeds",
    use: "Food Processing, Chemical Plants, Heavy Traffic",
    advantage: "Superior thermal shock resistance, higher impact protection, and better flexibility. Essential for high-demand environments.",
  },
];

export default function IndustrialFloorCoatingsPage() {
  return (
    <main>
      
      {/* Hero Section: Problem-Solution Focus (Architect's Precision) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-accent">Problem-Solving B2B Solutions</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              Heavy-Duty Industrial Floor Coatings
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              Protect your assets from chemical attack, heavy traffic, and abrasion. We provide the expert specification required to choose the correct **Epoxy** or **Polyurethane** system for your facility.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us">Request On-Site Technical Consult</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
                <Link href="#solutions">Compare Flooring Systems →</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/industrial-floor-hero.png" // Placeholder image for factory floor
              alt="Industrial floor being coated with a high-gloss epoxy system"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section: Technical Authority (Artisan's Praxis: Clarity) */}
      <section id="solutions" className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Epoxy vs. Polyurethane: Choosing the Right System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {systemComparison.map((item) => (
              <Card key={item.system} className="shadow-lg hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-accent">{item.system}</CardTitle>
                  <CardDescription className="flex items-center space-x-2 text-lg text-neutral-600 dark:text-neutral-300">
                    <Warehouse className="h-5 w-5" /> <span>Best for: {item.use}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 dark:text-neutral-400">{item.advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section: Case Studies CTA (Storyteller's Heart) */}
      <section className="py-16 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Need Proof of Performance?</h2>
          <p className="mt-2 text-xl font-medium">
            See our local case studies of heavy-duty floor projects in the Wadeville and Alrode industrial areas.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/industrial-coatings/case-studies">View Industrial Case Studies <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}