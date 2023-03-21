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

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
