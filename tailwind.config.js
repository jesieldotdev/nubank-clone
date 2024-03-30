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
        customGray: "#efefef",
        customGray2: "#ded2ed",
        customDark: "#323232",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
