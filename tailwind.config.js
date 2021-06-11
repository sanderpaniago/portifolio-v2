const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'san-serif'],
      serif: ['"Press Start 2P"', 'cursive']
    },
    extend: {},
    colors: {
      ...defaultTheme.colors,
      black: '#121214',
      bgCard: '#1C1D21',
      red: '#EF233C',
      textInput: '#88888F',
      textGray: '#D4D4D5'
    },
    height: (theme) => ({
      ...defaultTheme.spacing,
      'screen': '100vh',
      'full': '100%',
      '11': '2.75rem',
      '16': '4.25rem',
      '36': '9rem',
      '44': '11rem',
      '64': '16rem',
      '96': '26rem',
      '100': '28rem',
      '2/4': '50%',
      '2/5': '40%',
      'divid-custon': 'calc(100% - 4.11rem)'
    }),
    transform: {
      'center': 'translateX(var(--tw-translate-x))'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
