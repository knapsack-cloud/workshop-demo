/**
 * @type {import('auto').config} // could be wrong
 * @link https://intuit.github.io/auto/docs/configuration/autorc
 * */
const config = {
  onlyPublishWithReleaseLabel: false,
  // prereleaseBranches: ['develop'],
  baseBranch: 'main',
  plugins: [
    [
      // https://intuit.github.io/auto/docs/generated/npm
      'npm',
      {
        subPackageChangelogs: true,
      },
    ],
    // https://intuit.github.io/auto/docs/generated/released
    'released',
  ],
};

module.exports = config;
