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
        primary: {
          50: "#FDF8E7",
          100: "#FCF1CF",
          200: "#F9E39F",
          300: "#F6D46F",
          400: "#F3C63F",
          500: "#D4AF37", // Ana altın rengi
          600: "#AB8C2C",
          700: "#826921",
          800: "#594716",
          900: "#30240B",
        },
        secondary: {
          50: "#F5F7FA",
          100: "#EBF0F5",
          200: "#D7E1EB",
          300: "#B4C2D1",
          400: "#8494A7",
          500: "#2C3E50", // Ana koyu mavi
          600: "#233240",
          700: "#1A2530",
          800: "#111920",
          900: "#080C10",
        },
        accent: "#E5E5E5",
        dark: "#1A1A1A",
        light: "#F8F9FA",
        cream: "#FFF5E6",
        rose: "#FFE4E1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
