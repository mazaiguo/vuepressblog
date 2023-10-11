写过后端的朋友们都知道，不管你传参还是接收，都是需要定义类型的。



如下为传入少量的值的方法

```
public int add(int a,int b){
	return a+b;
}

public void voidFunc(){
	//xxx
}
```



如下为传入多个值的方法

```
public int a(int a,int b,int c,int d){
	return a+b-c/d;
}
```



如下为传入超多参数

```
public int a(B b){
	return b.a + b.b - b.c / b.d + ... + b.z;
}

public class B{
	public int a;
	public int b;
	public int c;
	public int d;
	// ... 省略 十多个参数
    public int z;
}

```



是不是和这种感觉很类似，将参数定义类型或放入集合中。