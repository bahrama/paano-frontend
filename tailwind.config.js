/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      'center' : 'true',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      screens:{
        'smallphone':'300px',

      },
      colors:{
        'test' : '#7f7f7f',
        'luster':{
          'test3':'#ccb121',
          'test4':'#021131',
          '1':'#bb965d',
          'DEFAULT':'#ffffff',
          '2':'#17234d'
        }
      },
      spacing:{
        'd-50':'10.5rem',
      },
      width:{
        '64': '64px',
      },
      height:{
        '64': '64px',
      },
      fontFamily: {
        'vazir' : 'Vazir'
      },
      boxShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
      plugin(function ({addBase}){

      })
  ],
}
