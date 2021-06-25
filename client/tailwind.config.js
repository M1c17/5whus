module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../public/i-like-food.svg')",
      }),
      colors: {
        pink: {
          100: '#FFD9E3',
          500: '#FF45C9',
          600: '#eb31b5',
        },
        yellow: {
          100: '#ffff94',
        },
        purple: {
          600: '#C7A1D3',
          400: '#634B67',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
