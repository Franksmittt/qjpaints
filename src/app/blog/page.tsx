// src/app/blog/page.tsx - NEW FILE (Resources Hub)

import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, FileText, Layers, TrendingUp, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const metadata: Metadata = {
  // Title targets general user intent for educational content
  title: "Paint Resources & Expert Articles | Technical Guides & Decorative Trends",
  description: "Tap into QJ Paint World's technical knowledge. Read expert articles on industrial coating specification, automotive paint techniques, and professional trade tips.",
};
// Placeholder categories for the main grid (maps to the SEO strategy)
const blogCategories = [
  {
    title: "Technical Guides (B2B)",
    description: "In-depth articles covering industrial coating specifications, surface preparation, and professional application techniques.",
    icon: Settings,
    color: "accent",
    link: "#", // Placeholder for filter/category link
  },
  {
    title: "Automotive Techniques",
    description: "Guides for bodyshops on color matching accuracy, mipa system usage, and maximizing efficiency with HB BODY consumables.",
    icon: Layers,
    color: "primary",
    link: "#", // Placeholder for filter/category link
  },
  {
    title: "Decor & Inspiration (B2C)",
    description: "Interior trends, color palettes, and DIY project advice to capture homeowner traffic and funnel leads to contractors.",
    icon: TrendingUp,
    color: "secondary",
    link: "#", // Placeholder for filter/category link
  },
];
// Placeholder articles list (Based on the Content Calendar strategy)
const articles = [
  {
    title: "Why PAINTCHEM Trade Saves Pros Money (Trade vs. Retail)",
    summary: "Analyzing the coverage and durability metrics that make trade-grade decorative paint the smarter investment for contractors.",
    category: "Decorative",
    link: "#", 
  },
  {
    title: "Guide to Epoxy vs. Polyurethane Floor Coatings",
    summary: "An engineer's comparison of adhesion, thermal shock resistance, and material costs for factory floors.",
    category: "Industrial",
    link: "#", 
  },
  {
    title: "5 Reasons Your Automotive Paint Match Fails (And How to Fix It)",
    summary: "Troubleshooting common metamerism issues and why a spectrophotometer is non-negotiable for pro bodyshops.",
    category: "Automotive",
    link: "#", 
  },
];
export default function BlogIndexPage() {
  return (
    <main>
      
      {/* Hero Section: Content Hub Focus */}
      <section className="bg-secondary/10 py-12 sm:py-16 md:py-24 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <div className="container max-w-screen-xl text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            QJ Expert Resources & Articles
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Tap into our technical knowledge. Find guides, specifications, and expert insights from our team of industrial and automotive coating engineers.
          </p>
        </div>
      </section>

      {/* Categories Grid - Visualizing the Content Strategy */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-neutral-800">
          <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Browse By Technical Vertical</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {blogCategories.map((cat) => (
              <Card key={cat.title} className="flex flex-col h-full hover:border-primary transition-colors duration-300">
                <CardHeader className="flex-1">
                  <cat.icon className={`h-8 w-8 text-${cat.color} mb-2`} />
                    <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{cat.description}</CardDescription>
                </CardContent>
                <CardFooter className="pt-0 mt-auto">
                    <Button asChild variant="link" className={`text-${cat.color} hover:text-${cat.color}/80`}>
                        <Link href={cat.link}>
                          View All <MoveRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 dark:bg-neutral-900">
        <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Latest Insights</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
                    <Card key={article.title} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="flex-1">
                            <Badge 
                              variant="secondary" 
                                className="w-fit mb-2"
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
          <h2 className="text-2xl sm:text-3xl font-bold">Need a Technical Deep Dive?</h2>
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