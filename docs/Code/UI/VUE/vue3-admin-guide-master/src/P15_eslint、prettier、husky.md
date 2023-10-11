# eslint、prettier、husky 踩坑指南



### 配置文件

尤其是创建配置文件的时候，注意文件名称不要写错。

.eslint.cjs

.eslintignore

.prettierrc.json

.prettierignore

.stylelintrc.cjs

.stylelintignore

`注意都是以.开头的！`



### 修改.eslintrc.cjs配置文件

修改.eslintrc.cjs配置文件时，会报红色波浪写，因为这个时候eslint检查已经开始生效了，记得鼠标放上去，选择提示为`fix up ...`开头的，会格式化配置文件。



### husky

配置husky时，需要先`git init`. 







