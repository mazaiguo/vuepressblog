## 实现组件的全量打包

### 根目录新建command,packages文件夹

## 将src下components下所有文件全部拷贝到packages下

## 将src下hooks、style、utils带文件夹名一起拷贝到packages下

1. `npm install fs-extra --save`

`command\build.js`

```javascript
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')

// 打包入口文件夹
const entryDir = path.resolve(__dirname, '../packages')

// 出口
const outDir = path.resolve(__dirname, '../lib')

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// rollup 配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'vueelement',
        fileName: 'vueelement',
        formats: ['es', 'umd']
      },
      outDir
    }
  })
}

// 单组件打包构建
/**
 * @param {*} name  组件名称
 */
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  })
}

// 每个组件生成pagkage.json 
const ceratePackageJson = (name) => {
  const fileStr = `
    {
      "name": "${name}",
      "main": "index.umd.js",
      "module": "index.es.js",
      "style": "styles.css"
    }
  `
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

// 打包成库
const buildLib = async () => {
  await buildAll()

  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  // 循环构建组件
  for (const name of components) {
    await buildSingle(name)
    ceratePackageJson(name)
  }
}

buildLib()
```

`package.json`

```bash
    "build:components": "node ./command/build.js",
    "lib": "npm run build:components",
    "lib2": "npm run build:components && copy package.json"
```

`src\main.ts`

```javascript
// import mUI from  './components'
import mUI from '../lib/vueelement.mjs'
import '../lib/style.css'
```



# 问题

```
 error TS1484: 'App' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled
```

```
import {type App}  from "vue";
```

1，在类型前面加一个type：

```javascript
import { createPinia, type PiniaPluginContext } from 'pinia'
```

 2，直接用import type：

```javascript
import type {PiniaPluginContext } from 'pinia'
import { createPinia } from 'pinia'
```