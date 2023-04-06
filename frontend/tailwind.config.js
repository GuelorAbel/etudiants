/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    // ajout de l'extension daisyUI
    plugins: [require("daisyui")],

    // configuration optionnelle
    daisyui: {
      styled: false,
    },
}