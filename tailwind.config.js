/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#42008C',
        secondary: '#DDFF21',
        background_dark: '#181818',
        background_light: '#F3F3F3',
      },
    },
  },
  plugins: [],
}
