/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...require('tailwindcss/defaultTheme').screens,
      xxs: '375px',
      xs: '480px',
      fhd: '1920px',
      '2k': '2200px',
      '4k': '3840px',
    },
    extend: {
      fontFamily: {
        sans: ['DMSans', 'sans-serif'],
        bold: ['DMSans-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
