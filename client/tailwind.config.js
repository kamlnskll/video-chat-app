/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'svg-pattern': "url('/src/static/bgImg.svg')",
      },
    },
  },
  plugins: [],
}
