#!/bin/bash

# This entire file is mostly pointless because FiveM rebuilds it every start anyways

echo "Deploying Lachee's Chat...";
echo " - Updating Files";
git pull

echo " - Insuring Deps";
rm yarn.lock            # Yarn is annoying in this case. If we update our deps then this will fail.
rm .yarn.installed      
npm i                   # Update our deps.

echo " - Building...";
rm -fR ./dist/
./pack.sh

echo "!! IMPORTANT !!";
echo "Remember to restart the scripts ;)"
echo "Done."