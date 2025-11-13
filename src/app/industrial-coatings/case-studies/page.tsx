// src/app/industrial-coatings/case-studies/page.tsx - FULL REPLACEMENT (Wadeville Case Study Removed)

import Image from "next/image";
// FIX: 'Factory' and 'MoveRight' removed from this import
import { Download, MapPin, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const metadata = {
  title: "Industrial Coatings Case Studies | Epoxy & Anti-Corrosion Project Proof",
  description: "Download local case studies for heavy-duty industrial coatings, including epoxy flooring in Alrode and anti-corrosion solutions for manufacturing.",
};
const caseStudies = [
  {
    title: "Heavy-Duty Epoxy Flooring: Alrode Warehouse",
    location: "Alrode, Alberton",
    focus: "Epoxy Flooring, Abrasion Resistance",
    image: "/images/cs-alrode-warehouse.png", // Placeholder
    summary: "Successfully applied a high-build epoxy system to a 5,000 sqm heavy-traffic warehouse floor, providing superior longevity and chemical spill resistance.",
    link: "#", // Placeholder for downloadable PDF link
  },
  {
    title: "Polyurethane Screed: Food Processing Plant",
    location: "Boksburg, East Rand",
    focus: "Polyurethane, Thermal Shock",
    image: "/images/cs-boksburg-food.png", // Placeholder
    summary: "Installed a Polyurethane screed solution to withstand constant temperature fluctuations and daily high-pressure, hot-water washdowns.",
    link: "#", 
  },
];
export default function IndustrialCaseStudiesPage() {
  return (
    <main>
      
      {/* Hero Section: Proof of Expertise (Architects Precision) */}
      <section className="bg-white py-12 sm:py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Industrial Case Studies: Local Project Proof
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Engineers and specifiers demand proof, not promises. Download our local project summaries to see how we deliver certified coating solutions in Johannesburg South.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
                <Link href="/contact-us">Request Specification Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Grid: Downloadable Proof */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 dark:bg-neutral-800">
        <div className="container grid md:grid-cols-2 gap-10">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              
              <div className="relative aspect-video w-full">
                <Image
                  src={study.image}
                  alt={`Image of ${study.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <CardHeader className="flex-1">
                <Badge variant="secondary" className="w-fit mb-2 bg-accent/20 text-accent border-accent">
                    <Layers className="h-4 w-4 mr-1" /> {study.focus}
                </Badge>
                <CardTitle className="text-2xl font-bold">{study.title}</CardTitle>
                <CardDescription className="flex items-center space-x-2 text-primary">
                    <MapPin className="h-4 w-4" /> <span>{study.location}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-400">{study.summary}</p>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Link href={study.link}>
                    Download Full Case Study (PDF) <Download className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}