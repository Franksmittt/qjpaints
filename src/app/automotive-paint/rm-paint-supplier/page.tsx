import Image from "next/image";
import { MoveRight, Shield, Zap, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "R-M Automotive Paint Systems Supplier Johannesburg | Premium BASF Refinish",
  description: "Official supplier of R-M (BASF) paint systems. Specialized for professional bodyshops needing superior color matching, high productivity, and OEM approvals.",
};

const rmAdvantages = [
  {
    icon: Shield,
    title: "OEM Approvals",
    description: "R-M is the global leader in OEM paint approvals, ensuring that your work meets the precise standards of every major vehicle manufacturer.",
  },
  {
    icon: Zap,
    title: "High Productivity",
    description: "Systems like Onyx HD are designed for speed and efficiency, optimizing bake times and reducing flash-off for rapid throughput in your bodyshop.",
  },
  {
    icon: Factory,
    title: "Advanced Colour Science",
    description: "Integrated with our spectrophotometer service for perfect blends, leveraging BASFs global colour database.",
  },
];

export default function RMPaintSupplierPage() {
  return (
    <main>
      
      {/* Hero Section: Premium Positioning (Innovators Horizon) */}
      <section className="bg-neutral-900 py-16 md:py-24 text-white">
        <div className="container max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase text-primary">BASF Premium Refinish</span>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl">
              R-M Automotive Paint Systems
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              For bodyshops demanding the absolute best. R-M systems deliver unparalleled quality, durability, and the **highest productivity** rates in the industry.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us">Place a Premium Order</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Link href="/automotive-paint/baslac-paint-supplier">View baslac (Cost-Effective) →</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] min-h-[300px]">
            <Image
              src="/images/rm-paint-system.png" // Placeholder image for R-M
              alt="Technician mixing R-M paint in a high-tech mixing room"
              fill
              priority
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

     
      {/* R-M Advantage Grid (Architects Precision) */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The R-M Advantage: Speed and Certification</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rmAdvantages.map((item) => (
              <Card key={item.title} className="hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <item.icon className="h-6 w-6 text-accent" /> <span>{item.title}</span>
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

      {/* CTA to Spectrophotometer Service */}
      <section className="py-12 bg-accent dark:bg-accent/80 text-white">
        <div className="container text-center">
          {/* FIX: Replaced  with &apos; */}
          <h2 className="text-3xl font-bold">Guarantee Your R-M&apos;s Colour Match</h2>
          <p className="mt-2 text-xl font-medium">
            Pair R-Ms premium system with our digital spectrophotometer service for absolute colour perfection.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-neutral-200">
            <Link href="/automotive-paint/spectrophotometer-paint-matching">View Matching Service <MoveRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

    </main>
  );
}