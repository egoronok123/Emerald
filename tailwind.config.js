/** @type {import('tailwindcss').Configuration} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '1399px '},
      // => @media (min-width: 320px) and (max-width: 767px) { ... }

      'lg': {'min': '1400px', 'max': '3000px'},
      // => @media (min-width: 768px) and (max-width: 1023px) { ... }
    },
    extend: {},
  },
  plugins: [],
}