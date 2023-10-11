/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'discount-background': "url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png')"
      },
      screens: {
        'phone': {min: '0px', max: '640px'},
        'tablet': {min: '640px', max: '1023px'},
        'laptop': '1024px'
      },
    },
  },
  plugins: [],
}

