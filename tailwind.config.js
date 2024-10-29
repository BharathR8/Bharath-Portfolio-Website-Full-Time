/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small-tablet': { 'min': '640px', 'max': '767px' }, 
        'large-mobile': {'min': '540px', 'max': '767px'}
      },
      spacing: {
        '50': '50px'
      },
      width: {
        '400': '400px'
      }
    },
  },
  plugins: [],
}
