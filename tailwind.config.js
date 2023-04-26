/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#ac4a36',
        'off-green': '#aca236',
        'text-black': '#2c2c2c',
        'bg-white-lt': 'rgb(251, 251, 251)',
        'bg-white': 'rgb(243, 243, 243)',
      },
    },
  },
  plugins: [],
};
