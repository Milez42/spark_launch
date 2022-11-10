/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'projnameblue': '#0D6EFD',
        'navbg':'#01121a',
        'texticon':'#1F98F4'
      },
      fontFamily:{
        russo:['Russo One']
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar-hide')
  ],
}
