/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      },
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#ffffff",
        light_peach: "#FFAD9B",
        dark_grey: "#333136",
        light_grey: "#F1F3F5",
        card_peach: "#FDF3F0",
        font_black: "#333136",
      },
    },
  },
  plugins: [],
};
