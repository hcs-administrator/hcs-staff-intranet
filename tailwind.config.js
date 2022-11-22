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
        'mail' : '3fr 0.7fr 0.45fr',
        'menu' : '1fr 4fr 1fr',
        'icon' : '50px 2fr 50px',
        'icon-md' : '50px 2fr 4fr',
      },
      gridTemplateRows: {
        'mobile-menu' : '0.3fr 0.3fr 4fr',
      },
      colors: {
        'hcs-red' : '#cf2027',
        'hcs-blue' : '#152042',
        'hcs-blue-off' : '#153062'
      },
      fontSize : {
        'xxs' : '0.65rem'
      }
    },
  },
  plugins: [],
}