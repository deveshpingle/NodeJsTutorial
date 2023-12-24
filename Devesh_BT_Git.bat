git config --global --unset user.name
git config --global --unset user.email
git config --global --unset credential.helper
git config --global user.name "deveshpingle"
git config --global user.email "devesh.pingle1234@gmail.com" 
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/deveshpingle/NodeJsTutorial.git
git fetch --all
git checkout -b "dev/NodeJsTutorial"
git push origin dev/NodeJsTutorial
