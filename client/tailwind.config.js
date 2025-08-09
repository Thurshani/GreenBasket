// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this based on your project
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fbf8b',
        'primary-dull': '#44ae7c',
      },
    },
  },
  plugins: [],
}
