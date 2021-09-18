module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Segoe UI"', 'sans-serif']
    },
    screens: {
      '2xs': '330px',
      'xxs': '410px',
      xs: '480px',
      sm: '700px',
      md: '850px',
      lg: '1080px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1800px',
      '5xl': '2100px',
    },
    extend: {
      backgroundImage: theme => ({
        'login': "url('/assets/images/bg-login.jpg')",
        'signup': "url('/assets/images/bg-signup.jpg')",
        'event': "url('/assets/images/event.jpeg')",
      }),
      zIndex: ['hover', 'active'],
      colors: {
        green: {
          1000: '#0C3020',
          900: '#145143',
          800: '#28816D',
          400: '#209A75',
          50: '#E9F5F2',
        },
        red: {
          200:'#FE6B6B',
          300: '#FB3737',
        },
        gray: {
          150: '#EFEFEF',
        },
        'mute': '#F4F7E9',
        'lime': '#B3CF38',
      },
      height: {
        85: '23.9rem',
        2.5: '0.7rem',
        42: '150px',
        '70vh' : '70vh',
      },
      top: {
        18: '4.5rem',
      },
      fontSize:{
        '2xs': '10px',
        '3xs': '9px',
      },
      width:{
        100 : '35rem',
        '30vw': '40vw',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
  ],
}