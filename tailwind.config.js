module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
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
        light: "#5BC8AF",
        normal: "#297C6B",
        dark: "#194D44",
        pressed: "#35BB9C",
        danger: "#FF7777",

        graymute: "#F5F5F5",
      },
      backgroundImage: (theme) => ({
        hero: "url('/assets/hero.png')",
        bottom_desktop: "url('/assets/bg-bottom.png')",
        bottom_ipad: "url('/assets/bg-bottom.png')",
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
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
