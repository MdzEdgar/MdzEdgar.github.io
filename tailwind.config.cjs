/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'] ,
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
