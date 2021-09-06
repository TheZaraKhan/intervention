module.exports = {
  purge: [
   
  ],
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
        'signup': "url('/assets/images/bg-signup.jpg')",
      }),
      zIndex: ['hover', 'active'],
     
      colors: {
        red: {
          450: '#DBDBDB'
        },
        green: {
          900: '#145143',
          800: '#28816D',
          400: '#209A75',
          50: '#E9F5F2',
        },
        'mute': '#F4F7E9',
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
