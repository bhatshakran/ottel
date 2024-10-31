import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      }
    },
  },
  plugins: [],
};
export default config;
