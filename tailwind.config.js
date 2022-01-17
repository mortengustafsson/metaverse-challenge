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
        'bounceA': 'bounce 1s linear infinite 0.1s',
        'bounceB': 'bounce 1s linear infinite 0.2s',
        'bounceC': 'bounce 1s linear infinite 0.3s',
        'fadeIn': 'visible 0.5s linear forwards',
        'fadeOut': 'hidden 0.5s linear forwards'
      },
      keyframes: {
        visible: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        hidden: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    }
  },
  plugins: [],
}
