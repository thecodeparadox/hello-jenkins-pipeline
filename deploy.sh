printf "\nGit pulling...\n"
git pull origin master

if [ $? -eq 0 ]; then
   printf "\nGit Pull Done.\n"
else
   printf "\nGit Pull Failed.\n"
fi

printf "\nLast 3 Git logs:\n"
git log --pretty=oneline | head -n 3

printf "\nReloading App...\n"
pm2 reload process.config.json --update-env

if [ $? -eq 0 ]; then
    printf "\nApp Reloaded Successfully\n"
else
    printf "\nApp Reload Failed\n"
fi

