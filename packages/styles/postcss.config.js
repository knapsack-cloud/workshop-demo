const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

// postcss.config.js
module.exports = {
  plugins: [
    atImport(),
    nesting(),
    tailwindcss(),
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
