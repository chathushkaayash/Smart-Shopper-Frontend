const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#ff7708',
    }
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin(),],
}