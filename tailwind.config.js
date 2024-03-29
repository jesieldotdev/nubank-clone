/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        3: "3px", // Adiciona um novo valor de stroke-width
      },
      colors: {
        primary: '#9400d3 ', // Exemplo de cor azul do Twitter
      },
      fontFamily: {
        'sans': ['Product Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
