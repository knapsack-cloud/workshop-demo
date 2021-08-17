// Config
const fs = require('fs');

var versionToLookFor = fs.existsSync("lerna.json", "utf-8") ? 
  JSON.parse(fs.readFileSync("lerna.json", "utf-8")).version 
  : '';

const files = [
  'lerna.json',
  'packages/**/package.json'
]

const fromReplaceSequentially = [ // IMPORTANT: The order of this 'from' array must be kept in sequential order with the 'to' array
  `"version": "${versionToLookFor}"`,
  `"@knapsack-cloud/workspace-design-tokens": "^${versionToLookFor}"`,
  `"@knapsack-cloud/workspace-shared-types": "^${versionToLookFor}"`,
  `"@knapsack-cloud/workspace-styles": "^${versionToLookFor}"`,
]
const toReplaceSequentially = [ // IMPORTANT: The order of this 'to' array must be kept in sequential order with the 'from' array
  '"version": "0.0.0"',
  '"@knapsack-cloud/workspace-design-tokens": "0.0.0"',
  '"@knapsack-cloud/workspace-shared-types": "0.0.0"',
  '"@knapsack-cloud/workspace-styles": "0.0.0"'
]

module.exports = {
  files: files,
  from: fromReplaceSequentially,
  to: toReplaceSequentially,
  dry: false,
  verbose: true
};