/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        'top-nav': '36px',
        'num': '22px',
        'phone':'16px',
        'nav-bar': '82px',
        'logo': '44px',
        'nav-container': '52px',
        'search-bar': '40px',
        'search-img': '20px',
        'account-icon': '24px',
        'cart-icon': '24px',
        'nav-right-content': '24px'
      },
      width:{
        'num':'116px',
        'phone': '16px',
        'top-menu': '210px',
        'logo': '175px',
        'nav-bar-container': '1360px',
        'topnav-bar-container': '1360px',
        'nav-container': '784px',
        'nav-menu': '400px',
        'search-bar': '320px',
        'search-icon': '60px',
        'search-img': '20px',
        'account-icon': '24px',
        'cart-icon': '24px',
        'account-container': '90px',
        'cart-container': '100px'
      },
      margin:{
        'account-margin': '11px',
        'cart-margin': '11px'
      },
      colors:{
        'top-nav': '#003d29',
        'nav-bar': '#fff',
        'search-bar': '#cccccc',
        'search-bar-after': '#3898EC',
        'nav-bar-border': '#cccccc'
      },
      textColor:{
        'menu-txt': '#231F1E',
      },
      padding:{
        'horizontal-top-nav': '40px',
        'vertical-top-nav': '7px',
        'nav-bar-vertical': '15px',
        'nav-bar-horizontal': '40px',
        'search-left': '20px',
        'search-right': '50px'
      },
      fontSize:{
        'num-txt': '14px',
        'menu-txt-size': '16px'
      },
      borderRadius:{
        'search-bar': '100px'
      }
    },
  },
  plugins: [],
}

