/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      ssm: {
        'max': '650px'
      }
    },
    extend: {
      backgroundImage: {
        desktop: 'url(/assets/images/bg-desktop.svg)',
        mobile: 'url(/assets/images/bg-mobile.svg)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        violetmain: {
          300: 'hsl(257, 40%, 49%)',
        },
        sofmagenta: {
          300: 'hsl(300, 69%, 71%)',
        },
        footergreen: {
          300: '#4fff4b',
        }
      },
    },
  },
  plugins: [],
}
