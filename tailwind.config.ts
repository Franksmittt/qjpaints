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
        // New Keyframe for subtle shine effect
        "shine": {
          "0%": { opacity: "0", transform: "translateX(-100%) skewX(-20deg)" },
          "60%": { opacity: "1", transform: "translateX(200%) skewX(-20deg)" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // New Animation for shine effect
        "shine": "shine 2s infinite linear",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config