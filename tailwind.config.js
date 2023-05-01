/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body2: '#CCD6F6',
        primary: '#7127BA',
        secondary: '#9857D3',
        haiti: '#120926',
        valentino: '#2B0B3A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        sans2: ['Poppins', 'sans-serif'],
        heading: ['Preahvihear', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
