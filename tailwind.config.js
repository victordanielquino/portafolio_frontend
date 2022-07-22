/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          default: "#00ADB5",
          black: "#222831",
          gray: "#393E46",
          white: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
