/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.ejs",
    "./**/*.{html,js,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
