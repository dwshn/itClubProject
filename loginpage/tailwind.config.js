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
        bluemotion: "#1E90FF",
      },
      backgroundImage: {
        kursus: "url('/image/kursus.png')",
        tugas: "url('/image/tugas.png')",
        certi: "url('/image/certi.png')",
        rank: "url('/image/rank.png')",
      },
      screens: {
        patka: "2560px",
      },
    },
  },
  plugins: [],
};
