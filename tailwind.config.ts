import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF2D78",
          50: "#FFE5EF",
          100: "#FFCCE0",
          200: "#FF99C1",
          300: "#FF66A2",
          400: "#FF3383",
          500: "#FF2D78",
          600: "#E60063",
          700: "#B3004D",
          800: "#800037",
          900: "#4D0022",
        },
        accent: {
          DEFAULT: "#FFD700",
          50: "#FFFCE5",
          100: "#FFF9CC",
          200: "#FFF399",
          300: "#FFED66",
          400: "#FFE733",
          500: "#FFD700",
          600: "#CCAC00",
          700: "#998100",
          800: "#665600",
          900: "#332B00",
        },
        info: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        background: {
          DEFAULT: "#0A0A0F",
          surface: "#12121A",
          card: "#1A1A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FF2D78 0%, #FFD700 100%)",
        "gradient-secondary": "linear-gradient(135deg, #3B82F6 0%, #FF2D78 100%)",
        "gradient-rainbow": "linear-gradient(135deg, #FF2D78 0%, #3B82F6 50%, #FFD700 100%)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255,45,120,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(255,45,120,0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
