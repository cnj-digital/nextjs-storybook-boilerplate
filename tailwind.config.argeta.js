const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "button-gradient":
          "linear-gradient(90deg,#dd5100 0,#da5800 20%,#d75f00 50%,#da6b00 80%,#d70 100%);",
        "argeta-gradient":
          "linear-gradient(179.32deg, #F37A21 72.05%, #E35D26 100.67%);",
        "footer-gradient":
          "radial-gradient(circle at top center,#353535 0,#000 100%)",
      }),
      boxShadow: {
        productCard: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      },
      lineHeight: {
        12: "2.625rem",
        16: "3.75rem",
      },
      colors: {
        black: {
          300: "#4A4A4A",
          DEFAULT: "#222222",
        },
        orange: {
          DEFAULT: "#d75f00",
          100: "#d70000",
          500: "#d75f00",
          900: "#dd5100",
        },
      },
      fontFamily: {
        sans: [
          "Ubuntu",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "2xs": ".625rem",
      },
      screens: {
        xs: "325px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
};
