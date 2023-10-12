# 关于Vue3 UI库

[2023值得推荐的Vue3.0 PC端UI组件库](https://zhuanlan.zhihu.com/p/616831237?utm_id=0)

1. Vuetify 是一个纯手工精心打造的 Material 样式的 Vue UI 组件库
2. Vant 3.0 有赞前端团队开源的移动端组件库
3. Element Plus 一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库
4. Ant-design-vue 是 Ant Design 的 Vue 实现，组件的风格与 Ant Design 保持同步
5. Naive UI 一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，不算太慢,有点意思
6. Quasar 构建高性能的 VueJS 用户界面,开箱即用,支持桌面和移动浏览器（包括 iOS Safari！）
7. Arco Design Vue 字节跳动基于 Arco Design 开源的 Vue UI 组件
8. Element3 一套Element风格，为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件
9. Varlet 基于 Vue3 的 Material design 风格移动端组件库
10. Vue-devui 基于 DevUI Design 的 Vue3 组件库，使用 pnpm + vite + vue3 + tsx 技术搭建
11. Idux 一个基于 Vue 3.x 和 TypeScript 开发的开源组件库
12. NutUI 3 京东风格的 Vue 移动端组件库，开发和服务于移动Web界面的企业级产品

先学习[**Naive UI**](https://www.naiveui.com/zh-CN/os-theme)

## 安装

> 注意，naive-ui 仅支持 Vue3。如果你在使用 Vue2，可以去看看别的库。

### npm

使用 npm 安装。

```
npm i -D naive-ui
```

### UMD

参考 [使用 UMD](https://www.naiveui.com/zh-CN/light/docs/umd)。

### 字体

```
npm i -D vfonts
```

### 图标

naive-ui 建议使用 [xicons](https://www.xicons.org/) 作为图标库。

[Element Plus](https://element-plus.org/zh-CN/)

```vue
npm install element-plus --save
```

按需

```vue
npm install -D unplugin-vue-components unplugin-auto-import
```

```vue
// main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

* 按需导入现在不处理，先把功能跑通



[[ Ant Design Vue](https://www.antdv.com/index-cn)](https://www.antdv.com/components/overview-cn)

```vue
npm install -g @vue/cli
npm i --save ant-design-vue@4.x
全局完整注册
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');

全局部分注册
import { createApp } from 'vue';
import { Button, message } from 'ant-design-vue';
import App from './App';

const app = createApp(App);

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button).mount('#app');

app.config.globalProperties.$message = message;


局部注册组件
<template>
  <a-button>Add</a-button>
</template>
<script>
  import { Button } from 'ant-design-vue';
  const ButtonGroup = Button.Group;

  export default {
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
  };
</script>

按需加载 #
ant-design-vue 默认支持基于 ES modules 的 tree shaking，直接引入 import { Button } from 'ant-design-vue'; 就会有按需加载的效果。
```



```vue
ui.vue

<template>

    <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>Navigator One
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1" @click="showButton">绘制button</el-menu-item>
                            <el-menu-item index="1-2" @click="insertFrame">插入图框</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item index="1-3">新建管道</el-menu-item>
                        <el-sub-menu index="1-4">
                            <template #title>Option4</template>
                            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon><icon-menu /></el-icon>Navigator Two
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">Option 1</el-menu-item>
                            <el-menu-item index="2-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item index="2-3">Option 3</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>Option 4</template>
                            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <setting />
                            </el-icon>Navigator Three
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">Option 1</el-menu-item>
                            <el-menu-item index="3-2">Option 2</el-menu-item>
                            <el-menu-item index="3-3">Option 3</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="3-4">
                            <template #title>Option 4</template>
                            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>

       <!-- <el-container>
            <el-header style="text-align: right; font-size: 12px; width: 800px;">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>

             <el-main>
                <el-scrollbar>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="Date" width="140" />
                        <el-table-column prop="name" label="Name" width="120" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                    <div id="container-main"><router-view>下一页</router-view></div> 
                </el-scrollbar>
            </el-main>
        </el-container>  -->
    </el-container>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = reactive([{
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
},
{
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
},
])
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
function showButton(){
    router.push({
        path:'/ui/button',
    })
    console.log(route.path);
    
}

function insertFrame(){
    router.push({
        path:'/ui/frame',
    })
}

function xjgd(){
    router.push({
        path:'/ui/xjgd',
    })
}

</script>

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}</style>
```

```vue
frame.vue

<template>
  <!-- <el-dialog v-model="dialogVisible" title="插入图框" width="30%" :before-close="handleClose" draggable> -->
  <el-dialog v-model="dialogVisible" title="插入图框" width="30%" draggable>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
      status-icon>
      <el-form-item label="图号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="行号" prop="count">
        <el-input v-model.number="ruleForm.count" />
      </el-form-item>
      <el-form-item label="列号" prop="colCount">
        <el-input v-model.number="ruleForm.colCount" />
      </el-form-item>
      <el-form-item label="行间距" prop="rowGap">
        <el-input v-model.number="ruleForm.rowGap" />
      </el-form-item>
      <el-form-item label="列间距" prop="colGap">
        <el-input v-model.number="ruleForm.colGap" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确定
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="save">
          Confirm
        </el-button>
      </span>
    </template> -->
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules, ElMessageBox } from 'element-plus'

interface RuleForm {
  name: string
  count: number
  colCount: number
  rowGap: number
  colGap: number
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  count: 1,
  colCount: 1,
  rowGap: 100,
  colGap: 100,
})
const checkNumber = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the digits'))
  }
  console.log(value);
  
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 1) {
        callback(new Error('count must be greater than 1'))
      } else {
        callback()
      }
    }
  }, 1000)
}
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' },
  ],
  colCount: [
    {
      required: true,
      validator: checkNumber,
      trigger: 'blur',
    },
  ],
  count: [
    {
      required: true,
      validator: checkNumber,
      trigger: 'blur',
    },
  ],
  rowGap: [
    {
      required: true,
      validator: checkNumber,
      trigger: 'blur',
    },
  ],
  colGap: [
    {
      required: true,
      validator: checkNumber,
      trigger: 'blur',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false;
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const  dialogVisible = ref(true)

// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm('Are you sure to close this dialog?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }

// function save(){
//   dialogVisible.value = false
//   console.log(ruleForm);
  
// }
</script>
<style scoped></style>
```

```vue
button.vue

<template>
    <div>
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>
    </div>
    <br>
    <div>
        <el-row>
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>

        <el-row class="mb-4">
            <el-button disabled>Default</el-button>
            <el-button type="primary" disabled>Primary</el-button>
            <el-button type="success" disabled>Success</el-button>
            <el-button type="info" disabled>Info</el-button>
            <el-button type="warning" disabled>Warning</el-button>
            <el-button type="danger" disabled>Danger</el-button>
        </el-row>

        <el-row>
            <el-button plain disabled>Plain</el-button>
            <el-button type="primary" plain disabled>Primary</el-button>
            <el-button type="success" plain disabled>Success</el-button>
            <el-button type="info" plain disabled>Info</el-button>
            <el-button type="warning" plain disabled>Warning</el-button>
            <el-button type="danger" plain disabled>Danger</el-button>
        </el-row>
    </div>
    <br>
    <div>
        <p>Basic link button</p>
        <div class="flex justify-space-between mb-4 flex-wrap gap-4">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{ button.text }}</el-button>
        </div>

        <p>Disabled link button</p>
        <div class="flex justify-space-between flex-wrap gap-4">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" link disabled>{{ button.text
            }}</el-button>
        </div>


        <p>Basic text button</p>
        <div class="flex justify-space-between mb-4 flex-wrap gap-4">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{ button.text }}</el-button>
        </div>

        <p>Background color always on</p>
        <div class="flex justify-space-between mb-4 flex-wrap gap-4">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>{{ button.text
            }}</el-button>
        </div>

        <p>Disabled text button</p>
        <div class="flex justify-space-between flex-wrap gap-4">
            <el-button v-for="button in buttons" :key="button.text" :type="button.type" text disabled>{{ button.text
            }}</el-button>
        </div>
    </div>
    <br>

    <div>
        <div class="flex">
            <el-button type="primary" :icon="Edit" />
            <el-button type="primary" :icon="Share" />
            <el-button type="primary" :icon="Delete" />
            <el-button type="primary" :icon="Search">Search</el-button>
            <el-button type="primary">
                Upload<el-icon class="el-icon--right">
                    <Upload />
                </el-icon>
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
    Share,
    Upload,
} from '@element-plus/icons-vue'
import { reactive } from 'vue'
const buttons = reactive([
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
])

