// Helpers
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Config
const sideID = process.env.KS_SITE ? process.env.KS_SITE : 'NO-SITE-ID-FOUND'; // The brand to bootstrap
const gitHubOrg = process.env.GH_ORG ? process.env.GH_ORG : 'knapsack-cloud'; // The GitHub organization

const ignoreTheseThings = [ // Ignore these patterns
  '*.md',
  '**/*.md',
  'scripts/*',
  'node_modules/**/*'
];

const fromReplaceSequentially = [ // IMPORTANT: The order of this 'from' array must be kept in sequential order with the 'to' array
  new RegExp(`@knapsack-cloud/workspace-`, 'g'),
  new RegExp('https://github.com/knapsack-cloud/workspace-starter', 'g'),
  new RegExp('Knapsack workspace-starter', 'g'),
  "siteId: 'workspace-starter'",
  "repoName: 'workspace-starter'",
  "repoOwner: 'knapsack-cloud'"
]
const toReplaceSequentially = [ // IMPORTANT: The order of this 'to' array must be kept in sequential order with the 'from' array
  `@${gitHubOrg}/${sideID}-`,
  `https://github.com/${gitHubOrg}/${sideID}`,
  `${capitalize(sideID)}`,
  `siteId: '${sideID}'`,
  `repoName: '${sideID}'`,
  `repoOwner: '${gitHubOrg}'`
]

module.exports = {
  files: '**',
  ignore: ignoreTheseThings,
  from: fromReplaceSequentially,
  to: toReplaceSequentially,
  dry: false,
  verbose: true
};