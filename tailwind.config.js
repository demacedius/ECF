/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D4D4D4',
        'secondary': '#F5F5F5',
        'tertial': '#252525'
      },
      fontFamily:{
        'primary': ['Rubik'],
        'secondary': ['Abhaya Libre']
      }
    },
  },
  plugins: [],
}

