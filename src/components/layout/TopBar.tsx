// src/components/layout/TopBar.tsx - FULL REPLACEMENT (Canonical Hours and Phone Fix)
import Link from "next/link"
import { Phone, Clock, Star } from "lucide-react"

export function TopBar() {
  return (
    // A slim bar, even darker than the main header for a premium feel
    <div className="bg-neutral-950 text-neutral-300 text-xs">
      <div className="container flex h-10 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* Left Side: Hours (CRITICAL FIX - Added canonical operating hours) */}
        <div className="flex items-center gap-2">
          {/* Theme fix: Changed text-yellow-400 to primary for the red theme */}
          <Clock className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">
            Mon-Fri: 8:00 am–5:00 pm  | Sat: 8:00 am–12:30 pm
          </span>
          <span className="sm:hidden">
            Hours: Mon-Fri (8-5), Sat (8-12:30)
          </span>
        </div>

        {/* Right Side: Trust & Contact */}
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <div className="hidden items-center gap-1.5 md:flex">
            {/* Theme fix: Changed text-yellow-400 to primary for the red theme */}
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span>Trusted by Contractors</span>
          </div>
          <Link
            href="tel:010-216-9131"
            className="flex items-center gap-1.5 hover:text-white"
          >
            {/* Theme fix: Changed text-yellow-400 to primary for the red theme */}
            <Phone className="h-4 w-4 text-primary" />
            {/* CANONICAL PHONE FIX APPLIED HERE */}
            <span>010 216 9131</span> 
          </Link>
        </div>
        
      </div>
    </div>
  )
}