const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector', 
  theme: {
    extend: {
      fontSize: {
        'h1': '2.5rem', 
        'h2': '2rem',   
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}