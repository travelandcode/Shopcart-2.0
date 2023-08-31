/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        'top-nav': '36px',
        'num': '22px',
        'phone':'16px'
      },
      width:{
        'num':'116px',
        'phone': '16px',
      },
      colors:{
        'top-nav': '#003d29'
      },
      padding:{
        'horizontal': '40px',
        'vertical': '7px'
      },
      fontSize:{
        'num-txt': '14px'
      }
    },
  },
  plugins: [],
}

