const { color, breakpoint, spacing } = require('@knapsack-cloud/public-demo-design-tokens/dist/design-tokens.nested.json');

module.exports = {
  purge: {
    content: [
      { raw: '<body class="dark"></div>', extension: 'html' },
      '../html/**/*.html',
      '../react/src/**/*.tsx',
      '../web-components/src/**/*.wc.js',
    ],
    safelist: [
      /grid-cols-.*/
    ]
  },
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
