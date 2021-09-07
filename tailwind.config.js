module.exports = {
  purge: [ ],
  darkMode: false, // or 'media' or 'class'
  theme: {    
      fontFamily: {
        sans : [ '"Segoe UI"', 'sans-serif']
      },
      screens: {
        '2xs': '320px',
        xs: '480px',
        sm: '700px',
        md: '850px',
        lg: '1080px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2000px',
      },
    extend: {
      backgroundImage: theme => ({
        'login': "url('/assets/images/bg-login.jpg')",
        'signup': "url('/assets/images/bg-signup.jpg')",
      }),
      zIndex: ['hover', 'active'],    
      colors: { 
        green: {
          900: '#145143',
          800: '#28816D',
          400: '#209A75',
          50: '#E9F5F2',
        },
        'mute': '#F4F7E9',
         
      },  
      height:{
        85 : '23.9rem',
      }  
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}