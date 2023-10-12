### 保存标记

DBMOD，只读

* //声明设置数据库模式的函数

  ```cpp
  extern long acdbSetDbmod(AcDbDatabase * pDb, long newVal); 
  ```

* 另外还有方法的，AcApDocment类有两个成员接口，pushDbmod和popDbmod
* 