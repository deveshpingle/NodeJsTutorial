git config --global user.name "deveshpingle"
git config --global user.email "devesh.pingle1234@gmail.com" 
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/deveshpingle/NodeJsTutorial.git
git remote set-url origin https://deveshpingle@github.com/deveshpingle/NodeJsTutorial.git
git fetch --all
git checkout -b "dev/NodeJsTutorialNew"
git push origin dev/NodeJsTutorialNew