/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5cdb95",
        secondary: "#EDF5E1",
        tertiary: "#05386B",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        blue_p:         "#05386B",
        green_blue_p:   "#379683",
        green_p:        "#5CDB95",
        green_white_p:  "#8EE4AF",
        white_p:        "#EDF5E1",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        // 'sh': {'raw': '(min-height: 500px)'}
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg6.png')",
      },
    },
  },
  plugins: [],
};

//Blue  #05386B
//G-B   #379683
//GREEN #5CDB95
//G-W   #8EE4AF  
//WHITE #EDF5E1