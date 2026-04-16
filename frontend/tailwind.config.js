/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C87A",
          dark: "#9A7830",
          faint: "rgba(201,168,76,0.08)",
          border: "rgba(201,168,76,0.22)",
          glow: "rgba(201,168,76,0.15)",
        },
        dark: {
          bg: "#080810",
          surface: "#0F0F1A",
          card: "#13131E",
          card2: "#1A1A2A",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "fade-up-2": "fadeUp 0.7s 0.12s cubic-bezier(0.4,0,0.2,1) both",
        "fade-up-3": "fadeUp 0.7s 0.22s cubic-bezier(0.4,0,0.2,1) both",
        "fade-up-4": "fadeUp 0.7s 0.32s cubic-bezier(0.4,0,0.2,1) both",
        pulse2: "pulse2 2.2s infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,168,76,0.3), 0 8px 32px rgba(0,0,0,0.5)",
        "gold-sm": "0 0 0 0.5px rgba(201,168,76,0.25)",
        card: "0 8px 40px rgba(0,0,0,0.55)",
        "card-light": "0 4px 24px rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
