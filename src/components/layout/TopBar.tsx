import Link from "next/link"
import { Phone, Clock, Star } from "lucide-react"

export function TopBar() {
  return (
    // A slim bar, even darker than the main header for a premium feel
    <div className="bg-neutral-950 text-neutral-300 text-xs">
      <div className="container flex h-10 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* Left Side: Hours */}
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-yellow-400" />
          <span className="hidden sm:inline">
            Mon-Fri: 8am–5pm  |  Sat: 8am–12:30pm
          </span>
          <span className="sm:hidden">
            Hours: Mon-Fri (8-5), Sat (8-12:30)
          </span>
        </div>

        {/* Right Side: Trust & Contact */}
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <div className="hidden items-center gap-1.5 md:flex">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>4,824 Google Reviews</span>
          </div>
          <Link
            href="tel:010-216-9131"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <Phone className="h-4 w-4 text-yellow-400" />
            <span>010 216 9131</span>
          </Link>
        </div>
        
      </div>
    </div>
  )
}