#!/bin/bash
mkdir local server github.git
cd github.git
git init --bare --shared
DEFAULT_BRANCH=`git config --get init.defaultBranch`
cd ../local
git clone ../github.git . && echo 'local' > local.txt && git add . && git commit -m "[LOCAL] Initial Commit" && git push -u origin $DEFAULT_BRANCH
cd ../server
git clone ../github.git . && echo 'server' > server.txt && git add . && git commit -m "[SERVER] Initial Commit" && git push -u origin $DEFAULT_BRANCH
cd ../local
git pull

read -p "Press enter to close the window."