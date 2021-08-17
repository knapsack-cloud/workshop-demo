#!/bin/bash

if [ -f .env ]; then
    # Load Environment Variables
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
    # For instance:
    # echo $KS_SITE
fi

if [ ! $KS_SITE ]; then
  # Exit early if we don't have the correct config set: process.env.KS_SITE
  echo 'NO KS_SITE ENV VAR DEFINED'
  exit
fi

if [ ! $GH_ORG ]; then
  # Handle the default GitHub org
  ORG='knapsack-cloud'
else
  ORG=$GH_ORG
fi

# Reset all versions within package.json files
yarn replace-in-file --configFile=./scripts/ks.resetVersion.js
# Search and replace for Knapsack and package config
yarn replace-in-file --configFile=./scripts/ks.bootstrap.js

if [ $GH_ORG ]; then
  # Configure .npmrc with correct GitHub organization
  yarn replace-in-file 'knapsack-cloud:registry=' "$ORG:registry=" .npmrc
fi

# Clear out changelog.md files
:>CHANGELOG.md
:>packages/angular/CHANGELOG.md
:>packages/design-tokens/CHANGELOG.md
:>packages/react/CHANGELOG.md
:>packages/shared-types/CHANGELOG.md
:>packages/styles/CHANGELOG.md
:>packages/twig/CHANGELOG.md
:>packages/vue/CHANGELOG.md
:>packages/web-components/CHANGELOG.md

# Creat our Auto PR labels
yarn auto create-labels