// FIX: 'Metadata' import removed
import Link from "next/link";
import { MoveRight, FileText, Settings, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Paint Resources & Expert Articles | QJ Paint World Blog",
  description: "Read expert articles on industrial coating specification, automotive paint techniques, DIY decorative trends, and professional trade tips from QJ Paint World engineers.",
};

// Placeholder articles list
const articles = [
  {
    title: "Guide to Epoxy vs. Polyurethane Floor Coatings",
    summary: "An engineer's comparison of adhesion, thermal shock resistance, and material costs for factory floors.",
    category: "Industrial",
    link: "#", // Placeholder
  },
  {
    title: "5 Reasons Your Automotive Paint Match Fails (And How to Fix It)",
    summary: "Troubleshooting common metamerism issues and why a spectrophotometer is non-negotiable for pro bodyshops.",
    category: "Automotive",
    link: "#", // Placeholder
  },
  {
    title: "How Dulux Trade Saves You 20% on Labor Costs",
    summary: "Analyzing the coverage and durability metrics that make trade-grade decorative paint the smarter investment for contractors.",
    category: "Decorative",
    link: "#", // Placeholder
  },
  {
    title: "Protecting Steel Assets: The Power of Zinc-Rich Primers",
    summary: "A technical deep-dive into sacrificial anode protection for mining equipment and coastal industrial infrastructure.",
    category: "Industrial",
    link: "#", // Placeholder
  },
];

export default function BlogIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Content Hub Focus */}
      <section className="bg-secondary/10 py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold md:text-6xl">
            QJ Expert Resources & Articles
           </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Tap into our technical knowledge. Find guides, specifications, and expert insights from our team of industrial and automotive coating engineers.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
           <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Technical Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article) => (
              <Card key={article.title} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex-1">
                     <Badge 
                        variant="secondary" 
                        className="w-fit mb-2"
                        // Styling the badge dynamically based on category for visual cue
                         style={{ 
                            backgroundColor: article.category === 'Industrial' ? 'hsl(var(--accent) / 0.1)' : article.category === 'Automotive' ? 'hsl(var(--primary) / 0.1)' : 'hsl(var(--secondary) / 0.1)',
                            color: article.category === 'Industrial' ? 'hsl(var(--accent))' : article.category === 'Automotive' ? 'hsl(var(--primary))' : 'hsl(var(--secondary-foreground))',
                            borderColor: article.category === 'Industrial' ? 'hsl(var(--accent))' : article.category === 'Automotive' ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                        }}
                    >
                        <Layers className="h-3 w-3 mr-1" /> {article.category}
                     </Badge>
                  <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{article.summary}</CardDescription>
                </CardContent>
                 <CardFooter className="pt-0 mt-auto">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={article.link}>
                        Read More <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: Consult our experts */}
      
 <section className="py-12 bg-primary dark:bg-primary/90 text-neutral-900">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Need a Technical Deep Dive?</h2>
          <p className="mt-2 text-xl font-medium">
            Contact us for specifications that aren&apos;t covered in our public articles.
          </p>
          <Button asChild size="lg" className="mt-6 bg-neutral-900 text-white hover:bg-black/80">
            <Link href="/services/on-site-technical-consultation">
              Book a Consult <Settings className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
    </main>
  );
}