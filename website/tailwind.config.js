/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0e7490",
        "secondary-color": "#004953",
        "accent": "#e2e8f0",
        "highlight": "#edf2f7",
        "muted": "#718096",
        "white": "#fff",
        "black": "#000",
      },
    },
    translate: {
      '-full': '-100%',
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          description: {
              words: ['Decentralized Asset Management'],
              delay: 2,
              repeat: 0,
              eraseSpeed: 0
          }
      }
  })
  ],
}

