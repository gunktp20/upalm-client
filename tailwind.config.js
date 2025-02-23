/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: {
        min: "0px",
        max: "400px",
      },
      sm: {
        min: "401px",
        max: "700px",
      },
      md: {
        min: "601px",
        max: "1023px",
      },

      lg: {
        min: "1024px",
        max: "1279px",
      },

      xl: {
        min: "1280px",
        max: "1535px",
      },
      "2xl": {
        min: "1535",
        max: "3150px",
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        50: "#e9f0ee",
        100: "#bccfca",
        200: "#9bb8b1",
        300: "#6e978d",
        400: "#518377",
        500: "#266455",
        600: "#235b4d",
        700: "#1b473c",
        800: "#15372f",
        900: "#102a24",
      },
      secondary: {
        50: "#fff9e6",
        100: "#ffebb0",
        200: "#ffe28a",
        300: "#ffd454",
        400: "#ffcc33",
        500: "#ffbf00",
        600: "#e8ae00",
        700: "#b58800",
        800: "#8c6900",
        900: "#6b5000",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#030712",
      },
    },
  },
  plugins: [],
};
