/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // .eslintrc te giya node:true set kore dite hobe 
  plugins: [require("daisyui")],
}
