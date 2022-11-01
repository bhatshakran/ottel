/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#fef7f1',
      },
      fontFamily: {
        silka: ['Silka'],
        regis: ['Regis'],
      },
    },
  },
  plugins: [],
};
