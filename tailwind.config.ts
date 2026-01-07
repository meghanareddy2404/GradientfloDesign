import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        primary: "#3552bf",
      },
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        minecraft: ["'mac\\'s Extended Minecraft'", "monospace"],
      },
      backdropBlur: {
        xs: "6px",
      },
    },
  },
  plugins: [],
};

export default config;

