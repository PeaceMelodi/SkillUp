/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./App.js", "./screen/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}