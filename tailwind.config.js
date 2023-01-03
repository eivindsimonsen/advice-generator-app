/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "hsl(193, 38%, 86%)",
        secondaryColor: "hsl(150, 100%, 66%)",
        mainBackground: "hsl(217, 19%, 38%)",
        secondBackground: "hsl(217, 19%, 24%)",
        thirdBackground: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
