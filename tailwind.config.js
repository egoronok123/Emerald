/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // 'inter' - это имя шрифта, определенное в блоке @font-face, 'sans-serif' - запасной шрифт, если Inter недоступен
        // Добавьте другие настройки для различных начертаний шрифта Inter, если они есть
        // Например: inter-bold: ['Inter-Bold', 'sans-serif'],
        //           inter-italic: ['Inter-Italic', 'sans-serif'],
        //           и т. д.
      },
    },
  },
  plugins: [],
}

