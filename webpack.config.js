const { createWebPackConfig } = require('@knapsack/build-tools');
const { join } = require('path');
const { ksPublic, ksPublicDist } = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = createWebPackConfig({
  mainEntries: [join(__dirname, './src/')],
  extraSrcDirs: [__dirname, join(__dirname, './src')],
  dist: ksPublicDist,
  webRootDir: ksPublic,
  useHtmlWebpackPlugin: false,
  outputFilename: 'index.js',
});

const scssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: true,
      modules: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        postcssPresetEnv({
          browsers: ['last 2 versions'],
        }),
      ],
    },
  },
  {
    loader: 'resolve-url-loader',
    options: {
      debug: false,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        sourceMap: true,
        outputStyle: 'compressed',
        sourceComments: false,
      },
    },
  },
];

config.module.rules[4] = {
  test: /\.scss?$/,
  oneOf: [
    {
      issuer: /\.wc\.js$/,
      use: scssLoaders,
    },
    {
      use: [
        MiniCssExtractPlugin.loader,
        ...scssLoaders
      ],
    },
  ],
};

module.exports = {
  ...config,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  optimization: {},
};
