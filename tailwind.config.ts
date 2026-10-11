import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Work Mode Palette
        work: {
          light: {
            bg: "#FAFAFA",
            surface: "#F3F4F6",
            border: "#E5E7EB",
            text: "#171717",
            muted: "#525252",
            accent: "#0B513D",
            accentHover: "#083B2C",
            lime: "#2E7D32",
            limeHighlight: "#22C55E",
          },
          dark: {
            bg: "#151515",
            surface: "#202020",
            border: "#2E2E2E",
            text: "#F5F5F5",
            muted: "#A3A3A3",
            accent: "#10B981",
            accentHover: "#34D399",
            lime: "#4ADE80",
          },
        },
        // Beyond Work Mode Palette
        beyond: {
          light: {
            bg: "#FAF8F5", // Soft warm cream / off-white
            surface: "#FFFFFF",
            surfaceWarm: "#F4EFEA",
            border: "#E5DCD3",
            text: "#1C1917",
            muted: "#6B6560",
            accent: "#7C3AED", // Vibrant violet purple
            accentDark: "#6D28D9", // Deep royal purple for high-contrast text
            accentHover: "#5B21B6",
            purple: "#7C3AED",
          },
          dark: {
            bg: "#0A0A0A", // True pure black
            surface: "#141416", // Clean elevated charcoal
            border: "#26262A", // Subtle neutral dark border
            text: "#F8F5F2", // Soft white
            muted: "#A1A1AA", // Neutral gray
            accent: "#C084FC", // Radiant lavender / purple-400
            accentHover: "#E9D5FF",
            purple: "#A855F7", // Electric violet
            secondaryAccent: "#E9D5FF",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Newsreader", "Instrument Serif", "Georgia", "serif"],
      },
      screens: {
        xs: "390px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