// import { Share, Upload } from '@element-plus/icons-vue'
</script>

<style  scoped></style>
```

```javascript
main.js

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routes = [
  { path: '/home', component: () => import('./components/Home.vue') },
  { path: '/about', component: () => import('./components/about.vue') },
  {
    path: '/', component: () => import('./elementplus/ui.vue')
    // , children: [
    //   { path: '/ui/button', component: () => import('./elementplus/button.vue') },
    // ]
  },
  { path: '/ui/button', component: () => import('./elementplus/button.vue') },
  { path: '/ui/frame', component: () => import('./elementplus/frame.vue') },
]

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(ElementPlus)
app.mount('#app')
```

```javascript
App.vue

<template>
  <router-view></router-view>
</template>

<script>


</script>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230919-20230919165050.png)



![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230919-20230919165118.png)



![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230919-20230919165216.png)

## vue 进阶篇 Element Plus 基本使用

[vue 进阶篇 Element Plus 基本使用](https://blog.csdn.net/weixin_43546282/article/details/129092416)

### 操作步骤

#### 安装插件

```bash
npm init vue@latest
cd vueelement
npm install
npm run dev
npm install element-plus
npm install @element-plus/icons-vue
npm install -D sass
npm install -D typescript
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230921-20230921103429.png)

#### 导入element icon并注册

```javascript
// 导入el-icon图标
import * as EIIconMoudle from '@element-plus/icons-vue'

const app = createApp(App)
for(let iconName in EIIconMoudle){
    //ElementPlus.use(EIIconMoudle[iconName])
    app.component(iconName,EIIconMoudle[iconName])
}
```



main.ts

```typescript
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入el-icon图标
import * as EIIconMoudle from '@element-plus/icons-vue'

const app = createApp(App)
for(let iconName in EIIconMoudle){
    //ElementPlus.use(EIIconMoudle[iconName])
    app.component(iconName,EIIconMoudle[iconName])
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')

```



App.vue

```javascript
<template>
  <RouterView />
</template>

<style>
html,body,#app{
  height: 100%;
}
</style>
```

HomeView.Vue

```javascript
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
          background-color="#304156" text-color="#FFFFFF" active-text-color="#ffd04b" router>
          <template v-for="menu in this.$router.options.routes" :key="menu">
            <!--处理没有子路由的菜单-->
            <el-menu-item v-if="!menu.children" :index="menu.path">
              <el-icon>
                <component :is="menu.icon" />
              </el-icon>
              <span>{{ menu.name }}</span>
            </el-menu-item>
            <!--处理子路由的菜单-->
            <el-sub-menu v-else-if="menu.children" :index="menu.path">
              <template #title>
                <el-icon>
                  <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.name }}</span>
              </template>
              <!--循环二级菜单 -->
              <el-menu-item v-for="child in menu.children" :key="child" :index="child.path">
                <el-icon>
                  <component :is="menu.icon" />
                </el-icon>
                {{ child.name }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
.el-header {
  background-color: rgb(87, 223, 200);
}

.el-aside {
  background-color: aliceblue;
}
</style>
```

#### router--->index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  //[
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
  [
    {
      path: '/',
      name: '仪表板',
      icon: 'Platform',
      component: HomeView
    },
    {
      path: '/nav1',
      name: '一级菜单1',
      icon: 'HelpFilled',
      component: HomeView,
      children: [
          {
      path: '/a',
      name: '页面A',
      component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
    },
      {
      path: '/b',
      name: '页面B',
      component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
    },
      ]
    },
    {
      path: '/nav2',
      name: '一级菜单2',
      icon: 'Monitor',
      component: HomeView,
      children: [
        {
          path: '/c',
          name: '页面C',
          component: () => import(/* webpackChunkName: "about" */ '../views/C.vue')
        }
      ]
    }
  ]
})

export default router

```

#### 在vue控件中使用

```javascript
<el-icon>
    <component :is="menu.icon" />
</el-icon>
```

### 配置环境变量

#### 修改vite.config.ts

```tsx
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host:'localhost',
    port:8000  
  }
})

```

设置网址和接口

#### 增加环境变量配置

`src\config\index.js`

```javascript
/**
 * 环境配置封装
 * 
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/cdadec1606dd9a97c9b2b57e8c17324c/vuetest'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/cdadec1606dd9a97c9b2b57e8c17324c/vuetest'
    },
    prod:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/cdadec1606dd9a97c9b2b57e8c17324c/vuetest'
    }
}

export default{
    env,
    mock:true,
    ...EnvConfig[env]
}
```

将变量数据打印出来

`src\components\list\src\index.vue`

```tsx
import './assets/main.css'

import { createApp} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from  './components'

// 导入el-icon图标
import * as EIIconMoudle from '@element-plus/icons-vue'
import axios from 'axios'
import config from './config'

console.log("环境变量==>", import.meta.env)
axios.get(config.mockApi + '/api/test1').then((res)=>{
    console.log(res.data)
})
// Vue.prototype.$http = axios
const app = createApp(App)
for(let iconName in EIIconMoudle){
    //ElementPlus.use(EIIconMoudle[iconName])
    app.component(iconName,EIIconMoudle[iconName])
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(mUI)
app.mount('#app')
```

### axios二次封装

`src\utils\request.js`

```javascript
/**
 * axios二次封装
 * 打开npmjs.org查看文档
 * 
 */

import axios from 'axios'
import config from '../config'
import router from '@/router'
import { ElMessage } from 'element-plus'
// 创建axios示例对象
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 5000
})
// 请求拦截
service.interceptors.request.use((req) => {
    const header = req.headers;
    if (header.Authorization)
        header.Authorization = `Bearer ${header.Authorization}`
    return req
})

//响应数据
service.interceptors.response.use((res) => {
    const { code, data, msg } = res.data;
    debugger
    if (code === 200) {
        return data
    }
    else if (code === 401) {
        ElMessage.error(msg)
        setTimeout(function () {
            router.push('/login')
        }, 1500)
        return Promise.reject(msg)
    }
    else {
        ElMessage.error(msg)
        return Promise.reject(msg)
    }
})
/**
 * 请求核心函数
 * @param {*} options 
 * @returns 
 */
function request(options) {
    // 创建axios示例对象
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    else {
        options.data = options.data
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    }
    else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }
    return service(options)
}
['get', 'post', 'delete', 'put', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            method: item,
            url,
            data,
            ...options
        })
    }
})

export default request;
```

#### 调试用==debugger==



### 实现导航栏折叠功能

#### 将`<el-header>Header</el-header>`改写

```javascript
<el-header>
          <div class="toggleCollapse">
            <el-icon :size="25" @click="toggleCollapse">
              <Fold />
            </el-icon>
          </div>
        </el-header>
```

#### el-menu 增加`:collapse="isCollapse" :collapse-transition="false"`

```javascript
import { ref } from 'vue'
let isCollapse = ref(false)
function toggleCollapse() {
  isCollapse.value = !isCollapse.value
}
```

#### 实现点击图标出现小手的功能

```css
.toggleCollapse{
  cursor: pointer;
}
```

### 增加头像

#### 在`el-header`中添加图标和dropdown-menu

```javascript
<el-header>
          <div class="toggleCollapse">
            <el-icon :size="25" @click="toggleCollapse">
              <Fold />
            </el-icon>
          </div>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../assets/头像.png" alt="">
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>密码修改</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
```

#### 增加样式

```css
<style>
.el-header {
  background-color: rgb(87, 223, 200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-dropdown-link img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
```

### 修改菜单收缩和展开的图标

#### 原始代码如下所示：

```javascript
<div class="toggleCollapse">
     <el-icon :size="25" @click="toggleCollapse">
         <Fold />
     </el-icon>
</div>
```

#### 修改成如下代码：

```javascript
 <div class="toggleCollapse">
     <el-icon :size="25" @click="toggleCollapse" v-if="isCollapse">
         <Fold />
     </el-icon>
<el-icon :size="25" @click="toggleCollapse" v-else>
    <Expand />
    </el-icon>
</div>
```

图标样式从https://element-plus.org/zh-CN/component/icon.html#icon-collection中查询

### 显示图标

```vue
<template>
    <el-button type="primary" @click="showDialog">图标选择器</el-button>
    <el-dialog v-model="dialogVisible" title="插入图框" width="30%" draggable>
        <div class="showIcon">
            <div class="icon" v-for="name in EIIconMoudle">
                <span>
                    <el-icon>
                        <component :is="name" />
                    </el-icon>
                </span>
                <span class="icon-name">{{ name.name }}</span>
            </div>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as EIIconMoudle from '@element-plus/icons-vue'
const dialogVisible = ref(false);
function showDialog() {
    dialogVisible.value = true;
}

</script>

<style scoped>
</style>
```

#### 将图标排版

```vue
<template>
    <el-button type="primary" @click="showDialog">图标选择器</el-button>
    <el-dialog v-model="dialogVisible" title="插入图框" width="30%" draggable>
        <div class="container">
            <div class="item" v-for="(item, index) in Object.keys(EIIconMoudle)" :key="index">
                <div>
                    <el-icon>
                        <component :is="item" />
                    </el-icon>
                </div>
                <div class="icon-name">{{ item }}</div>
            </div>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as EIIconMoudle from '@element-plus/icons-vue'
const dialogVisible = ref(false);
function showDialog() {
    dialogVisible.value = true;
}

</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    .item {
        width: 20%;
        /* border: 1px solid #000; */
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    svg{
        width: 2em;
        height: 2em;
    }
    .el-icon{
        width: 2em;
        height: 2em;
    }
</style>
```

#### 利用命名空间修改dialog样式，将页面滚动

新增一个scss文件,ui.scss

```scss
//修改组件内部样式名
//需要自定义一个类名空间
//先在浏览器里定义好样式
//在App.vue组件里引入
//在组件需要改样式的元素的父元素加上类名
.my-choose-icon-dialog-body-height{
    .el-dialog__body{
        height: 500px;
        overflow: scroll;
    }
}

```

在App.vue中引入改文件

```vue
<style lang="scss">
@import './style/ui.scss' ;
html,
body,
#app, 
el-menu,
el-container{
  height: 100%;
}

</style>
```

#### 在`pickicon.vue`的父对象中使用改样式

```vue
<template>
    <el-button type="primary" @click="showDialog">图标选择器</el-button>
    <div class="my-choose-icon-dialog-body-height">
        <el-dialog v-model="dialogVisible" title="显示图标" width="30%" draggable>
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(EIIconMoudle)" :key="index">
                    <div>
                        <el-icon>
                            <component :is="item" />
                        </el-icon>
                    </div>
                    <div class="icon-name">{{ item }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
```

### 给图标添加复制操作

#### 利用hooks函数自定义拷贝函数

`src\hooks\useCopy\index.ts`

```javascript
import { ElMessage } from "element-plus"
export const useCopy = (text: string) => {
    let input = document.createElement("input");
    input.value = text;

    document.body.appendChild(input);
    input.select();

    document.execCommand("copy");
    document.body.removeChild(input);

    ElMessage.success("复制成功")
}
```

#### 新建文件`\src\hooks\useCopy\index.ts`

在pickicon.vue中添加click响应

`@click="clickItem(item)"`

```vue
function clickItem(item: string) {
    let text = `<el-icon><${item}/></el-icon>`
    console.log(text);
    dialogVisible.value = false;
    useCopy(text);
}
```

#### pickicon.vue

```vue	
<template>
    <el-button type="primary" @click="showDialog">图标选择器</el-button>
    <div class="my-choose-icon-dialog-body-height">
        <el-dialog v-model="dialogVisible" title="显示图标" width="30%" draggable>
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(EIIconMoudle)" :key="index" @click="clickItem(item)">
                    <div>
                        <el-icon>
                            <component :is="item" />
                        </el-icon>
                    </div>
                    <div class="icon-name">{{ item }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as EIIconMoudle from '@element-plus/icons-vue'
import { useCopy } from '../hooks/useCopy'
const dialogVisible = ref(false);
function showDialog() {
    dialogVisible.value = true;
}
function clickItem(item: string) {
    let text = `<el-icon><${item}/></el-icon>`
    console.log(text);
    dialogVisible.value = false;
    useCopy(text);
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.item {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
}

svg {
    width: 2em;
    height: 2em;
}

.el-icon {
    width: 2em;
    height: 2em;
}</style>
```

### 选择省市区

#### 从github上下载省市区数据https://github.com/modood/Administrative-divisions-of-China

```vue
<template>
    <el-select v-model="province" class="1" placeholder="请选择省份">
        <el-option v-for="item in areaJson" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select :disabled="!province" v-model="city" class="2" placeholder="请选择城市" style="margin-left: 10px;">
        <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select :disabled="!province || !city" v-model="area" class="3" placeholder="请选择区域" style="margin-left: 10px;">
        <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select :disabled="!province || !city || !area" v-model="town" class="4" placeholder="请选择乡镇" style="margin-left: 10px;">
        <el-option v-for="item in selectTown" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AllArea from '../../lib/pcas-code.json'
// console.log(AllArea)

const province = ref('')
const city = ref('')
const area = ref('')
const town = ref('')

const areaJson = ref(AllArea)

let selectCity = computed(() => {
    if (province.value) {
        return areaJson.value.find(item => item.code === province.value)?.children
    }
    else {
        return []
    }
})

let selectArea = computed(() => {
    if (city.value) {
        console.log(city.value)
        return selectCity.value.find(item => item.code === city.value)?.children
    }
    else {
        return []
    }
})

let selectTown = computed(() => {
    if (area.value) {
        return selectArea.value.find(item => item.code === area.value)?.children
    }
    else {
        return []
    }
})
</script>

<style scoped></style>
```

#### 可以进行数据选择，但是只能进行第一次数据选择

> ​	![WARNING]
>
> Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'find')

