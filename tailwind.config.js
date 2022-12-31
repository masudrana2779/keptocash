/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_gray: {
          50: "#F3F3F3",
          100: "#EAEBE9",
          200: "#A9B2B6",
          300: "#828282",
          400: "#808080",
          500: "#8C8C8C",
        },
        custom_orange: {
          100: "#FAC84A",
          200: "#FFCE82",
          300: "#F9B266",
        },
        custom_red: {
          300: "#FF8D8D",
          400: "#F65D5A",
          500: "#FF0B0B",
        },
        brand: {
          600: "#FF8049",
        },
      },
    },
  },
  plugins: [],
};
