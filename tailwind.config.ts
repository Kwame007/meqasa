import type { Config } from "tailwindcss"

// const { fontFamily } = require("tailwindcss/defaultTheme")
const defaultTheme = require("tailwindcss/defaultTheme")

const colors = require("tailwindcss/colors")
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "b-primary": "hsl(var(--brand-primary))",
        "b-primary-light": "hsl(var(--brand-primary-light))",
        "b-primary-dark": "hsl(var(--brand-primary-dark))",
        "b-secondary": "hsl(var(--brand-secondary))",
        "b-secondary-light": "hsl(var(--brand-secondary-light))",
        "b-secondary-dark": "hsl(var(--brand-secondary-dark))",
        "b-accent": "hsl(var(--brand-accent))",
        "b-gray": "hsl(var(--brand-gray))",
        "b-blue": "hsl(var(--brand-blue))",
        "b-blue-light": "hsl(var(--brand-blue-light))",
        "b-blue-dark": "hsl(var(--brand-blue-dark))",
        "b-muted": "hsl(var(--brand-muted))",
        "b-muted-dark": "hsl(var(--brand-muted-dark))",
        "border-b": "hsl(var(--brand-border))",
        "b-border-light": "hsl(var(--brand-border-light))",
        "b-badge-muted": "hsl(var(--brand-badge-muted))",
        "b-border-primary": "hsl(var(--brand-badge-primary))",
        "b-border-verified": "hsl(var(--brand-badge-verified))",
        "b-border-ongoing": "hsl(var(--brand-badge-ongoing))",
        "b-border-completed": "hsl(var(--brand-badge-completed))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        spread: "0 2px 12px #0b113419",
        subtle: "0 8px 40px rgba(11,17,52,.1)",
        select: "0 1px 30px rgba(0,0,0,.16)",
        "b-md": "0 4px 16px rgba(11,17,57,0.15)",
        "b-lg": "0 4px 16px rgba(11,17,57,0.20)",
        slider: "0 10px 20px -5px rgba(0, 0, 0, 0.125)",
        "b-x": "0 2px 12px rgba(11,17,52,.15)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        show: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          " 100%": {
            strokeDashoffset: "993",
          },
          " 0% ": {
            strokeDashoffset: "1000",
          },
        },
        // scroll: {
        //   to: {
        //     transform: "translateX(calc(-50% - 2rem))",
        //   },
        // },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "logo-slide": "slide-in 45s infinite linear",
        slide: "show 0.5s ease-in",
        donut: "slide-left 2s ease 0.2s backwards",
        // scroll: "scroll 80s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}

export default config
