import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#163a6b",
          deep: "#0e2748",
        },
        sky: {
          DEFAULT: "#4eb3dc",
          soft: "#e7f6fb",
        },
        gold: {
          DEFAULT: "#e2b15a",
          deep: "#c9922e",
        },
        tan: "#f6e2b8",
        cream: "#fff8ef",
        ink: "#243044",
        muted: "#5d6d80",
        line: "#eadfcb",
      },
      fontFamily: {
        display: ["var(--font-nunito)", "sans-serif"],
        sans: ["var(--font-source)", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -28px rgba(22, 58, 107, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