用`watch`来处理

```vue
let selectCity = ref<any>([])
let selectArea = ref<any>([])
let selectTown = ref<any>([])
watch(()=>province.value, val=>{
    if (val) {
        let area = areaJson.value.find(item => item.code === province.value)?.children
        selectCity.value = area
    }
})

watch(()=>city.value, val=>{
    if  (val) {
        let city = selectCity.value.find(item => item.code === val)?.children
        selectArea.value = city
    }
})

watch(()=>area.value, val=>{
    if  (val) {
        let some = selectArea.value.find(item => item.code === val)?.children
        selectTown.value = some
    }
})
```

#### 数据发生变化，那么后续的`select`里面的数据需要置空

```vue
watch(()=>province.value, val=>{
    if (val) {
        let area = areaJson.value.find(item => item.code === province.value)?.children
        selectCity.value = area
    }
    city.value = ''
    area.value = ''
    town.value = ''
})

watch(()=>city.value, val=>{
    if  (val) {
        let city = selectCity.value.find(item => item.code === val)?.children
        selectArea.value = city
    }
    area.value = ''
    town.value = ''
})

watch(()=>area.value, val=>{
    if  (val) {
        let some = selectArea.value.find(item => item.code === val)?.children
        selectTown.value = some
    }
    town.value = ''
})
```

