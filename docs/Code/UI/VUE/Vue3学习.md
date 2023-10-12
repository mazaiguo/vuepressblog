# VUE开始

## Vue3安装

[下载Vue.js](https://unpkg.com/vue@3.2.36/dist/vue.global.js)

> 前提条件
>
> - 熟悉命令行
> - 已安装 16.0 或更高版本的 [Node.js](https://nodejs.org/)

## 使用 CDN 方法

以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。

- **Staticfile CDN（国内）** : https://cdn.staticfile.org/vue/3.0.5/vue.global.js
- **unpkg**：https://unpkg.com/vue@next, 会保持和 npm 发布的最新的版本一致。
- **cdnjs** : https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js

## NPM 方法

由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照：[使用淘宝 NPM 镜像](https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm)。

npm 版本需要大于 3.0，如果低于此版本需要升级它：

```bash
# 查看版本
$ npm -v
2.3.0

#升级 npm
cnpm install npm -g


# 升级或安装 cnpm
npm install cnpm -g
```

在用 Vue.js 构建大型应用时推荐使用 cnpm 安装，cnpm 能很好地和 Webpack 或 Browserify 模块打包器配合使用，然后在命令行中运行以下命令：

```
# 最新稳定版
$ npm init vue@latest
```

这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。

```bash
$ npm init vue@latest
Need to install the following packages:
  create-vue@3.6.1
Ok to proceed? (y) y

Vue.js - The Progressive vue Framework
# 这里需要进行一些配置，项目名输入 runoob-vue3-test，其他默认回车即可
&#x2714; Project name: … runoob-vue3-test
&#x2714; Add TypeScript? … No / Yes
&#x2714; Add JSX Support? … No / Yes
&#x2714; Add Vue Router for Single Page Application development? … No / Yes
&#x2714; Add Pinia for state management? … No / Yes
&#x2714; Add Vitest for Unit Testing? … No / Yes
&#x2714; Add an End-to-End Testing Solution? › No
&#x2714; Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/tianqixin/runoob-test/runoob-vue3/runoob-vue3-test...

Done. Now run:

  cd runoob-vue3-test
  npm install
  npm run dev
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。

在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```bash
$ cd runoob-vue3-test
$ npm install
$ npm run dev
  VITE v4.3.4  ready in 543 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Vite

Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目，语法格式如下：

```bash
npm init vite-app <project-name>
```

创建项目 runoob-vue3-test2：

```bash
$  npm init vite-app runoob-vue3-test2
```

运行项目:

```bash
$ cd runoob-vue3-test2
$ cnpm install
$ cnpm run dev
> runoob-vue3-test2@0.0.0 dev /Users/tianqixin/runoob-test/vue3/runoob-vue3-test2
> vite

[vite] Optimizable dependencies detected:
vue

  Dev server running at:
  > Local:    http://localhost:4000/
```

打开 **http://localhost:4000/**，显示如下：

# 使用

## 模板语法

### 文本插值

```
<span>Message: {{ msg }}</span>
```

```vue

<template>
<div id="root">
    <span>Message: {{ msg }}</span>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>
```

### 原始 HTML

双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/api/built-in-directives.html#v-html)：

```vue
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

```vue
rawHtml:'<a href="https://www.baidu.com">百度一下 你就知道</a>',
```

> 安全警告
>
> 在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 [XSS 漏洞](https://zh.wikipedia.org/wiki/跨網站指令碼)。请仅在内容安全可信时再使用 `v-html`，并且**永远不要**使用用户提供的 HTML 内容。

### Attribute 绑定

#### 动态绑定

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 [`v-bind` 指令](https://cn.vuejs.org/api/built-in-directives.html#v-bind)：

```html
<div v-bind:id="dynamicId"></div>
```

`v-bind` 指令指示 Vue 将元素的 `id` attribute 与组件的 `dynamicId` 属性保持一致。如果绑定的值是 `null` 或者 `undefined`，那么该 attribute 将会从渲染的元素上移除。

因为 `v-bind` 非常常用，我们提供了特定的简写语法：

```vue
<div :id="dynamicId"></div>
```

#### 动态绑定多个值

```vue
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
```

```vue
<div v-bind="objectOfAttrs"></div>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230908-20230908101634.png)

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230908-20230908101705.png)

