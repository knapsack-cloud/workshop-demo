import styles from 'rollup-plugin-styles';

export default {
  input: './styles.js',
  output: {
    file: 'dist/styles.js',
    format: 'esm',
    assetFileNames: '[name][extname]',
  },
  plugins: [
    styles({
      mode: ['extract', 'styles.css'],
      minimize: true
    }),
  ],
};