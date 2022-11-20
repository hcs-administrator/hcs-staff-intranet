/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '112' : '1.5fr 0.7fr 3fr',
        'mail' : '3fr 0.7fr 0.45fr'
      }
    },
  },
  plugins: [],
}