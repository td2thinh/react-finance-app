/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    colors: {
      light: "#f9f2e7",
      lightText: "#201809",
      lightButton: "#305fb5",
      lightButtonHover: "#2a549e",
      lightButtonActive: "#1e3a6f",
      lightSecondaryButton: "#f9f2e7",
      lightSecondaryButtonHover: "#ebe2d7",
      lightSecondaryButtonActive: "#dcd2c5",
      lightAccent: "#a1d9fc",
      dark: "#00040f",
      darkText: "#fefdfb",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};