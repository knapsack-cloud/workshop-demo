module.exports = {
  linters: {
    '*.{js,jsx,ts,tsx}': [
      // 'yarn eslint --quiet --fix', // @todo restore this, it's currently SLOOOOOW
      './node_modules/.bin/prettier --write',
      'git add',
    ],
    '*.scss': ['stylelint --fix', 'git add'],
    'package.json': ['sort-npm-scripts', 'git add'],
  },
  ignore: [],
};
