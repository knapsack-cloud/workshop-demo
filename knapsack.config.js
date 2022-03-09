const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
// React
const { KnapsackAngularRenderer } = require('@knapsack/renderer-angular');
const webpack = require('webpack');
const babelConfig = require('@knapsack/babel-config/es');

// Other renderers
const { KnapsackReactRenderer } = require('@knapsack/renderer-react');
const TwigRenderer = require('@knapsack/renderer-twig');
const HTMLRenderer = require('@knapsack/renderer-html');
const {
  KnapsackWebComponentRenderer,
} = require('@knapsack/renderer-web-components');

const { KnapsackVueRenderer } = require('@knapsack/renderer-vue');
const { KnapsackHbsRenderer } = require('@knapsack/renderer-hbs');

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
    new KnapsackAngularRenderer(),
    new KnapsackReactRenderer({
      webpackConfig: {},
      webpack,
      babelConfig,
      demoWrapperPath: join(__dirname, './packages/react/dist/src/demo-wrapper.js'),
    }),
    new HTMLRenderer(),
    new KnapsackHbsRenderer(),
    new TwigRenderer({
      src: {
        roots: ['./packages/twig'],
        namespaces: [
          {
            id: 'components',
            recursive: true,
            paths: ['./packages/twig/src'],
          },
        ],
      },
      alterTwigEnv: [
        {
          file: join(__dirname, './packages/twig/alter-twig.php'),
          // names of functions from this ^ file to execute
          functions: ['addCustomExtension'],
        },
      ],
    }),
    new KnapsackWebComponentRenderer(),
    new KnapsackVueRenderer({
      // @TODO: these empty keys are temporary until @knapsack/renderer-vue
      // takes into account keys possibly not existing before trying to modify
      webpackConfig: {
        module: {
          rules: [],
        },
        resolve: {
          alias: {},
        },
      },
      webpack,
      babelConfig,
    }),
  ],
  plugins: [
    configureChangelogMd({
      changelogPath: './CHANGELOG.md',
    }),
  ],
  cloud: {
    siteId: 'demo-design-system',
    repoName: 'demo-design-system',
    repoOwner: 'knapsack-cloud',
    baseBranch: 'main',
  },
});
