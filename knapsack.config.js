const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const TwigRenderer = require('@knapsack/renderer-twig');
const {
  KnapsackWebComponentRenderer,
} = require('@knapsack/renderer-web-components');
const { KnapsackReactRenderer } = require('@knapsack/renderer-react');
const {
  configure: configureChangelogMd,
} = require('@knapsack/plugin-changelog-md');
const webpack = require('webpack');
const babelConfig = require('@knapsack/babel-config/es');
const webpackConfig = require('./webpack.config');
const { version } = require('./package.json');
const { ksPublic, ksPublicDist } = require('./config');

module.exports = configureKnapsack({
  designTokens: {
    createCodeSnippet: (token) => `$${token.name}`,
    tokensPath: join(ksPublicDist, 'design-tokens.json'),
  },
  dist: './dist',
  public: ksPublic,
  data: './data',
  version,
  templateRenderers: [
    new KnapsackReactRenderer({
      webpackConfig,
      webpack,
      babelConfig,
      demoWrapperPath: join(__dirname, './demo-wrapper.jsx'),
    }),
    new KnapsackWebComponentRenderer(),
    new TwigRenderer({
      src: {
        roots: ['./src'],
        namespaces: [
          {
            id: 'components',
            recursive: true,
            paths: ['./src/components'],
          },
        ],
      },
      alterTwigEnv: [
        {
          file: join(__dirname, './alter-twig.php'),
          // names of functions from this ^ file to execute
          functions: ['addCustomExtension'],
        },
      ],
    }),
  ],
  plugins: [
    configureChangelogMd({
      changelogPath: './CHANGELOG.md',
    }),
  ],
  cloud: {
    siteId: 'sandbox-starter',
    repoName: 'sandbox-starter',
    repoOwner: 'knapsack-cloud',
    baseBranch: 'main',
  },
});
