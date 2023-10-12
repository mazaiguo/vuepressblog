# 集成sass踩坑指南



报错信息：

```ts
[vite] Internal server error: EISDIR: illegal operation on a directory, read 
```

这个报错的大概意思是：`[vite]服务器内部错误:EISDIR:对目录进行非法操作，读取`



上网查了好多资料，网友们提供的解决方式五花八门，并没找到一个能真正有效的方法。



经过不断的折腾，在vite.js的issues中找到答案。

![p26_sass](https://gitee.com/zerocaesar/vue3-admin-guide/raw/master/image/p26_sass.png)

可参考尤大的回答。`大意为引入文件路径要完整`



所以之前引入全局样式

```ts
//引入全局样式
import '@/styles'
```



需要改为

```ts
//引入全局样式
import '@/styles/index.scss'
```



改完立马生效。