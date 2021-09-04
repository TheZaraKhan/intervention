module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     
      fontFamily: {
        sans : [ 'SegoeUI', 'sans-serif']
      },
      screens: {
        '2xs': '320px',
        xs: '480px',
        sm: '700px',
        md: '850px',
        lg: '1080px',
        xl: '1200px',
        '2xl': '1440px',
      },
    extend: {
      backgroundImage: theme => ({
        'login': "url('/assets/images/bg-login.jpg')",
      }),
      zIndex: ['hover', 'active'],
     
      colors: {
        red: {
          450: '#DBDBDB'
        },
        green: {
          900: '#145143',
          400: '#209A75',

        },
         indigo:{
          450: '#A89CC8' 
         },
      },
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
