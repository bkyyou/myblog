#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git pull origin master

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bkyyou/myblog.git master:gh-pages

# # 链接远程仓库
# git remote add origin https://github.com/bkyyou/myblog.git
# # 拉取远程仓库的文件
# git pull --rebase origin master  
# # 同步更新代码
# git push -u origin master
# cd -

# echo $2

cd ../../../

git add .

git commit -m  $1

git pull origin master

# git push -u origin master

git push