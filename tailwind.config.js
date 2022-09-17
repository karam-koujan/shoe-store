/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],	
  theme: {
    extend: {
      colors : {
        primary:"#6e7051",
        secondary:"#f6aa28",
        third:"#262b2c",
        fourth:"#979a9b",
        fifth:"#fbfbf9"
      },
      screens:{
        md : {max:"960px"},
        sm:  {max:"516px"},
        xsm:{max:"380px"},
        xl: {max:"1426px"}
      },
      spacing:{
        xl:'88rem'
      },
      fontFamily:{
        poppins : ["Poppins","sans-serif"],
        inter : ["Inter","sans-serif"]
      },
      backgroundImage:{
        lghero:"url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg')"
      }
    },
  },
  plugins: [],
}
