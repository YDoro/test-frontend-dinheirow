/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primaryGray: "#161616",
        secondaryGray:"#bbbbbb",
        primaryRed:"#ec1d24",
        secondaryRed:"#e62429"
      },
      fontFamily:{
        marvel: 'Bebas Neue'
      },
      animation:{
        fadeIn: 'toggleIn 1s 1'
      },
      keyframes:{
          toggleIn:{
            "0%":{opacity:0},
            "100%":{opacity:1},
          }
      },

    },
  },
  plugins: [],
}
