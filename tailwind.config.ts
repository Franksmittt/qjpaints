// tailwind.config.ts - Full Replacement
import type { Config } from "tailwindcss"

const config = {
  // Retain dark mode class for theme support
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true, 
      padding: {
        DEFAULT: "1rem", 
        sm: "2rem",     
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- Custom QJ Colors (Artisan's Praxis: Sophistication) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Primary: Bright Gold/Yellow for CTA/Energy
        primary: {
          DEFAULT: "hsl(var(--primary))", 
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary: Deep Slate for Professionalism
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Accent: Technical Teal/Blue for Expertise
        accent: {
          DEFAULT: "hsl(var(--accent))", 
          foreground: "hsl(var(--accent-foreground))",
        },
        // NEW: Hyper-Red for Max Visual Impact
        'hyper-red': '#FF0000',
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shine": {
          "0%": { opacity: "0", transform: "translateX(-100%) skewX(-20deg)" },
          "60%": { opacity: "1", transform: "translateX(200%) skewX(-20deg)" },
          "100%": { opacity: "0" },
        },
        "color-cycle": {
            "0%, 100%": { "background-position": "0% 50%" },
            "50%": { "background-position": "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "color-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "scroll-fast": {
            from: { transform: "translateX(0%)" },
            to: { transform: "translateX(-100%)" },
        },
        // Liquid Swirl Animation
        "swirl-in": {
            "0%": { transform: "translate(-50%, -50%) scale(1.0) rotate(0deg)" },
            "50%": { transform: "translate(-45%, -55%) scale(1.1) rotate(180deg)" },
            "100%": { transform: "translate(-50%, -50%) scale(1.0) rotate(360deg)" },
        },
        // NEW: Metallic/Glitter Particle Burst
        "glitter-burst": {
            "0%, 100%": { backgroundPosition: "0% 0%", opacity: "0.5" },
            "50%": { backgroundPosition: "100% 100%", opacity: "1.0" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shine": "shine 2s infinite linear",
        "color-cycle": "color-cycle 5s linear infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.6, -0.05, 0.01, 0.99) forwards",
        "color-pulse": "color-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-fast": "scroll-fast 60s linear infinite",
        // Swirl animation sped up (from 120s to 40s)
        "swirl": "swirl-in 40s linear infinite", 
        // NEW: Glitter burst animation
        "glitter-burst": "glitter-burst 8s linear infinite alternate",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config