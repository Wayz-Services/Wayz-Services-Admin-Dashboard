import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary)/<alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark)/<alpha-value>)",
        secondary: "rgb(var(--secondary)/<alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
