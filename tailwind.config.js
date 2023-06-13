const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: colors.blue,
      secondary: colors.slate,
      success: colors.green,
      danger: colors.rose,
      fail: colors.rose,
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
    },
  },
  plugins: [],
};
