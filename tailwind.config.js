/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a4a4a', 
        secondary: '#a0a0a0', 
      },
    },
  },
  plugins: [],
}

