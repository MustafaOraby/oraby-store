/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{'custom': ['Cabin', 'sans-serif'],},
      
      colors: {
        main:"#438DB8",
        light: {
          background: '#f0f2f5',
          text: '#050505',           
          primary: '#ffffff',     //navbar
          secondary: '#f0f2f5', // input field
          tertiary:"#65676b", //navbar icons
          item:"#92AFD7", 
          alert:"#e41e3f"   //notification 
        },
        dark: {
          background: '#18191a',
          text: '#dadce1',
          primary: '#242526',
          tertiary:"#b0b3b8", 
          item:"#C5D1EB",
          secondary: '#3a3b3c',
        },
      },
    },
  },
  plugins: [],
}