/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

