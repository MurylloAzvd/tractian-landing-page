module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1e40af',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-tractian': "url('https://tractian.com/images/thumb-tractian.png')"
      },
      padding: {
        iframe: '56.25%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
