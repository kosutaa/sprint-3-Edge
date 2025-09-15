/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'plum-purple': '#593C8F',
        'delicate-lilac': '#BCA8E6',
        'burnt-pink': '#E5989B',
        'cozy-beige': '#F7F3E3',
        'dark-blue-text': '#2D3142',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}