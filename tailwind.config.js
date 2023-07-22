/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary:        "#A8D0E6",
        secondary:      "#EDF5E1",
        tertiary:       "#05386B",
        "black-100":    "#100d25",
        "black-200":    "#090325",
        "white-100":    "#f3f3f3",
        blue_p:         "#05386B",
        green_blue_p:   "#379683",
        green_p:        "#A8D0E6",
        green_white_p:  "#8EE4AF",
        white_p:        "#EDF5E1",
        c1:             "#A8D0E6",    //light blue
        c2:             "#F76C6C",    //salmon
        c3:             "#374785",    //blue
        c4:             "#24305E",    //dark blue
        c5:             "#F8E9A1"     //yellow

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        // 'sh': {'raw': '(min-height: 500px)'}
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg8.png')",
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

//first #A8D0E6