const { default: plugin } = require("tailwindcss");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        baby_blue : "#4c0ffb",
        baby_gray : "#f7f7fc",
        baby_pink : "#f51767",
        baby_cyan : "#9BF9FF",
        baby_red:"#f14d68d9",
        baby_green:"#15d642d9",
        baby_slate : "#373f49",
        baby_sky:"#f6f6fb",
        baby_light_green:"#32DD88"
      }
    },
  },
  fontFamily:{
    "barlow": ['Barlow', 'sans-serif'],
    "inter": ['Inter', 'sans-serif'],
    "nunito": ['Nunito', 'sans-serif'],
    "playfair": ['Playfair Display', "serif"],
    "pt": ['PT Serif', "serif"],
    "roboto": ['Roboto', 'sans-serif'],
    "urbanist": ['Urbanist', 'sans-serif'],
  },
  plugins: [
  ],
  variants: {
        scrollbar: ['rounded']
    }
}