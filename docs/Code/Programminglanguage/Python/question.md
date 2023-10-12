### 打包

```python
pyinstaller -F -w -i python.ico watermark.py
```

### 问题

* RuntimeError: input(): lost sys.stdin

```
如果使用到了input()，需要带有控制台窗口，否则生成命令中加了-w参数，
运行exe会有如上报错，所以需要去掉-w参数
```

### pip源更换为清华源,pip install 清华源

* 1，打开资源管理器，进入%appdata%
* 2，创建pip目录，并在目录中创建pip.ini文件
* 3，将下列pip源配置输入pip.ini，并保存。
``` bash
    [global]
    timeout = 6000
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
    trusted-host = pypi.tuna.tsinghua.edu.cn
```
4，重新进行pip install。