#### 添加`clearable`标记

在`el-select`在添加`clearable`标记，选择下拉数据会出现删除的按钮

```vue
<template>
    <el-select clearable v-model="province" class="1" placeholder="请选择省份">
        <el-option v-for="item in areaJson" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable :disabled="!province" v-model="city" class="2" placeholder="请选择城市" style="margin-left: 10px;">
        <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable :disabled="!province || !city" v-model="area" class="3" placeholder="请选择区域" style="margin-left: 10px;">
        <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable :disabled="!province || !city || !area" v-model="town" class="4" placeholder="请选择乡镇" style="margin-left: 10px;">
        <el-option v-for="item in selectTown" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AllArea from '../../lib/pcas-code.json'
// console.log(AllArea)

const province = ref('')
const city = ref('')
const area = ref('')
const town = ref('')

const areaJson = ref(AllArea)
let selectCity = ref<any>([])
let selectArea = ref<any>([])
let selectTown = ref<any>([])
watch(()=>province.value, val=>{
    if (val) {
        let area = areaJson.value.find(item => item.code === province.value)?.children
        selectCity.value = area
    }
    city.value = ''
    area.value = ''
    town.value = ''
})

watch(()=>city.value, val=>{
    if  (val) {
        let city = selectCity.value.find(item => item.code === val)?.children
        selectArea.value = city
    }
    area.value = ''
    town.value = ''
})

watch(()=>area.value, val=>{
    if  (val) {
        let some = selectArea.value.find(item => item.code === val)?.children
        selectTown.value = some
    }
    town.value = ''
})
</script>

<style scoped></style>
```

