#!/bin/bash

git checkout gh-pages
git pull
mkdir .well-known
cp apple-developer-domain-association .well-known/apple-developer-domain-association.txt
echo 'include: [".well-known"]/npermalink: .well-known/apple-developer-domain-association.txt' > _config.yml
git add .well-known/apple-developer-domain-association.txt
git add _config.yml
git commit -m 'Adding .well-known files via moveDomainAssociation.sh'
git push
git checkout master
