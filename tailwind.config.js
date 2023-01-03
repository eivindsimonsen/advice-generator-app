/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontSize: {
      primarySize: "28px",
    },
    fontFamily: {
      body: "'Manrope', sans-serif",
    },
    extend: {
      colors: {
        primaryColor: "hsl(193, 38%, 86%)",
        secondaryColor: "hsl(150, 100%, 66%)",
        mainBackground: "hsl(217, 19%, 38%)",
        secondBackground: "hsl(217, 19%, 24%)",
        thirdBackground: "hsl(218, 23%, 16%)",
      },
      spacing: {
        translateDice: "-29px",
      },
    },
  },
  plugins: [],
};
