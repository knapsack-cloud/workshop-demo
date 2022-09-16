const defaultTheme = require('tailwindcss/defaultTheme');

const {
  color,
  breakpoint,
  spacing,
} = require('@knapsack-cloud/demo-design-system-design-tokens/dist/design-tokens.nested.json');

module.exports = {
  purge: {
    content: [
      { raw: '<body class="dark"></div>', extension: 'html' },
      { raw: '<body class="wow"></div>', extension: 'html' },
      '../angular/src/lib/**/*.html',
      '../html/**/*.html',
      '../react/src/**/*.tsx',
      '../twig/src/**/*.twig',
      '../vue/src/**/*.vue',
      '../web-components/src/**/*.wc.js',
    ],
    safelist: [/grid-cols-.*/],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: color,
      screens: breakpoint.width,
      spacing,
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
