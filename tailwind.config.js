/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'onahau': {
          '50': '#ecfcff',
          '100': '#d1f6ff',
          '200': '#a3eafe',
          '300': '#64d9fc',
          '400': '#1ebff2',
          '500': '#02a1d8',
          '600': '#047fb6',
          '700': '#0b6793',
          '800': '#135477',
          '900': '#144665',
          '950': '#072d45',
      },
      },
    },
  },
  plugins: [],
};
