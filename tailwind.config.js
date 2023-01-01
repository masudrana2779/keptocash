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
          50: "#F9F9F9",
        },
        brand: {
          600: "#FF8049",
        },
      },
    },
  },
  plugins: [],
};