### 通知菜单

#### 自定义控件

<img src="https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230922-20230922160832.png" style="zoom:80%;" />

`vueelement\src\components\mynotification\index.ts`

```tsx
//自定义notification组件
import {App}  from "vue";
import notification from "./src/index.vue"

//让这个组件可以通过use形式使用
export default {
    install(app: App) {
        app.component('m-notification', notification)
    }
}
```

`vueelement\src\components\index.ts`

```tsx
import {App} from "vue";
import notification from "./mynotification";

const components = [notification];

export default {

    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}
```

`vueelement\src\views\notificationView.vue`

```vue
<template>
    <div>
        <m-notification></m-notification>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
```

`vueelement\src\main.ts`注册组件

```javascript
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from  './components'  //以后自定义组件可以直接放到components下

// 导入el-icon图标
import * as EIIconMoudle from '@element-plus/icons-vue'

const app = createApp(App)
for(let iconName in EIIconMoudle){
    //ElementPlus.use(EIIconMoudle[iconName])
    app.component(iconName,EIIconMoudle[iconName])
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(mUI)
app.mount('#app')

```

`vueelement\src\components\mynotification\src\index.vue`

```javascript
<template>
    <div>
        <el-badge :value="value" class="item" :is-dot="isDot" :max="max" >
            <el-icon>
                <component :is="icon" />
            </el-icon>
        </el-badge>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
let props = defineProps({
    //显示icon
    icon: {
        type: String,
        default: 'Bell'
    },
    //通知数量
    value: {
        type: [String, Number],//可选
        default: ''
    },
    //最大值
    max: {
        type: Number,
    },
    //是否显示小圆点
    isDot: {
        type: Boolean,
        default: false
    },
})
</script>

<style scoped>
svg {
    width: 1.5em;
    height: 1.5em;
}

.el-icon {
    width: 1.5em;
    height: 1.5em;
}
</style>
```

`vueelement\src\views\notificationView.vue`

```javascript
<template>
    <div>
        <m-notification :value="15"></m-notification>
        <br>
        <m-notification :value="45" :max="30"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true" icon="ChatRound"></m-notification>
    </div>
</template>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230922-20230922170907.png)

#### 	消息响应的弹出框

`vueelement\src\components\mynotification\src\index.vue`

```javascript
<template>
    <div>
        <el-popover placement="bottom" :width="300" trigger="click">
            <template #default><slot></slot></template>
            <template #reference>
                <el-badge :value="value" class="item" :is-dot="isDot" :max="max">
                    <el-icon>
                        <component :is="icon" />
                    </el-icon>
                </el-badge>
            </template>
        </el-popover>
    </div>
</template>
```

```vue
<template>
    <div>
        <m-notification :value="15"><template #default>这是一个插槽</template></m-notification>
        <!-- <br>
        <m-notification :value="45" :max="30"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true" icon="ChatRound"></m-notification> -->
    </div>
</template>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230922-20230922171627.png)

#### 自定义list组件，显示消息

参照2.8notification操作

https://www.aliyundrive.com/drive/file/resource/64e5b7e6fca6a36078aa4080a53fb5282ec5c55d

`vueelement\src\views\notificaiton\index.vue`

```vue
<template>
    <div>
        <m-notification :value="15">
            <template #default>
                <m-list :list="list" :actions="actions"  @clickItem="clickItem"
          @clickAction="clickAction">

                </m-list>
            </template>
        </m-notification>
        <!-- <br>
        <m-notification :value="45" :max="30"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true"></m-notification>
        <br>
        <m-notification :value="30" :is-dot="true" icon="ChatRound"></m-notification> -->
    </div>
</template>

<script setup lang="ts">

import {list, actions} from './data'
console.log('list', list)
console.log('actions', actions)

let clickItem = (val: any) => {
  console.log(val);
};

let clickAction = (val: any) => {
  console.log(val);
};


</script>

<style scoped></style>
```

`vueelement\src\views\notificaiton\data.ts`

