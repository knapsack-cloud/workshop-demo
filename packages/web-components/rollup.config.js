import babel from '@rollup/plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
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
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
      ]
    }),
    styles(),
    isProd && terser({ module: true }),
  ],
};