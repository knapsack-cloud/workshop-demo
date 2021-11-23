const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

// postcss.config.js
module.exports = {
  plugins: [
    atImport(),
    tailwindcss(),
    postcssPresetEnv({
      features: {
        'nesting-rules': true
      }
    }),
  ]
}