```vue
<template>
<div v-bind="objectOfAttrs">
    <h1>标题一{{ name }}</h1>
    <h2>标题二{{ age }}</h2>
    <h3>标题三{{ hobby }}</h3>
    <h4>标题四{{ obj }}</h4>
    <span>Message: {{ msg }}</span>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
</template>

<script>
// import axios from 'axios'; 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '张三', 
      age: 20,
      hobby: '篮球',
      obj: {
        wife: '迪丽热巴',
        children: ['小名', '小二'],
        skills: ['Java', 'C++', 'Python'],
        isMarried: true,
        isSingle: false,
        isHandsome: true,
        isRich: false,
        isSleepy: false,
        isEat: false,
        isWork: false,
      },
      rawHtml:'<a href="https://www.baidu.com">百度一下 你就知道</a>',
      id:'root',
      dynamicId: 'dynamicId',
      objectOfAttrs : {
        id: 'container',
        class: 'wrapper'
      },
    }
  }
}
</script>
```

### 使用 vue 表达式

```vue
<div :id="`list-${id}`">
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
</div>
```



### 指令 Directives

指令是带有 `v-` 前缀的特殊 attribute。Vue 提供了许多[内置指令](https://cn.vuejs.org/api/built-in-directives.html)，包括上面我们所介绍的 `v-bind` 和 `v-html`。

指令 attribute 的期望值为一个 vue 表达式 (除了少数几个例外，即之后要讨论到的 `v-for`、`v-on` 和 `v-slot`)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 [`v-if`](https://cn.vuejs.org/api/built-in-directives.html#v-if) 为例：

```vue
<!-- 根据seen的值判定是否显示 -->
<p v-if="seen">Now you see me</p>
```
### 参数 Arguments

这里 `href` 就是一个参数，它告诉 `v-bind` 指令将表达式 `url` 的值绑定到元素的 `href` attribute 上。在简写中，参数前的一切 (例如 `v-bind:`) 都会被缩略为一个 `:` 字符。

`v-on` 有一个相应的缩写，即 `@` 字符

```
<a v-bind:href="url"> 百度一下 </a>
url: 'https://www.baidu.com',

<p>Using v-html directive: <span v-html="rawHtml"></span></p>
rawHtml:'<a href="https://www.baidu.com">百度一下 你就知道</a>',
```

### 动态参数

同样在指令参数上也可以使用一个 vue 表达式，需要包含在一对方括号内：

```vue
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```



> 
>
> 动态参数中表达式的值应当是一个字符串，或者是 `null`。特殊值 `null` 意为显式移除该绑定。其他非字符串的值会触发警告。
>
> 动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的

### 修饰符 Modifiers

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`：

```vue
<form @submit.prevent="onSubmit">...</form>
```

之后在讲到 [`v-on`](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers) 和 [`v-model`](https://cn.vuejs.org/guide/essentials/forms.html#modifiers) 的功能时，你将会看到其他修饰符的例子。

最后，在这里你可以直观地看到完整的指令语法：

![指令语法图](https://cn.vuejs.org/assets/directive.69c37117.png)



## Class 与 Style 绑定

### 绑定 HTML class

#### 绑定对象

我们可以给 `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 class：

```vue
<div :class="{ active: isActive }"></div>
```

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的[真假值](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)。

你可以在对象中写多个字段来操作多个 class。此外，`:class` 指令也可以和一般的 `class` attribute 共存。举例来说，下面这样的状态：

```vue	
const isActive = ref(true)
const hasError = ref(false)
```

#### 绑定数组

我们可以给 `:class` 绑定一个数组来渲染多个 CSS class：

```vue
const activeClass = ref('active')
const errorClass = ref('text-danger')
```

```bash
<div :class="[activeClass, errorClass]"></div>
```

渲染的结果是：

```bash
<div class="active text-danger"></div>
```

如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式：

```bash
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

`errorClass` 会一直存在，但 `activeClass` 只会在 `isActive` 为真时才存在。

然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象：

```bash
<div :class="[{ active: isActive }, errorClass]"></div>
```



## 列表渲染

### `v-for`

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的**别名**：

```vue
<template>
<div>
    <li v-for="item in items">
        {{ item.message }}
    </li>
</div>
</template>

<script>
export default {
    data(){
        return {
            items: 
                [{ message: 'Foo' }, { message: 'Bar' }],
        }
    }
}
</script>
```

![](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230908-20230908171239.png)

在 `v-for` 块中可以完整地访问父作用域内的属性和变量。`v-for` 也支持使用可选的第二个参数表示当前项的位置索引。

```vue
<template>
<div>
    <!-- <li v-for="item in items">
        {{ item.message }}
    </li> -->
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</div>
</template>

<script>
import { ref } from 'vue';
export default {
    data(){
        return {
            parentMessage: 'Parent',
            items: 
                [{ message: 'Foo' }, { message: 'Bar' }],
        }
    }
}
</script>
```

结果如下所示：

* Parent - 0 - Foo

* Parent - 1 - Bar

### `v-for` 与对象

你也可以使用 `v-for` 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 `Object.keys()` 的返回值来决定。

```vue
<template>
<div>
    <!-- <li v-for="item in items">
        {{ item.message }}
    </li> -->
    <!-- <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li> -->
    <ul>
        <li v-for="(value, key, index) in myObject">
            {{ index }}. {{ key }}: {{ value }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {
            parentMessage: 'Parent',
            items: 
                [{ message: 'Foo' }, { message: 'Bar' }],
            myObject:{
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
        }
    }
}
</script>
```

- 0. title: How to do lists in Vue
- 1. author: Jane Doe
- 2. publishedAt: 2016-04-10



与如下代码一样的效果：

```vue
<div>
    <!-- <li v-for="item in items">
        {{ item.message }}
    </li> -->
    <!-- <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li> -->
    <ul>
        <li v-for="(value, key, index) in myObject">
            {{ index }}. {{ key }}: {{ value }}
        </li>
    </ul>
</div>
</template>

<script setup>
import { reactive } from 'vue'
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>
```

**script**需要添加**setup**的申明





## 声明响应式状态

### `ref()`

```vue
import { ref } from 'vue'

const count = ref(0)
```

`ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 ref 对象中返回：

```vue
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

要在组件模板中访问 ref，请从组件的 `setup()` 函数中声明并返回它们：

```vue
import { ref } from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}
```

注意，在模板中使用 ref 时，我们**不**需要附加 `.value`。为了方便起见，当在模板中使用时，ref 会自动解包 (有一些[注意事项](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#caveat-when-unwrapping-in-templates))。

对于更复杂的逻辑，我们可以在同一作用域内声明更改 ref 的函数，并将它们作为方法与状态一起公开：

```vue
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // 在 vue 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}
```

### `<script setup>`

在 `setup()` 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用[单文件组件 (SFC)](https://cn.vuejs.org/guide/scaling-up/sfc.html) 来避免这种情况。我们可以使用 `<script setup>` 来大幅度地简化代码：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

```vue
<script setup> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。你可以理解为模板是在同一作用域内声明的一个 vue 函数——它自然可以访问与它一起声明的所有内容。
```

> 
>
> 在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + `<script setup>` 的语法，因为大多数 Vue 开发者都会这样使用。
>
> 如果你没有使用单文件组件，你仍然可以在 [`setup()`](https://cn.vuejs.org/api/composition-api-setup.html) 选项中使用组合式 API。

## 响应式基础

### `ref()`

在组合式 API 中，推荐使用 [`ref()`](https://cn.vuejs.org/api/reactivity-core.html#ref) 函数来声明响应式状态：

```vue
<template>
    <div>{{ count }}</div>
    <button @click="count++">{{ count }}</button>
</div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(0)
</script>
```

另一种写法：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

### `reactive()`

还有另一种声明响应式状态的方式，即使用 `reactive()` API。与将内部值包装在特殊对象中的 ref 不同，`reactive()` 将使对象本身具有响应性：

```vue
<template>
    <div>{{ state.count }}</div>
    <button @click="state.count++">{{ state.count }}</button>
</div>
</template>

<script setup>
import { reactive} from 'vue'
const state = reactive({
  count: 0
})
</script>
```

### `reactive()` 的局限性

1. **有限的值类型**：它只能用于对象类型 (对象、数组和如 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/en-US/docs/Web/vue/Reference/Global_Objects#keyed_collections))。它不能持有如 `string`、`number` 或 `boolean` 这样的[原始类型](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)。

2. **不能替换整个对象**：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：

   ```vue
   let state = reactive({ count: 0 })
   
   // 上面的 ({ count: 0 }) 引用将不再被追踪
   // (响应性连接已丢失！)
   state = reactive({ count: 1 })
   ```

3.**对解构操作不友好**：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：

```vue
const state = reactive({ count: 0 })

// 当解构时，count 已经与 state.count 断开连接
let { count } = state
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count)
```

4.由于这些限制，我们建议使用 `ref()` 作为声明响应式状态的主要 API。

### 在模板中解包的注意事项

在模板渲染上下文中，只有顶级的 ref 属性才会被解包。

在下面的例子中，`count` 和 `object` 是顶级属性，但 `object.id` 不是：

```vue
const count = ref(0)
const object = { id: ref(1) }
```

因此，这个表达式按预期工作：

```vue
{{ count + 1 }}
```

但这个**不会**：

```bash
{{ object.id + 1 }}
```

渲染的结果将是 `[object Object]1`，因为在计算表达式时 `object.id` 没有被解包，仍然是一个 ref 对象。为了解决这个问题，我们可以将 `id` 解构为一个顶级属性：

```vue
const { id } = object
```

```bash
{{ id + 1 }}
```

现在渲染的结果将是 `2`。

另一个需要注意的点是，如果 ref 是文本插值的最终计算值 (即 `{{ }}` 标签)，那么它将被解包，因此以下内容将渲染为 `1`：

```bash
{{ object.id }}
```

该特性仅仅是文本插值的一个便利特性，等价于 `{{ object.id.value }}`。

## 事件处理

### 监听事件

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 vue。用法：`v-on:click="handler"` 或 `@click="handler"`。

事件处理器 (handler) 的值可以是：

1. **内联事件处理器**：事件被触发时执行的内联 vue 语句 (与 `onclick` 类似)。
2. **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径。

#### 内联事件处理器

内联事件处理器通常用于简单场景，例如：

```vue
<template>
    <div>{{ state.count }}</div>
    <button @click="state.count++">{{ state.count }}</button>
