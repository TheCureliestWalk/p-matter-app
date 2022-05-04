module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Menlo', 'sans-serif'],
      body: ['Menlo', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
