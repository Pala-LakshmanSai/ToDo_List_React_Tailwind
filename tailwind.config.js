/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateRows: {
        'custom': '160px auto',
      },
      width: {
        'taskColumnWidth':'30%'
      }
    },
  },
  plugins: [],
}