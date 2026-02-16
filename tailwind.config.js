/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-ysabeau)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
