/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#9333ea",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        innersm: "inset 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.1)",
        innermd: "inset 0 4px 6px -1px rgb(0 0 0 / 0.1)",
        innerlg: "inset 0 10px 15px -3px rgb(0 0 0 / 0.1)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "4xl": "1920px",
    },
  },
  plugins: [],
};
