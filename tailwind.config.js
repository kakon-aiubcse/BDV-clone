/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vfsans: ["VFSans Regular", "sans-serif"], // Use VFSans Regular as default sans font
      },
      screens: {
        tab: { max: "1535px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
