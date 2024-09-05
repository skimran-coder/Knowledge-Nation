/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGreen: "#20AD94",
        myGreenDarker: "#1A8A76",
        myOrange: "#FE4C1B",
        myOrangeDarker: "#D84418"
      }
    },
  },
  plugins: [],
}

