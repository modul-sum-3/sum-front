/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7BD100',
        green: {
          100: '#468A15',
          200: '#1b4a04',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
