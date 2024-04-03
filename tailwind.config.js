/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        3: "3px", // Adiciona um novo valor de stroke-width
      },
      colors: {
        primary: "#820AD1 ",
        // primary: "#00cc73",
        customGray: "#efefef",
        customGray2: "#ded2ed",
        customDark: "#323232",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-top": "slide-in-top 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
