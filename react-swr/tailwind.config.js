/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundColor: {
      gray: '#1e293b', // define your desired background color
      blue: '#1b347c', // define your desired background color
      yellow: '#e1ac20', // define your desired background color
      aqua: '#84b1e3', // define your desired background color
      white: '#fff', // define your desired background color
      black: '#000', // define your desired background color
      light_gray: '#cbd5e1',
      red: '#f87171',
      hoverRed: '#dc2626',
    },
  },
  plugins: [],
  darkMode: 'class',
};
