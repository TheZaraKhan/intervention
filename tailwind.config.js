module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Cera Pro"', "sans-serif"],
      Bison: ["Bison"],
    },
    fill: (theme) => ({
      gray: "#737373",
      white: "#fff",
    }),
    screens: {
      "2xs": "330px",
      xxs: "410px",
      xs: "480px",
      sm: "700px",
      md: "850px",
      lg: "1080px",

      xl: "1300px",
      "2xl": "1440px",
      "3xl": "1600px",
      "4xl": "1800px",
      "5xl": "2100px",
      "6xl": "2500px",
      "7xl": "2770px",
    },

    extend: {
      colors: {
        dark_red: "#492b29",
        blood: "#CA333B",
        maroon: "#831b43",
        mustard: "#e2a466",
      },
      backgroundImage: (theme) => ({
        herored: "url('/assets/hero-red.png')",
        heromaroon: "url('/assets/hero-maroon.png')",
        heromustard: "url('/assets/hero-mustard.png')",
      }),

      maxWidth: {
        50: "50px",
      },
      width: {
        105: "105%",
      },
      height: {
        105: "105%",
        "50vh": "50vh",
        "65vh": "65vh",
        "40vh": "40vh",
      },
      zIndex: {
        "-1": "-1",
      },

      height: {
        85: "23.9rem",
        2.5: "0.7rem",
        42: "150px",
        "70vh": "70vh",
      },
      top: {
        18: "4.5rem",
      },
      fontSize: {
        "10xl": "100px",
        "9xl": "80px",
        "8xl": "70px",
        "6xl": "4rem",
        md: "14px",
        "2xs": "10px",
        "3xs": "9px",
      },
      width: {
        100: "35rem",
        "30vw": "40vw",
        98: "98%",
      },
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover", "active"],
      height: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
