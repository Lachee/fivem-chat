#!/bin/bash

echo "Deploying Lachee's Chat...";
echo " - Updating Files";
git pull

echo " - Insuring Deps";
npm i

echo " - Building...";
rm -fR ./dist/
./pack.sh

echo "!! IMPORTANT !!";
echo "Remember to restart the scripts ;)"
echo "Done."