const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      animation: {
        fadeIn: 'fadeIn 250ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const components = {
        // body: {
        //   scrollSnapType: 'y mandatory',
        //   opacity: 1,
        // },
        // '.scroll-snap-panel': {
        //   scrollSnapAlign: 'start',
        //   scrollPadding: '50%',
        // },
      }
      addComponents(components)
    }),
  ],
}
