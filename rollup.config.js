// rollup.config.js
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import styles from 'rollup-plugin-styles';

const StyleDictionary = require('style-dictionary').extend(
  './style-dictionary.config.js',
);

const { ksPublicDist } = require('./config');

const isProd = process.env.NODE_ENV === 'production';

// not fully fleshed out yet but at least it's a starting point
const styleDictionaryPlugin = function () {
  return {
    name: 'style-dictionary',
    // writeBundle(options) {
    //   shelljs.exec('rm ./public/dist/tokens.js');
    // },
    buildStart: async () => {
      return StyleDictionary.buildAllPlatforms();
    },
  };
};

export default {
  input: [
    './src/index.js',
    './src/tokens.js',
  ],
  output: {
    dir: ksPublicDist,
    format: 'esm',
    assetFileNames: '[name][extname]',
  },
  watch: {
    clearScreen: false,
  },
  plugins: [
    styleDictionaryPlugin(),
    json(),
    styles({
      minimize: isProd,
      mode: 'extract',
      extensions: ['.scss', '.css', '.pcss', '.postcss', '.sss'],
      import: {
        extensions: ['.scss', '.css', '.pcss', '.postcss', '.sss'],
      },
      sass: {
        impl: 'sass',
        includePaths: [
          path.resolve('../../node_modules'),
        ],
      },
    }),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: [
              // NOTE: I'm not using the `esmodules` target due to this issue:
              // https://github.com/babel/babel/issues/8809
              'last 2 Chrome versions',
              'last 2 Safari versions',
              'last 2 iOS versions',
              'last 2 Edge versions',
              'Firefox ESR',
            ],
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    }),
    isProd && terser({ module: true }),
  ].filter(Boolean),
  onwarn(warning, warn) {
    // skip certain warnings
    if (warning.code === 'EMPTY_BUNDLE') return;

    // Use default for everything else
    warn(warning);
  },
};
