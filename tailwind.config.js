/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this lines
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}