</div>
</template>

<script setup>
import { reactive} from 'vue'
const state = reactive({
  count: 0
})
</script>
```

#### 方法事件处理器

随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 `v-on` 也可以接受一个方法名或对某个方法的调用。

举例来说：

```vue
<template>
    <!-- `greet` 是上面定义过的方法名 -->
    <button @click="greet">Greet</button>
</div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
</script>
```

方法事件处理器会自动接收原生 DOM 事件并触发执行。在上面的例子中，我们能够通过被触发事件的 `event.target.tagName` 访问到该 DOM 元素。

#### 方法与内联事件判断

模板编译器会通过检查 `v-on` 的值是否是合法的 vue 标识符或属性访问路径来断定是何种形式的事件处理器。举例来说，`foo`、`foo.bar` 和 `foo['bar']` 会被视为方法事件处理器，而 `foo()` 和 `count++` 会被视为内联事件处理器。

#### 在内联处理器中调用方法

除了直接绑定方法名，你还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：

```vue
<template>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
</div>
</template>

<script setup>
function say(message) {
  alert(message)
}
</script>

```

#### 在内联事件处理器中访问事件参数

有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数：

```vue
<template>
    <div id="objectOfAttrs">
        <!-- 使用特殊的 $event 变量 -->
        <button @click="warn('Form cannot be submitted yet.', $event)">
          Submit
        </button>

        <!-- 使用内联箭头函数 -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
          Submit
        </button>
	</div>
