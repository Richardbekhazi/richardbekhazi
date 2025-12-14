import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        // Custom "Midnight Executive" Palette
        slate: {
          850: "#151f32", 
          900: "#0f172a", 
          950: "#020617", 
        },
      },
    },
  },
  plugins: [],
};
export default config;