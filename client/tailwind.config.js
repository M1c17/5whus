module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../public/i-like-food.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
