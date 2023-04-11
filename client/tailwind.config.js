/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'svg-pattern': "url('/src/static/bgImg.svg')",
      },
    },
  },
  plugins: [],
}
