/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102E50',
          gold: '#F5C45E',
          orange: '#E78B48',
          red: '#BE3D2A'
        }
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
        secondary: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
