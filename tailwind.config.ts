import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        primary: "#fff",
        white: "#fff",
        black: "#000000",
        gray: "#07339b",
      },
      fontSize: {
        titleSize: "3rem",
        size14: "14px",
        size16: "16px",
        size18: "18px",
        size19: "19px",
        size20: "20px",
        size22: "22px",
        size24: "24px",
        size28: "28px",
        size40: "40px",
        size42: "42px",
      },
      animation: {
        rotate3d: "rotate3dAnimation 30s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        zoomIn: "zoomIn 0.6s ease-out forwards",
      },
      keyframes: {
        rotate3dAnimation: {
          "0%": { transform: "scale(1) rotateZ(0deg) skew(0deg, 0deg)" },
          "30%": { transform: "scale(1.1) rotateZ(120deg) skew(5deg, 2deg)" },
          "50%": { transform: "scale(1.2) rotateZ(180deg) skew(10deg, 5deg)" },
          "70%": { transform: "scale(1.1) rotateZ(240deg) skew(5deg, 2deg)" },
          "100%": { transform: "scale(1) rotateZ(360deg) skew(0deg, 0deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  darkMode: "class",

  plugins: [heroui({ addCommonColors: true })],
};
export default config;
