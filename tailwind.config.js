/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./dist/*.html', './src/components/*.{js,jsx}'],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      blue: colors.blue,
      red: colors.red,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      pastelPurple: '#926AA6',
      pastelBlack: '#363945',
      pastelGray: '#798EA4',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
