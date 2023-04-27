/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#ac4a36',
        'light-maroon': '#ffe7e2',
        'off-green': '#ffffff',
        'my-green': '#17967c',
        'text-black': '#2c2c2c',
        'bg-white-lt': 'rgb(251, 251, 251)',
        'bg-white': 'rgb(243, 243, 243)',
      },
    },
  },
  plugins: [],
};
