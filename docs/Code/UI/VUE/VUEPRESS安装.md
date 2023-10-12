## 安装Yarn

```bash
npm install -g yarn
```

```bash
mkdir vuepress-starter && cd vuepress-starter
```

```bash
yarn init -y# npm init
```

```bash
yarn add -D vuepress # npm install -D vuepress
```

```bash
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```bash
yarn docs:dev # npm run docs:dev
```

VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080/)启动一个热重载的开发服务器。

### 目录结构

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

## 主题

### 首页

`docs\README.md`

```yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

`docs\.vuepress\config.js`

```javascript
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/Italy.png',
    nav: require('./nav/zh'),
    sidebar: require('./sidebar/zh'),
  },
  displayAllHeaders: true, // 显示所有页面的标题链接
  sidebar: 'auto', // 侧边栏配置
  markdown: {
    lineNumbers: true,
  },
  search: true,
  searchMaxSuggestions: 10,
  sidebarDepth: 2
}
```

将导航和侧边栏放置到js中处理

`docs\.vuepress\nav\zh.js`

```javascript
module.exports =
    [
        { text: 'Home', link: '/' },
        {
            text: 'Code', link: '/Code/',
            items: [
                { text: 'ARX', link: '/Code/ARX/' },
                { text: 'JAVA', link: '/Code/JAVA/' },
                {
                    text: 'Programminglanguage', items: [
                        {
                            text: 'Python', link: '/Code/Programminglanguage/Python/'
                        }]
                },
                {
                    text: 'UI', items: [
                        {
                            text: 'Vue3-UI库学习', link: '/Code/UI/VUE/'
                        }]
                },
            ]
        }
]

```

`docs\.vuepress\sidebar\zh.js`

```javascript
module.exports = {
    '/Code/ARX/': [
        'CustomEntity Trim Extend',  /* /foo/one.html */
        'ARX保存相关问题'   /* /foo/two.html */
    ],

    '/Code/JAVA/': [
        '问题', /* /bar/three.html */
    ],
    '/Code/Programminglanguage/Python/': [
        'question', /* /bar/three.html */
    ],
    '/Code/UI/VUE/': [
        'MFC使用cef', /* /bar/three.html */
        'mockjs',
        'Vue3-UI库学习',
        'Vue3学习',
        'VUEPRESS安装',
        'VUE组件打包',
    ],

}
```

代码增加拷贝设置
```bash
yarn add vuepress-plugin-code-copy
```

## 编译

```bash
yarn docs:build
```

### 问题

```
运行vue项目提示Error: error:0308010C:digital envelope routines::unsupported
```

#### 解决方案

`package.json`

```
"docs:build": "SET NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
```



SET NODE_OPTIONS=--openssl-legacy-provider && 

## 部署

* 在 `docs/.vuepress/config.js` 中设置正确的 `base`。

  如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

  如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。

* 新建`deploy.sh`

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mazaiguo/vuepressblog.git master:gh-pages

cd -
```

`docs\.vuepress\config.js`

```javascript
module.exports = {
  base:'/vuepressblog/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/Italy.png',
    nav: require('./nav/zh'),
    sidebar: require('./sidebar/zh'),
  },
  displayAllHeaders: false, // 显示所有页面的标题链接
  sidebar: 'auto', // 侧边栏配置
  markdown: {
    lineNumbers: true,
  },
  search: true,
  searchMaxSuggestions: 10,
  sidebarDepth: 2,
  plugins: ['@vuepress/back-to-top', ['vuepress-plugin-code-copy', true]]
}
```



