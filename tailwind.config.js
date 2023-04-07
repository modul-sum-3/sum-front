/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jumbo-bg": "url('/public/jumbo_bg.jpg')",
      },
      colors: {
        primary: "#85D300",
        "green-100": "#468A15",
        "green-200": "##1b4a04",
      },
      gradientColorStops: {
        green: ["#31C48D", "#0E9F6E", "#057A55"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
