# svg封装踩坑指南

封装调用时发现图标生效不了，折腾了一会，原来少写了符号。

```vue
<svg :style="{ width: width, height: height }">
	<use :xlink:href="prefix + name" :fill="color"></use>
</svg>
```



注意冒号`:`，xlink、style、fill前的冒号需注意。