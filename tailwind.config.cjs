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
      display: ['Consolas', 'sans-serif'],
      body: ['Consolas', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
