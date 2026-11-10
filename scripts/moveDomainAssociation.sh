#!/bin/bash
# Run by `npm run deploy` after gh-pages publishes the build.
#
# Apple needs /.well-known/apple-developer-domain-association.txt, but GitHub Pages
# (Jekyll) ignores dot-folders and `gh-pages` doesn't publish them. So we add it to the
# gh-pages branch by hand, with a _config.yml that tells Jekyll to include .well-known.
set -euo pipefail

git checkout gh-pages
git pull
mkdir -p .well-known
cp apple-developer-domain-association .well-known/apple-developer-domain-association.txt
printf 'include: [".well-known"]\npermalink: .well-known/apple-developer-domain-association.txt\n' > _config.yml
git add .well-known/apple-developer-domain-association.txt _config.yml
git commit -m 'Adding .well-known files via moveDomainAssociation.sh' || echo 'Nothing to commit'
git push
git checkout master
