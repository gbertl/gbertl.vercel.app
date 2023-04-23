/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        haiti: '#120926',
        primary: '#7127BA',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Preahvihear', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