</template>

<script setup>
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>
```

### 事件修饰符

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。

为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**。修饰符是用 `.` 表示的指令后缀，包含以下这些：

- `.stop`
- `.prevent`
- `.self`
- `.capture`
- `.once`
- `.passive`

```vue
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
```

> 
>
> 使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 `@click.prevent.self` 会阻止**元素及其子元素的所有点击事件的默认行为**，而 `@click.self.prevent` 则只会阻止对元素本身的点击事件的默认行为。

`.capture`、`.once` 和 `.passive` 修饰符与[原生 `addEventListener` 事件](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options)相对应：

```vue
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>

<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
```

`.passive` 修饰符一般用于触摸事件的监听器，可以用来[改善移动端设备的滚屏性能](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善滚屏性能)。

> 
>
> 请勿同时使用 `.passive` 和 `.prevent`，因为 `.passive` 已经向浏览器表明了你*不想*阻止事件的默认行为。如果你这么做了，则 `.prevent` 会被忽略，并且浏览器会抛出警告。

### 按键修饰符

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

```vue
!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
```

你可以直接使用 [`KeyboardEvent.key`](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。

```vue
<input @keyup.page-down="onPageDown" />
```

在上面的例子中，仅会在 `$event.key` 为 `'PageDown'` 时调用事件处理。

#### 按键别名

Vue 为一些常用的按键提供了别名：

- `.enter`
- `.tab`
- `.delete` (捕获“Delete”和“Backspace”两个按键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

#### 系统按键修饰符

你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

> ​	
>
> 在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)。在 Sun 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta 也被标识为“META”或“Meta”。

举例来说：

```vue
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```

> 
>
> 请注意，系统按键修饰符和常规按键不同。与 `keyup` 事件一起使用时，该按键必须在事件发出时处于按下状态。换句话说，`keyup.ctrl` 只会在你仍然按住 `ctrl` 但松开了另一个键时被触发。若你单独松开 `ctrl` 键将不会触发。

#### `.exact` 修饰符

`.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。

