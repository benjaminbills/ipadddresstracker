/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verydarkgray: 'hsl(0, 0%, 17%)',
        darkgray: 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'system-ui'],
      },
    },
  },
  plugins: [],
};
