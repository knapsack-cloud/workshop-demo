const { join } = require('path');

const buildPath = join(__dirname, './dist/');
const prefix = '';

module.exports = {
  source: [join(__dirname, '../../data/knapsack.design-tokens.json')],
  platforms: {
    css: {
      prefix,
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath,
      files: [
        {
          destination: 'design-tokens.scss',
          format: 'scss/map-deep',
        },
        // CSS Custom Properties DO NOT WORK in Media Queries
        // We export out a scss variables file for that
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
          // filter: token => token.attributes.category !== 'bp',
        },
      ],
    },

    js: {
      // prefix,
      transforms: ['attribute/cti', 'name/cti/camel'],
      tranformGroup: 'js',
      buildPath,
      files: [
        {
          destination: 'design-tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'design-tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
};
