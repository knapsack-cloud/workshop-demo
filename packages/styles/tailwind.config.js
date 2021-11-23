const { color, breakpoint, spacing } = require('@knapsack-cloud/demo-design-system-design-tokens/dist/design-tokens.nested.json');

module.exports = {
  purge: [
    '../angular/src/lib/**/*.html',
    '../html/**/*.html',
    '../react/src/**/*.tsx',
    '../twig/src/**/*.twig',
    '../vue/src/**/*.vue',
    '../web-components/src/**/*.wc.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: color,
      screens: breakpoint.width,
      spacing
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
