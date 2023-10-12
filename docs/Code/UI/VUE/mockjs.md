## 在线mock网站[fastmock](https://fastmock.site/#/)

## [mockjs官网](http://mockjs.com/examples.html)

## mockjs-demo

### String

#### `'name|min-max': string`

```bash
Mock.mock({
  "string|1-10": "★"
})

{
  "string": "★★"
}
```

#### `'name|count': string`

```bash
Mock.mock({
  "string|3": "★★★"
})

{
  "string": "★★★★★★★★★"
}
```

### Number

#### `'name|+1': number`

#### `'name|min-max': number`

#### `'name|min-max.dmin-dmax': number`

```bash
Mock.mock({
  "number|1-100.1-10": 1
})

{
  "number": 95.2520761288
}
```

### Boolean

#### `'name|1': boolean`

#### `'name|min-max': boolean`

### Object

#### `'name|count': object`

```bash
Mock.mock({
  "object|2": {
    "310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省"
  }
})

{
  "object": {
    "320000": "江苏省",
    "330000": "浙江省"
  }
}
```



#### `'name|min-max': object`

```bash
Mock.mock({
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
})

{
  "object": {
    "110000": "北京市",
    "120000": "天津市",
    "140000": "山西省"
  }
}
```

### Array

#### `'name|1': array`

```bash
Mock.mock({
  "array|1": [
    "AMD",
    "CMD",
    "UMD"
  ]
})

{
  "array": "AMD"
}
```

```bash
Mock.mock({
  "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ]
})

{
  "array": [
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    },
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    }
  ]
}
```

#### `'name|min-max': array`

```bash
Mock.mock({
  "array|1-10": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

```bash
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```

#### `'name|count': array`

```bash
Mock.mock({
  "array|3": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

```bash
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```

### Function

#### `'name': function`

```bash
Mock.mock({
  'foo': 'Syntax Demo',
  'name': function() {
    return this.foo
  }
})
```

```bash
{
  "foo": "Syntax Demo",
  "name": "Syntax Demo"
}
```

### RegExp

#### `'name': regexp`

```bash
Mock.mock({
  'regexp|3': /\d{5,10}\-/
})
```

```bash
{
  "regexp": "864891-6765367405-85297831-"
}
```

### Path

#### `Absolute Path`

```bash
Mock.mock({
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "@/foo @/nested/a/b/c"
})
```

```bash
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "Hello Mock.js"
}
```

#### `Relative Path`

```bash
Mock.mock({
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "relativePath": {
    "a": {
      "b": {
        "c": "@../../../foo @../../../nested/a/b/c"
      }
    }
  }
})
```

```bash
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "relativePath": {
    "a": {
      "b": {
        "c": "Hello Mock.js"
      }
    }
  }
}
```

## DEMO

```javascript
"data|10": [{
			//生成随机id
				"id|+1": 1024,
				//随机生成名字
				"name": "@cname",
				//随机生成1-100之间的任意一个数
				"age|1-100": 1,
				//随机生成一个小数，小数点后面有2-5位
				"price|25-50.2-5": 1,
				//随机生成1-5颗星
				"score|1-5": "*",
				//随机生成8-14个文字
				"title": "@ctitle(8,14)",
				//随机生成一行段落
				"description": "@cparagraph",
				//随机生成一个对象
				"des|2": {
					"eye": 1,
					"hand": 2,
					"job": "teacher"
				},
				//随机生成一个带有正则的电话号码
				"tel": /1\d{10}/,
				//随机生成一个邮箱
				"email": /[a-z]{2,6}@(126|163|qq)\.(com|cn|net)/,
				//根据随机生成的age值返回一个布尔类型
				"canMerry": function() {
					if (this.age > 22) {
						return true;
					} else {
						return false;
					}
				},
				//随机生成一个时间
				"day": "@date('yyyy-MM-dd')",
				"time": "@time('HH:mm:ss')",
				"add": "@county(true)",
				//随机生成一个图片
				"avatar":"@dataImage('200x100','')"
			}],
```

