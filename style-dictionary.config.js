const { styleDictionaryKnapsackFormat } = require('@knapsack/app');
const StyleDictionary = require('style-dictionary');
const { ksPublicDist } = require('./config');

StyleDictionary.registerFormat(styleDictionaryKnapsackFormat);

const buildPath = ksPublicDist;
const prefix = '';

module.exports = {
  source: ['src/design-tokens/**/*.{json,js}'],
  platforms: {
    scss: {
      prefix,
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
      ],
      buildPath,
      files: [
        {
          destination: 'design-tokens.scss',
          format: 'scss/map-deep',
        },
      ],
    },
    knapsack: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      buildPath,
      prefix,
      files: [
        {
          destination: 'design-tokens.json',
          format: 'knapsack',
        },
      ],
    },
    css: {
      // prefix,
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css',
      ],
      buildPath,
      files: [
        // CSS Custom Properties DO NOT WORK in Media Queries
        // We export out a scss variables file for that
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
          // filter: token => token.attributes.category !== 'bp',
        },
      ],
    },
  },
};
