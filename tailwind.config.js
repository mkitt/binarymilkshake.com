const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#111',
      gray: '#808080',
      silver: '#ddd',
      slate: '#708090',
      white: '#fff',
      magenta: '#ff00ff',
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

    // Custom
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        '.mood-dark': {
          backgroundColor: theme('colors.black'),
          borderColor: theme('colors.black'),
          color: theme('colors.white'),
        },
        '.mood-light': {
          backgroundColor: theme('colors.white'),
          borderColor: theme('colors.white'),
          color: theme('colors.black'),
        },
      })
      addUtilities({
        '.tracer': {
          outline: '1px dotted #ff00ff',
        },
        '@supports (-webkit-touch-callout: none)': {
          '.h-screen': {
            height: '-webkit-fill-available',
          },
        },
      })
    }),
  ],
}
