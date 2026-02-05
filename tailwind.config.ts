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
        primary: "#3D9991",
        "primary-hover": "#358a83",
        dark: "#1F1F1F",
        "footer-dark": "#2a2a2a",
        "footer-darker": "#1a1a1a",
      },
      fontFamily: {
        sans: ["var(--font-proxima)", "system-ui", "sans-serif"],
        serif: ["var(--font-garamond)", "Georgia", "serif"],
      },
      fontSize: {
        "nav": ["13px", { letterSpacing: "0.1em", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;