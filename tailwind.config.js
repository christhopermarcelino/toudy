const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        dark: '#454343',
        secondary: '#FFD600',
        tertiary: '#55BBF636',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
