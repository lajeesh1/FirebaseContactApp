/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        lightYellow: '#FFEAAE',
        white: '#FFFFFF',
        black: '#000000',
        orange: '#F6820C',
        yellow: '#FCCA3F',
        darkYellow: '#EEAB37',
        lightOrange: '#F4BD62',
        paleYellow: '#FDE068',
        deepOrange: '#FFA50E',
        brightOrange: '#FFA712',
        paleOrange: '#FFC24A',
        gray: '#323334',
        offWhite: '#FDFDFD'
      }
    },
  },
  plugins: [],
};