```json
export const list = [
  {
    title: '通知',
    content: [
      {
        title: '蒂姆·库克回复了你的邮件',
        time: '2019-05-08 14:33:18',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
      },
      {
        title: '乔纳森·伊夫邀请你参加会议',
        time: '2019-05-08 14:33:18',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png'
      },
      {
        title: '斯蒂夫·沃兹尼亚克已批准了你的休假申请',
        time: '2019-05-08 14:33:18',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png'
      }

    ],
  },
  {
    title: '关注',
    content: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      }
    ]
  },
  {
    title: '代办',
    content: [
      {
        title: '任务名称',
        desc: '任务需要在 2017-01-12 20:00 前启动',
        tag: '未开始',
        tagType: ''
      },
      {
        title: '第三方紧急代码变更',
        desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        tag: '马上到期',
        tagType: 'danger'
      },
      {
        title: '信息安全考试',
        desc: '指派竹尔于 2017-01-09 前完成更新并发布',
        tag: '已耗时8天',
        tagType: 'warning'
      }
    ]
  },
]
export const actions = [
  {
    text: '清空代办',
    icon: 'delete'
  },
  {
    text: '查看更多',
    icon: 'edit'
  },
]
```

`vueelement\src\components\mynotification\src\index.vue`

```vue
<template>
    <div>
        <el-popover placement="bottom" :width="300" trigger="click">
            <template #default><slot></slot></template>
            <template #reference>
                <el-badge :value="value" class="item" :is-dot="isDot" :max="max">
                    <el-icon>
                        <component :is="icon" />
                    </el-icon>
                </el-badge>
            </template>
        </el-popover>
    </div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';
let props = defineProps({
    //显示icon
    icon: {
        type: String,
        default: 'Bell'
    },
    //通知数量
    value: {
        type: [String, Number],//可选
        default: ''
    },
    //最大值
    max: {
        type: Number,
    },
    //是否显示小圆点
    isDot: {
        type: Boolean,
        default: false
    },
})
// import { onMounted, watch, reactive } from 'vue';
// import axios from 'axios'
// import config from '../../../config'
// let list = reactive([])
// onMounted(() => {
//     getData()
// });
// watch(list, () => {
//     console.log('watch', list)
// })

// function getData() {
//     // request.get(config.mockApi + '/api/test1').then((res: any) => {
//     //     console.log('res', res)
//     //     testData= res
        
//     //     console.log('requst', testData)
//     // })
//     axios.get(config.mockApi + '/api/test1').then((res)=>{
//         list= res.data['options']
//         console.log('requst', list)
//     })
// }


</script>

<style scoped>
svg {
    width: 1.5em;
    height: 1.5em;
}

.el-icon {
    width: 1.5em;
    height: 1.5em;
}
</style>
```

`vueelement\src\components\list\src\index.vue`

```vue
<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div class="container" @click="clickItem(item1, index1)" v-for="(item1, index1) in item.content" :key="index1">
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div class="a-item" v-for="(action, i) in actions" :key="i" :label="action.text" @click="clickAction(action, i)">
              <div class="a-icon" v-if="action.icon">
                <el-icon>
                  <component :is="action.icon" />
                </el-icon>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ListItem, ListOptions, ActionOptions } from "./types";
let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
let emits = defineEmits(["clickItem", "clickAction"]);

let clickItem = (item: ListItem, index: number) => {
  emits("clickItem", { item, index });
};

let clickAction = (item: ActionOptions, index: number) => {
  emits('clickAction', { item, index });
}

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background: #e6f6ff;
  }

  .avatar {
    flex: 1;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>

```
`vueelement\src\components\list\src\types.ts`

```vue

// 列表的每一项
export interface ListItem{
    // 头像
    avatar?: string,//加？可选
    //标题
    title?: string,
    // 描述
    description?:string,
    //  时间
    time?: string,
    // 标签
    tag?: string,
    // 表情状态
    tagType?: 'success' | 'info' | 'warning' | 'danger' | '',

}
// 列表
export interface ListOptions{
    title: string,
    content:ListItem[]
}
// 操作选项
export interface ActionOptions{
    text: string,
    icon?: string,
}
```

`vueelement\src\components\list\index.ts`

```vue
//自定义notification组件
import {App}  from "vue";
import list from "./src/index.vue"

//让这个组件可以通过use形式使用
export default {
    install(app: App) {
        app.component('m-list', list)
    }
}
```

#### 通过fastmock方式读取数据并传入页面

`vueelement\src\views\notificaiton\index.vue`

```vue
<script setup lang="ts">

// import {list, actions} from './data'
// console.log('list1', list)
// console.log('actions1', actions)
// let clickItem = (val: any) => {
//   console.log(val);
// };

// let clickAction = (val: any) => {
//   console.log(val);
// };
import { onMounted, watch, reactive } from 'vue';
import axios from 'axios'
import config from '../../config'

let data = reactive([])
onMounted(() => {
    getData()
});
watch(data, () => {
    console.log('watch', data)
})
let list = reactive([])
let actions = reactive([])
function getData() {
    axios.get(config.mockApi + '/api/test1').then((res)=>{
        data= res.data['options']
        list = data['list']
        actions = data['actions']
    })
}


</script>
```

### 菜单封装

#### 菜单的二次封装

`vueelement\src\components\menu\src\index.vue`

```vue
<template>
    <div>
        <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs" class="el-menu-vertical-demo">
            <template v-for="(item, index) in data" :key="index">
                <el-menu-item v-if="!item.children || !item.children.length" :index="item.index">
                    <el-icon v-if="item.icon">
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>

                <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
                    <template #title>
                        <el-icon v-if="item.icon">
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item1.index">
                        <el-icon v-if="item1.icon">
                            <component :is="item1.icon"></component>
                        </el-icon>
                        <span>{{ item1.name }}</span>
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MenuItem } from "./types";

let props = defineProps({
    data: {
        type: Array as PropType<MenuItem[]>,
        required: true,
    },
    // 默认选中菜单
    defaultActive: {
        type: String,
        default: "",
    },
    // 是否是路由模式
    router: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped></style>
```

`vueelement\src\components\menu\src\types.ts`

