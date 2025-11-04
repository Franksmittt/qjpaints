// src/components/layout/Footer.tsx - Fix Unescaped Entity
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper component for footer links
const FooterLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <li>
    <Link
      href={href}
      className={cn(
        "text-sm text-neutral-400 hover:text-primary transition-colors hover:underline",
        className
      )}
    >
      {children}
    </Link>
  </li>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    // Use the darkest background for a final, solid base (Artisan's Praxis: Contrast)
    <footer className="w-full bg-neutral-950 text-neutral-300">
      <div className="container mx-auto max-w-screen-2xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: Brand, Address, Hours (CRITICAL for Local SEO) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-primary sm:inline-block"
            >
              QJ Paint World
            </Link>
            <p className="mt-2 text-base text-neutral-400 max-w-sm">
                Your Expert Generalist partner for Decorative, Automotive, and Industrial Coatings in Alberton.
            </p>
            
            {/* NAP Data Block */}
            <div className="mt-6 space-y-3">
              {/* Address (Alberton Trade Centre - Canonical) */}
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-neutral-400">
                  <span className="font-semibold text-white block">Alberton Trade Centre</span>
                  6 Piet Retief Rd, Alberton North, 1450
                </address>
              </div>
              
              {/* Phone (Canonical) */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:010-216-9131"
                  className="text-base text-neutral-400 hover:text-primary transition-colors font-mono"
                >
                  010 216 9131
                </a>
              </div>
              
              {/* Hours (Critical Gap Fix) */}
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-neutral-400">
                  <span className="font-semibold text-white block">Hours:</span>
                  Mon - Fri: 8:00 am – 5:00 pm<br/>
                  Saturday: 8:00 am – 12:30 pm
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Decorative & Industrial (Vertical Hubs) */}
          <div className="col-span-1">
            <h5 className="text-lg font-semibold text-white border-b border-primary/20 pb-2 mb-4">Core Verticals</h5>
            <ul className="space-y-3">
              <FooterLink href="/decorative-paint">Decorative Paint (Retail/Trade)</FooterLink>
              <FooterLink href="/automotive-paint">Automotive Refinish Systems</FooterLink>
              <FooterLink href="/industrial-coatings">Industrial & Protective Coatings</FooterLink>
            </ul>
            
            <h5 className="text-lg font-semibold text-white border-b border-primary/20 pb-2 mb-4 mt-8">B2B Portal</h5>
            <ul className="space-y-3">
                <FooterLink href="/trade-partner-program">Contractor&apos;s Hub (Sign-up)</FooterLink>
                <FooterLink href="/contact-us/wadeville">Wadeville Industrial Hub (B2B)</FooterLink>
            </ul>
          </div>
          
          {/* Column 3: Quick Links & Services */}
          <div className="col-span-1">
            <h5 className="text-lg font-semibold text-white border-b border-primary/20 pb-2 mb-4">Our Services</h5>
            <ul className="space-y-3">
              <FooterLink href="/services/expert-paint-colour-matching">Expert Colour Matching</FooterLink>
              <FooterLink href="/services/on-site-technical-consultation">On-Site Technical Consult</FooterLink>
              <FooterLink href="/services/trade-delivery-program">Trade Delivery Program</FooterLink>
            </ul>
            
            <h5 className="text-lg font-semibold text-white border-b border-primary/20 pb-2 mb-4 mt-8">Company</h5>
            <ul className="space-y-3">
                <FooterLink href="/about-us">Our Story</FooterLink>
                <FooterLink href="/blog">Expert Resources</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Column 4: Key Brands (SEO Anchor) */}
          <div className="col-span-1">
            <h5 className="text-lg font-semibold text-white border-b border-primary/20 pb-2 mb-4">Key Brands</h5>
            <ul className="space-y-3">
              <FooterLink href="/decorative-paint/plascon-supplier-alberton">Plascon Supplier</FooterLink>
              <FooterLink href="/decorative-paint/dulux-trade-supplier-alberton">Dulux Trade Stockist</FooterLink>
              <FooterLink href="/automotive-paint/rm-paint-supplier">R-M Paint Systems</FooterLink>
              <FooterLink href="/industrial-coatings/anti-corrosion-protective-coatings">Anti-Corrosion Primers</FooterLink>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs text-neutral-500 md:text-left">
            © {currentYear} QJ Paint World. All Rights Reserved. 
            <span className="ml-4">Website by Apex Collective.</span>
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-neutral-400 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-neutral-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}