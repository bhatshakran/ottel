/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#fef7f1',
        secondary: '#f56915',
        lightorange: '#f9b67d',
      },
      fontFamily: {
        silka: ['Silka'],
        regis: ['Regis'],
      },
    },
  },
  plugins: [],
};