```vue
export interface MenuItem {
    icon?: string; // 图标
    i?: any; // 
    name: string;  // 导航名字
    index: string; // 标识
    children?: MenuItem[]; // 子菜单
  }
```

`vueelement\src\components\menu\index.ts`

```vue
//自定义notification组件
import {App}  from "vue";
import menu from "./src/index.vue"

//让这个组件可以通过use形式使用
export default {
    install(app: App) {
        app.component('m-menu', menu)
    }
}
```

`vueelement\src\views\menu\index.vue`

```vue
<template>
    <div>
        <m-menu :data="data1" defaultActive="2" a="2"></m-menu>
    </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
      },
    ],
  },
];
</script>

<style scoped>

</style>
```



#### 安装jsx模块

```bash
npm -d i @vitejs/plugin-vue-jsx
```

`vueelement\vite.config.ts`

```vue
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host:'localhost',
    port:8000  
  }
})

```

`vueelement\src\components\menu\src\menu.tsx`

```vue
// tsx jsx 的组件对应递归比较合适
import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import * as Icons from '@element-plus/icons-vue'
import './menu.scss'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中菜单
    defaultActive: {
      type: String,
      default: "",
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
    // 匹配后端的字段， 在不知道组件将会使用什么字段名的情况，可以使用组件的时候再传值
    // 例如： <w-menu name='a', icon='b',children='c'></w-menu>
    //  // 菜单标题的键名
    //  name: {
    //   type: String,
    //   default: 'name'
    // },
    // // 菜单标识的键名
    // index: {
    //   type: String,
    //   default: 'index'
    // },
    // // 菜单图标的键名
    // icon: {
    //   type: String,
    //   default: 'icon'
    // },
    // // 菜单子菜单的键名
    // children: {
    //   type: String,
    //   default: 'children'
    // },
  },

  setup(props, ctx) {
    // console.log(props.data,'data');

    // 封装渲染无限层级菜单的方法
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        // item.i = item.icon;
        item.i = (Icons as any)[item.icon!]
        // 处理sub-menu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            );
          },
        };

        // 递归渲染children
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }

        // 正常渲染普通菜单
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        );
      });
    };

    let attrs = useAttrs()

    return () => {
      return (
        <el-menu
          class="menu-icon-svg"
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
         >
          {renderMenu(props.data)}
        </el-menu>
      )
    };
  },
});

```

`vueelement\src\components\menu\index.ts`注册组件

```vue
//自定义notification组件
import {App}  from "vue";
import menu from "./src/index.vue"
import infiniteMenu from  './src/menu'
//让这个组件可以通过use形式使用
export default {
    install(app: App) {
        app.component('m-menu', menu)
        app.component('m-infinite-menu', infiniteMenu)
    }
}
```

`vueelement\src\views\menu\index.vue`

```vue
import { ElContainer } from 'element-plus';
<template>
    <div class="container">
        <!-- <div>
            <m-menu :data="data1" defaultActive="2" a="2" style="width: 200px"></m-menu>
        </div>
        <div style="width: 200px">
            <m-infinite-menu :data="data2" defaultActive="2" text-color="green"></m-infinite-menu>
        </div> -->

        <el-container>
            <el-aside width="40%"> <m-menu :data="data1" defaultActive="2" a="2" background-color="#263445" text-color="#fff"></m-menu></el-aside>
            <el-main style="padding:0px"><m-infinite-menu :data="data2" defaultActive="2"
                    text-color="green"></m-infinite-menu></el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
let data1 = [
    {
        name: "导航一",
        index: "1",
        icon: "Document",
    },
    {
        name: "导航二",
        index: "2",
        icon: "Document",
    },
    {
        name: "导航三",
        index: "3",
        icon: "Document",
        children: [
            {
                name: "导航3-1",
                index: "3-1",
                icon: "Document",
            },
        ],
    },
];
let data2 = [
    {
        name: "导航一",
        index: "1",
        icon: "Document",
    },
    {
        name: "导航二",
        index: "2",
        icon: "Document",
    },
    {
        name: "导航三",
        index: "3",
        icon: "Document",
        children: [
            {
                name: "导航3-1",
                index: "3-1",
                icon: "Document",
                children: [
                    {
                        name: "导航3-1-1",
                        index: "3-1-1",
                        icon: "Document",
                        children: [
                            {
                                name: "导航3-1-1-1",
                                index: "3-1-1-1",
                                icon: "Document",
                                children: [
                                    {
                                        name: "导航3-1-1-1",
                                        index: "3-1-1-1",
                                        icon: "Document",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
</script>

<style scoped>
.container{
    background-color:#red;
    font-size: 16px;
    color: #fff;
}
</style>
```

### highlightjs引用

