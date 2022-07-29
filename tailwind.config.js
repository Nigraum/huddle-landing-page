/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: 'url(/src/assets/bg-desktop.svg)'
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        open: 'Open Sans, sans-serif',
      },
      colors: {
        violetmain: {
          300: 'hsl(257, 40%, 49%)',
        },
        sofmagenta: {
          300: 'hsl(300, 69%, 71%)',
        }
      },
    },
  },
  plugins: [],
}
