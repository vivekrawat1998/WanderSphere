import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      xmd: "480px",
      md: "768px",
      lg: "1150px",
      xl: "1440px",
    },
    colors: {
      beige: "#f1dbb7",
      yellow: "#faab36",
      orange: "#f78104",
      red: "#fd5901",
      lightestgreen: "#4bc7c9",
      lightgreen: "#249ea0",
      green: "#008083",
      darkgreen: "#005f60",
      gray: "#555",
      lightergray: "#666",
      darkgray: "#333",
      white: "#ffffff",
      lightgray: "#d3dce6",
      graybg: "#f5f5f5",
      section: "#666",
    },
    extend: {
      fontFamily: {
        body: ["Josefin Sans"],
        hand: ["Caveat"],
      },
      fontSize: {
        section: "2rem",
      },
      dropShadow: {
        textlight: "0 35px 35px rgba(0, 0, 0, 0.25)",
        textheavy: "0px 0px 23px 0px rgba(0,0,0,0.75)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