```vue
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

#### **鼠标按键修饰符**

- `.left`
- `.right`
- `.middle`

这些修饰符将处理程序限定为由特定鼠标按键触发的事件。

## 表单输入绑定

在前端处理表单时，我们常常需要将表单输入框的内容同步给 vue 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：

```html
<input
  :value="text"
  @input="event => text = event.target.value">
```

`v-model` 指令帮我们简化了这一步骤：

```vue
<input v-model="text">
```

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` property 并侦听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` property 并侦听 `change` 事件；
- `<select>` 会绑定 `value` property 并侦听 `change` 事件。

> 注意
>
> `v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将始终将当前绑定的 vue 状态视为数据的正确来源。你应该在 vue 中使用[响应式系统的 API](https://cn.vuejs.org/api/reactivity-core.html#reactivity-api-core)来声明该初始值。

### 基本用法

#### 文本

```vue
<template> 
 <p>Message is : {{ message }}</p>
 <input type="text" v-model="message" placeholder="edit me"/>
</template>   

<script setup>
import { ref } from 'vue'
const message = ref('')
</script>
```

#### 多行文本

注意在 `<textarea>` 中是不支持插值表达式的。请使用 `v-model` 来替代：

```vue
<template> 
 <p>Message is : {{ message }}</p>
 <input type="text" v-model="message" placeholder="edit me"/>
 <br>
 <span>Multiline message:</span>
 <p style="white-space: pre-line;">{{ message }}</p>
 <textarea v-model="message" placeholder="add multiple lines"></textarea>
 <br>
 <input type="checkbox" id="checkbox" v-model="checked" />
 <label for="checkbox">状态：{{ checked }}</label>
 <br>
 <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<br>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<br>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
<br>
<div>Picked: {{ picked }}</div>
<input type="radio" id="one" value= "One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

<br>
<span>选择的是: {{ selected }}</span>
<br>
<select v-model="selected">
    <option disabled value="">please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<br>
<span> Selected: {{ selected }}</span>
<br>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span> Selected: {{ mselected }}</span>
<br>
<select v-model="mselected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<br>
<span> Selected: {{ selected }}</span>
<br>
<select v-model="selected">
    <option v-for="option in options" :value="option.value">{{ option.value }}</option>
</select>
</template>   

<script setup>
import { ref } from 'vue'
const message = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const mselected = ref('')
const options = ref([
    {text: 'One', value: 'A'},
    {text: 'Two', value: 'B'},
    {text: 'Three', value: 'C'}
    ])
</script>

<style>
select[multiple] {
  width: 100px;
}
</style>
```

![image-20230912154940314](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230912-image-20230912154940314.png)

### 值绑定

对于单选按钮，复选框和选择器选项，`v-model` 绑定的值通常是静态的字符串 (或者对复选框是布尔值)：

```vue
<!-- `picked` 在被选择时是字符串 "a" -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` 只会为 true 或 false -->
<input type="checkbox" v-model="toggle" />

<!-- `selected` 在第一项被选中时为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 `v-bind` 来实现。此外，使用 `v-bind` 还使我们可以将选项值绑定为非字符串的数据类型。

```vue
<template> 
 <p>Message is : {{ message }}</p>
 <input type="text" v-model="message" placeholder="edit me"/>
 <br>
 <span>Multiline message:</span>
 <p style="white-space: pre-line;">{{ message }}</p>
 <textarea v-model="message" placeholder="add multiple lines"></textarea>
 <br>
 <input type="checkbox" id="checkbox" v-model="checked" />
 <label for="checkbox">状态：{{ checked }}</label>
 <br>
 <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<br>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<br>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
<br>
<div>Picked: {{ picked }}</div>
<input type="radio" id="one" value= "One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

<br>
<span>选择的是: {{ selected }}</span>
<br>
<select v-model="selected">
    <option disabled value="">please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<br>
<span> Selected: {{ selected }}</span>
<br>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span> Selected: {{ mselected }}</span>
<br>
<select v-model="mselected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<br>
<span> Selected: {{ selected }}</span>
<br>
<select v-model="selected">
    <option v-for="option in options" :value="option.value">{{ option.value }}</option>
</select>
<br>
<!-- `picked` 在被选择时是字符串 "a" -->
<input type="radio" v-model="picked" value="a" />
<br>
<!-- `toggle` 只会为 true 或 false -->
<input type="checkbox" v-model="toggle" />
<br>
<!-- `selected` 在第一项被选中时为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
<br>
<input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />
  <br>
  <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <br>
    <span> Selected: {{ pick }}</span>

    <select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>
<br>
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="message" v-model.trim="message"/>
<br>
<input type="number" v-model.number="age" />
</template>   

<script setup>
import { ref } from 'vue'
const message = ref('hello vue')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const mselected = ref('')
const options = ref([
    {text: 'One', value: 'A'},
    {text: 'Two', value: 'B'},
    {text: 'Three', value: 'C'}
    ])

    const dynamicTrueValue = ref('Yes')
    const dynamicFalseValue = ref('No')
    // const toggle = ref(false)
    const first = ref('aa')
    const second = ref('bb')
    const pick = ref('a')
    const age = ref(20)
</script>

<style>
select[multiple] {
  width: 100px;
}
</style>
```

![image-20230912164945463](https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230912-image-20230912164945463.png)



## 自定义组件

### emit事件函数传递

* 将mydialog的cancel传递到父对象的closedialog中

```vue
<template>
  <div v-bind="objectOfAttrs">
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <button @click="showdialog = !showdialog">弹出对话框</button>
    <my-dialog @close="closeDialog" v-if="showdialog"></my-dialog>
  </div>
</template>

<script>
// import axios from 'axios'; 
import MyDialog from './components/MyDialog.vue';


export default {
  components: { MyDialog },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '张三',
      age: 20,
      showdialog: false,
      weather: '晴天',
    }
  },
  methods: {
    closeDialog() {
      this.showdialog = false
    },
  },

  computed: {
    dayInfo() {
      return '当前时间: new Date().toISOString(), 今天天气：this.weather';
    }
  }
}
</script>
```



```vue
MyDialog.vue
------------
<template>
    <div class="dialog-bg">
        <div class="dialog">
            <div>{{ message }}</div>
            <div><input type="text"></div>
            <div class="btn-group">
                <button >确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return {
            message: 'hello world'
        }
    },
    methods:{
        cancel(){
            console.log("AAA", this)
            this.$emit("close")
        }
    }
}

</script>


```

直接用ref来传递cancel函数，那么会出现`this` is `undefined`，出现通信错误。

### Props 声明

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribute，我们会在[专门的章节](https://cn.vuejs.org/guide/components/attrs.html)中讨论)。

在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 宏来声明：

```vue
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>
```

在没有使用 `<script setup>` 的组件中，prop 可以使用 [`props`](https://cn.vuejs.org/api/options-state.html#props) 选项来声明：

```vue
export default {
  props: ['foo'],
  setup(props) {
    // setup() 接收 props 作为第一个参数
    console.log(props.foo)
  }
}
```

注意传递给 `defineProps()` 的参数和提供给 `props` 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。

```vue
export default{
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
```

在父vue中要显示表明title数据

```vue
<my-dialog title="提示" @close="closeDialog" v-if="showdialog"></my-dialog>
```

### 插槽 Slots

* 在mydialog中申请插槽

```
<div><slot></slot></div>
```

在	App.vue中写入如下代码

```vue
<my-dialog title="提示" @close="closeDialog" v-if="showdialog">
    今天天气是：<span style="color: red;">{{ weather }}</span>
</my-dialog>
```

* 定义插槽别名

  要定义别名的插槽，需要在App.vue中定义`template`去申明对应的插槽名称

  ```vue
  <div><slot name="title">{{ title }}</slot></div>
  ```

  ```vue
  <my-dialog title="提示" @close="closeDialog" v-if="showdialog">
      今天天气是：<span style="color: red;">{{ weather }}</span>
      <template #title>
        <span style="color: orange;"> 提</span>示框
      </template>
  </my-dialog>
  ```

  * 还可以添加别的属性名

    ```vue
    <div><slot :title="title" :hello="message" name="title">{{ title }}</slot></div>
    
    <template #title="titleParam">
    	<span style="color: orange;"> {{titleParam.hello}}</span>
    </template>
    ```

###  v-model修改数据

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 props：

 ```
<div><input type="text" v-model="value"></div>

computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
    
    
    <my-dialog v-model="weather" title="提示" @close="closeDialog" v-if="showdialog" >
    今天天气是：<span style="color: red;">{{ weather }}</span>
    <template #title="titleParam">
      <span style="color: orange;">提</span>示框：{{titleParam.hello}}
    </template>
    </my-dialog>
    
    
    submit(){
            this['onUpdate:modelValue']
            this.$emit("close")
        }
        
        可以直接把值传递过去this['onUpdate:modelValue']
 ```

### 生命周期

```
beforeUnmount(){
       console.log("beforeUnmount", this)
   },
   unmounted(){
       console.log("unmounted", this)
   //   this.
   },
```



---

App.vue

```vue
<template>
  <div v-bind="objectOfAttrs">
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <button @click="showdialog = !showdialog">弹出对话框</button>
    <my-dialog v-model="weather" title="提示" @close="closeDialog" v-if="showdialog" >
    今天天气是：<span style="color: red;">{{ weather }}</span>
    <template #title="titleParam">
      <span style="color: orange;">提</span>示框：{{titleParam.hello}}
    </template>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue';

export default {
  components: { MyDialog },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '张三',
      age: 20,
      showdialog: false,
      weather: '晴天',
    }
  },
  methods: {
    closeDialog() {
      this.showdialog = false
    },
  },

  computed: {
    dayInfo() {
      return '当前时间: new Date().toISOString(), 今天天气：this.weather';
    }
  }
}
</script>
```

Mydialog.Vue

```vue
<template>
    <div class="dialog-bg">
        <div class="dialog">
            <div>
                <slot :title="title" :hello="message" name="title">{{ title }}</slot>
            </div>
            <div>
                <slot></slot>
            </div>
            <div><input type="text" v-model="value" @keyup.enter="submit" @keyup.esc="cancel"></div>
            <div class="btn-group">
                <button @click="submit">确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    emits: ['update:modelValue'],
    props: {
        title: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        },
    },
   beforeUnmount(){
       console.log("beforeUnmount", this)
   },
   unmounted(){
       console.log("unmounted", this)
   //   this.
   },
    data() {
        return {
            message: 'hello world',
            value: 'hello world111',
        }
    },
    methods: {
        cancel() {
            console.log("AAA", this)
            this.$emit("close")
        },
        submit(){
            this['onUpdate:modelValue']
            this.$emit("close")
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}

</script>

```

### 将代码改为组合式API方式实现

代码如下所示：

```vue
<template>
  <div v-bind="objectOfAttrs">
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <span>当前时间: {{ new Date().toISOString() }}, 今天天气：{{ weather }}</span>
    <br>
    <button @click="showdialog = !showdialog">弹出对话框</button>
    <my-dialog v-model="weather" title="提示" @close="closeDialog" v-if="showdialog" >
    今天天气是：<span style="color: red;">{{ weather }}</span>
    <template #title="titleParam">
      <span style="color: orange;">提</span>示框：{{titleParam.hello}}
    </template>
    </my-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import MyDialog from './components/MyDialogsetup.vue';
const dayInfo = ref('当前时间: new Date().toISOString(), 今天天气：this.weather')
const showdialog =ref(false)
const weather = ref('晴天')
const objectOfAttrs = reactive({
  class: 'foo bar',
  id: 'baz',
  'data-foo': 'bar',
})
function closeDialog(){
  showdialog.value = false
}
</script>
```

```vue
<template>
    <div class="dialog-bg">
        <div class="dialog">
            <div>
                <slot :title="title" :hello="message" name="title">{{ title }}</slot>
            </div>
            <div>
                <slot></slot>
            </div>
            <div><input type="text" v-model="value" @keyup.enter="submit" @keyup.esc="cancel"></div>
            <div class="btn-group">
                <button @click="submit">确定</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import {computed} from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    },
})
const emit = defineEmits({})
function cancel() {
    emit("close")
}
function submit() {
    emit("update:modelValue", props.modelValue)
    emit("close")
}
const value = computed({
    get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
})

</script>
```

## 路由Vue Router

### 入门

* main.js中填写如下代码

```vue
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
  { path: '/home', component:()=> import('./components/Home.vue')},
  { path: '/about', component:()=> import('./components/about.vue')},
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

app.mount('#app')

// 现在，应用已经启动了！
```

* App.vue在`template`中填写router-view

  <router-view></router-view> 用这个数据留空

* 添加components/Home.vue和components/about.vue

### 参数传递

#### 数据传递useRouter()

#### 数据提取useRoute()

```vue
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
```
* about.vue

```vue
<template>
    <div>
        About Page
        <button @click="testClick">点击跳转</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
function testClick() {
    // 跳转
    router.push({
        path: '/home',
        query: {
            name: '张三',
            id: 1
        }
    })
}
</script>
```

* home.vue

```vue
<template>
    <div>
        HomePage{{ info }}
        <router-link to="/about" @click="testClick">About</router-link>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const info = reactive({
    id:route.query.id,
    name:route.query.name,
})
function testClick(){
    router.push({
        path:'/about',
        query:{id:123,name:'zhangsan'}
    })
}
</script>
```

* `<router-link to="/about" @click="testClick">About</router-link>`可以直接做调整链接

### 二级路由

```vue
const routes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```

```vue
const routes = [
    { path: '/home', component: () => import('./components/Home.vue') },
    { path: '/about', component: () => import('./components/about.vue') },
    {
        path: '/main', component: () => import('./components/main.vue'), children: [
            { path: '/main/main1', component: () => import('./components/main1.vue') },
            { path: '/main/main2', component: () => import('./components/main2.vue') }
        ]
    }
]
```



```vue
<template>
    <div>
        <button @click="testClick">绘制button</button>
    </div>
    <router-view></router-view>
</template>
```

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

function testClick() {
    console.log('testClick')
    router.push({
        path: '/ui/button'
    })
    console.log(router)
}
</script>
```



# 问题

## failed to load config from E:\Gitee\vue\vue3-test\vite.config.js

> 前提条件
>
> - 已安装 16.0 或更高版本的 [Node.js](https://nodejs.org/)



## Vue : 无法将“Vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称

> 
>
> npm install vue-cli -g



## vue : 无法加载文件 C:\Users\localuser\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本

> [ITIP]
>
> 该问题的solution就是通过powershell去解除`Execution_Policies`（运行策略）的限制。
>
> 开始菜单或者小娜搜索输入`powershell`，powershell ISE或者直接powershell命令行都ok，选择 `以管理员身份运行` 。
>
> 输入 `get-ExecutionPolicy` 查看当前策略，一般默认是：`Restricted` 受限制的
>
> 输入 `set-ExecutionPolicy RemoteSigned` 设置为`RemoteSigned 远程签名`的
>
> 输入`get-ExecutionPolicy -List` 查看当前所有Scope的ExecutionPolicy
>
> <img src="https://raw.githubusercontent.com/mazaiguo/blogimg/main/20230907-20230907164824.png" style="zoom: 80%;" />
>
> 重新运行需要运行的`vue ui`脚本，选择允许防火墙。搞定！

## VueCompilerError: v-model cannot be used on a prop, because local prop bindings are not writabl

所有的 props 都遵循着**单向绑定**原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。

另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你**不应该**在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：

[单向数据流](https://cn.vuejs.org/guide/components/props.html#one-way-data-flow)

在组件内实现 `v-model` 的方式是使用一个可写的，同时具有 getter 和 setter 的计算属性。`get` 方法需返回 `modelValue` prop，而 `set` 方法需触发相应的事件：

```vue
<div><input type="text" v-model="value"></div>

	computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
```



