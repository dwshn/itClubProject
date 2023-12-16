/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        ns: ["Noto Serif"],
      },
      colors: {
        blueprim: "#01008a",
      },
      screens: {
        mobiles: "320px",
        mobilem: "375px",
        mobilel: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopl: "1440px",
        patka: "2560px",
      },
    },
  },
  plugins: [],
};