[vue3：基于highlight实现代码高亮、显示代码行数、添加复制功能](https://blog.csdn.net/weixin_41897680/article/details/124925222)

`src\components\myhighlight\src\code.scss`

```scss
/* 语法高亮 */
.hljs-container {
    position: relative;
    display: block;
    display: flex;
    width: max-content;
    margin-left: 10px;
    padding: 0px 10px 2px 0;
    overflow-x: hidden;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    background: #21252b;
    box-shadow: 0px 0px 7px 12px rgba(0, 0, 0, 0.4);
    border-radius: 0.5em;
}

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(lang);
    color: aqua;    
    // font-family: 'Courier New', Courier, monospace;
}

/** 滚动条 */
:deep(.hljs) {
    overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
    width: 12px !important;
    height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}

/** 行数样式 */
.hljs-code-number {
    padding: 0px 10px 0;
    color: #d1d8e6;
    font-size: 12px;
    list-style: none;
    border-right: 1px solid #d1d8e6;
    margin-top: 30px;
    margin-bottom: 30px;
}

/** 复制样式 */
.hljs-copy {
    position: absolute;
    top: 50px;
    right: 30px;
    display: none;
    padding: 0 10px;
    color: #66a9ff;
    font-size: 10px;
    background-color: #ecf5ff;
    border-radius: 3px;
    cursor: pointer;
}
```



`src\components\myhighlight\src\index.vue`

```vue
<template>
  <!-- <div>
    <pre v-highlight><code class="language-javascript hljs">{{ content }}</code></pre>
  </div> -->

  <div class="hljs-container" :language=" lang " v-code>
        <highlightjs :language="lang" :autodetect="false" :code="code"></highlightjs>
    </div>
</template>

<script setup lang="ts">
let props = defineProps({
  code: {
    type: String,
    default: ''
  },
  lang: {
    type: String,
    default: 'js'
  }
}
)
import vCode from './line';
</script>

<style lang="scss">
@import "./code.scss"
</style>
```

`src\components\myhighlight\src\line.ts`

```typescript
import './code.scss';
const vCode = {
    mounted(el: any) {
        //获取代码片段
        let code = el.querySelector('code.hljs')
        let pre = document.getElementsByTagName('pre')[0]
        let html = code?.innerHTML
        let size = html.split('\n').length

        //插入行数
        let ul = document.createElement('ul')
        for (let i = 1; i <= size; i++) {
            let li = document.createElement('li')
            li.innerText = i + ''
            ul.appendChild(li)
        }

        ul.classList.add('hljs-code-number')

        el.insertBefore(ul, pre)

        //插入复制功能
        let copy = document.createElement('div')
        copy.classList.add('hljs-copy')
        copy.innerText = '复制'
        //添加点击事件
        copy.addEventListener('click', () => {
            //创建一个输入框
            let textarea = document.createElement('textarea')
            document.body.appendChild(textarea);
            textarea.setAttribute('readonly', 'readonly')
            textarea.value = code.innerText;
            textarea.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                copy.innerText = '复制成功'
            }
            document.body.removeChild(textarea);
        })

        pre.appendChild(copy)

        //鼠标移入显示复制按钮
        el.addEventListener('mouseout', () => {
            copy.innerText = '复制'
            copy.style.display = "none"
        })
        el.addEventListener('mouseover', () => {
            copy.style.display = "block"

        })
    }
}

export default vCode

```

`src\components\myhighlight\index.ts`

```typescript
//自定义notification组件
import {App}  from "vue";
import myHighLight from "./src/index.vue"

//让这个组件可以通过use形式使用
export default {
    install(app: App) {
        app.component('m-high-light', myHighLight)
    }
}
```

`src\components\index.ts`

```typescript
import {App} from "vue";
import notification from "./mynotification";
import list from "./list";
import menu from "./menu";
import pickcolor from "./pickcolor";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseCity from "./chooseCity";
import myhighlight from "./myhighlight";
const components = [
    notification,
    list,
    menu,
    pickcolor,
    progress,
    chooseTime,
    chooseCity,
    myhighlight
];

export default {

    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}
```

`src\main.ts`

```typescript
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from  './components'

// 导入el-icon图标
import * as EIIconMoudle from '@element-plus/icons-vue'
import axios from 'axios'
import config from './config'
import request from './utils/request'
import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/lib/common'
// import hljs from 'highlight.js'
import hljsVuePlugin from '@highlightjs/vue-plugin'
console.log("环境变量==>", import.meta.env)
console.log("mockurl:", config.mockApi)
// axios.get(config.mockApi + '/api/test1').then((res)=>{
//     console.log(res.data)
// })

// request.get(config.mockApi + '/api/test1', {}).then((res: any) => {
//     console.log('res', res)
// })
const app = createApp(App)
for(let iconName in EIIconMoudle){
    //ElementPlus.use(EIIconMoudle[iconName])
    app.component(iconName,EIIconMoudle[iconName])
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(mUI)
// app.directive('highlight', function (el) {const blocks = el.querySelectorAll('pre code');blocks.forEach((block) => {
//     hljs.highlightBlock(block);// 从这开始是设置行号
// block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g,`</li><li class="line">`)}</li></ol>`;});
// });
// app.use(hljs.vuePlugin)// 引入代码高亮，并进行全局注册
app.use(hljsVuePlugin)
app.mount('#app')
app.config.globalProperties.$request = request
```

`src\views\myhighlight\index.vue`

```vue
<template>
    <!-- <div class="code1">
        <m-high-light :code="codecpp" :lang="cpp"></m-high-light>
    </div> -->
    <div class="code2">
        <m-high-light :code="code" :lang="lang"></m-high-light>
    </div>
    
</template>

<script setup lang="ts">
import {ref} from 'vue'
let code = `let a = 1;
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
<div class="hljs-container" codetype="JavaScript" v-code>
    <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>
</div>`;

let lang = ref('javascript')
// let codecpp='#include <iostream>\n using namespace std;\n int main()\n{\n    cout << "Hello World!" << endl;\n    return 0;\n}\n'
// let cpp = ref('cpp')
</script>

<style scoped>

</style>
```





## 问题

### vue3+ts中main.js中找不到模块“./app”

在`env.d.ts`文件中添加代码

```javascript
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}
```

在`tsconfig.json`文件中

```javascript
"include": [ 
    "env.d.ts", // 必须包含这个文件
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.vue",
  ],
```

### 请考虑使用 "--resolveJsonModule" 导入带 ".json" 扩展的模块

根据提示，我们在`tsconfig.json`中加入此配置后就能解决

```javascript
{
  "compilerOptions": {
    "skipLibCheck": true,
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

###  VUE3+Typescript 引用process提示错误

依照提示 先安装

```
npm i --save-dev @types/node
```

然后在tsconfig.json的compilerOptions.types节点添加node

```
{
  "compilerOptions": {
　　 ..."types": ["vite/client","node"],
    ...
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

解决办法：在vite.config.js文件中添加`define: { 'process.env': {} }`

<img src="https://img-blog.csdnimg.cn/f92c506ba7944a5eba59e41b816898f9.png" alt="img" style="zoom: 50%;" />

console.log("环境变量==>", import.meta.env)

不用process，用vite配置里的数据