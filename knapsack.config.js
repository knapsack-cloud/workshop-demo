const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
// React
const webpack = require('webpack');
const babelConfig = require('@knapsack/babel-config/es');

// Other renderers
const { KnapsackReactRenderer } = require('@knapsack/renderer-react');
const HTMLRenderer = require('@knapsack/renderer-html');
const {
  KnapsackWebComponentRenderer,
} = require('@knapsack/renderer-web-components');

// Other config
const {
  configure: configureChangelogMd,
} = require('@knapsack/plugin-changelog-md');
const { version } = require('./lerna.json');

const sharedTypesDir = join(__dirname, './packages/shared-types/dist');
const DesignTokenDir = join(__dirname, './packages/design-tokens/dist');

module.exports = configureKnapsack({
  designTokens: {
    createCodeSnippet: (token) => `$${token.name}`,
    distDir: DesignTokenDir,
    targets: {
      android: {
        enabled: true,
      },
      css: {
        enabled: true,
      },
      ios: {
        enabled: true,
      },
      js: {
        enabled: true,
      },
    },
  },
  dist: sharedTypesDir,
  public: join(__dirname, 'ks-public/'),
  data: './data',
  version,
  templateRenderers: [
    new KnapsackReactRenderer({
      webpackConfig: {},
      webpack,
      babelConfig,
      demoWrapperPath: join(__dirname, './packages/react/dist/src/demo-wrapper.js'),
    }),
    new HTMLRenderer(),
    new KnapsackWebComponentRenderer(),
  ],
  plugins: [
    configureChangelogMd({
      changelogPath: './CHANGELOG.md',
    }),
  ],
  cloud: {
    siteId: 'workshop-demo',
    repoName: 'workshop-demo',
    repoOwner: 'knapsack-cloud',
    baseBranch: 'main',
  },
});
