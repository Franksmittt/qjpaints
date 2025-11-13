// src/app/trade-partner-program/find-a-contractor/page.tsx - FULL REPLACEMENT (Unused Import Removed & Apostrophe Fix)

// FIX: 'Metadata' import removed
import Link from "next/link";
// FIX: 'Phone' import removed
import { MoveRight, MapPin, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// FIX: 'CardContent' and 'CardHeader' imports removed
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const metadata = {
  title: "Find a QJ-Approved Contractor | Referral Directory",
  description: "Find a verified QJ Trade Partner for your decorative, automotive, or industrial paint project. We refer local, trusted contractors directly from our B2C leads.",
};
// Placeholder list of approved contractors for display
const approvedContractors = [
  {
    name: "Alberton Quality Painters",
    vertical: "Decorative",
    specialty: "High-end Residential, PAINTCHEM Trade",
  },
  {
    name: "Swift Auto Body",
    vertical: "Automotive",
    specialty: "mipa Refinish Certified, Boksburg",
  },
  {
    name: "Pro-Roofs & Waterproofing",
    vertical: "Decorative",
    specialty: "Liquid Waterproofing, Roof Coatings",
  },
];

export default function FindAContractorPage() {
  return (
    <main>
      
      {/* Hero Section: The Value Proposition */}
      <section className="bg-secondary/10 py-12 sm:py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Find a QJ-Approved Contractor
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            We connect homeowners and businesses with our trusted Trade Partners. These contractors use our premium materials and are experts in their field.
          </p>
        </div>
      </section>

      {/* Contractor List Simulation */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
        <div className="container max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Verified Local Experts</h2>
          
          <div className="space-y-4">
            {approvedContractors.map((contractor) => (
              <Card key={contractor.name} className="p-6 md:flex items-center justify-between hover:shadow-lg transition-shadow">
                
                <div className="md:flex items-center space-x-6">
                    <MapPin className="h-8 w-8 text-accent fill-accent/10 mb-2 md:mb-0" />
                    <div>
                        <CardTitle className="text-2xl font-bold">{contractor.name}</CardTitle>
                        <CardDescription className="text-lg mt-1">{contractor.specialty}</CardDescription>
                    </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary">
                        {contractor.vertical} Expert
                    </Badge>
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      <a href={`mailto:contact@${contractor.name.replace(/\s/g, '').toLowerCase()}.com`}>
                            <Mail className="h-4 w-4 mr-2" /> Contact for Quote
                        </a>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* CTA for Contractors to Join */}
          <div className="mt-16 text-center border-t pt-8">
            <h3 className="text-2xl font-bold mb-3">Are You a Professional Contractor?</h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                The only way to join this exclusive list is to become a QJ Trade Partner.
                We send you the leads!
            </p>
            <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-neutral-900">
              {/* FIX: Replaced ' with &apos; */}
              <Link href="/trade-partner-program">
                Apply to the Contractor&apos;s Hub <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
         </div>
      </section>
      
    </main>
  );
}