/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    minHeight: {
      main_desktop: "calc(100svh - 56px - 92px - 60px - 20px)",
      main_mobile: "calc(100svh - 56px - 92px - 98px - 20px)",
    },
    extend: {},
  },
  plugins: [],
};
