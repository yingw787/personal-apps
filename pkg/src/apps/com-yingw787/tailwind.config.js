const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */

const theme_colors = {
  // Color gradients generated from https://uicolors.app/create

  // Primary color: Neon pink
  "brand-primary": "#fb48c4",
  "brand-primary-50": "#fef1fb",
  "brand-primary-100": "#fee5f8",
  "brand-primary-200": "#ffcbf3",
  "brand-primary-300": "#ffa1e8",
  "brand-primary-400": "#ff66d5",
  "brand-primary-500": "#fb48c4",
  "brand-primary-600": "#eb179f",
  "brand-primary-700": "#cd0981",
  "brand-primary-800": "#a90b6a",
  "brand-primary-900": "#8d0e5a",
  "brand-primary-950": "#570034",

  // Neon green
  "brand-secondary": "#39ff14",
  "brand-secondary-50": "#ebffe4",
  "brand-secondary-100": "#d3ffc4",
  "brand-secondary-200": "#a9ff90",
  "brand-secondary-300": "#72ff50",
  "brand-secondary-400": "#39ff14",
  "brand-secondary-500": "#1ee600",
  "brand-secondary-600": "#14b800",
  "brand-secondary-700": "#0f8b00",
  "brand-secondary-800": "#116d07",
  "brand-secondary-900": "#115c0b",
  "brand-secondary-950": "#023400",
};

module.exports = {
  darkMode: ["class"],
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: (_) => theme_colors,
      colors: {
        ...theme_colors,
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
