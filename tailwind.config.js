module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Titillium: ['Titillium Web', "sans-serif"],
        Bebas: ['Bebas Neue', "cursive"],
        Oswald: ["Oswald", "sans-serif"]
      },
      animation: {
        'bounce-1': 'bounce 1s linear infinite 0.1s',
        'bounce-2': 'bounce 1s linear infinite 0.2s',
        'bounce-3': 'bounce 1s linear infinite 0.3s',
      }
    },
  },
  plugins: [],
}
