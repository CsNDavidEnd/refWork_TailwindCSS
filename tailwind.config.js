/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '770px',
      lg: '980px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBrown: 'hsl(30, 50%, 20%)',
        lightNavyBlue: 'hsl(210, 50%, 60%)',
        navyBlue: 'hsl(240, 100%, 8%)',
        powderBlue: 'hsl(187, 52%, 80%)',
      },

      backgroundImage: {
        'hero_paint': "url('/img/paint.png')",
      }
    },
  },
  plugins: [],
}
