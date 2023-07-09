/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1000px",
      },
    },
    colors: {
      primary: "#f03d70",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
