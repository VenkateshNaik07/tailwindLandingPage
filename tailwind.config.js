/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'PlayFair Display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}