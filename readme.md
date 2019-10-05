# innsfress

## 文件目录
+ static 静态资源文件目录
  - css     转译后的 css 文件
  - sass     开发时的 sass 文件
  - images    图片文件
  - scripts   js 文件

+ views  html 页面
  - index.html 首页
  - login.html 登录页面

+ db 关于数据库的操作
  - model 数据模型

+ router 路由管理

+ node_modules 依赖模块

+ app.js 程序主入口

+ gulpfile.js 使用 gulp 打包的配置文件

+ .gitignore 上传至远端仓库的忽略文件列表


## 路由模块  接口
+  / 默认访问首页

## api 接口
+ get 方式
  - / 默认为首页
  - /index.html 首页
  - /login.html 登录页面
  - * 404 页面 放在最后，如果请求的页面不存在就返回 404 页面

+ post 方式
  - /login 登录
  - /register 注册

+ 报错 / 成功方式
  - err: 0, msg: '登录成功'
  - err: -1, msg: '参数错误'
  - err: -2, msg: '用户名或密码不正确'
  - err: -3, msg: '该用户名已存在'
  - err: -4, msg: '内部错误'
+ 验证码逻辑接口实现
  1. 验证用户名存在
  2. 获取验证码

## 工具
+ nodemon express 中实现热加载
+ body-parser 来解析路由模块


## 想要实现但失败的功能
+ 将 头部 和 底部作为公共模块引入

## mongodb 数据库操作

下载: 百度官网下载
安装: 
  - 最后一个对话框不要勾选
  - 缺少数据库文件 c/data/db 看提示，提示缺什么就新建什么
环境变量: 如果报 mongod 不是内部命令，说明没有配置环境变量
  - 计算机-高级系统设置-系统变量-path路径-如果没有mongodb的路径-找 mongodb 目录的 bin目录下-复制过来粘贴到 path 中-记得添加个 ;
  - 如果 cmd 中还没有则重开一下


1. mongod 开启，若提示 c 盘没有 data / db 目录，则去新建  再敲一遍 mongod 开启了数据库 不要关  等待连接
2. 再开个终端 输入 mongo 连接数据库 
3. 此时就可以操作数据库了 
  ```
  mongodb 数据库名
  mongod 命令行启动数据库命令
  mongo 命令行操作数据库指令
  mongoose node操作数据库的插件
  show dbs 显示数据库 如果数据库是新建的没有任何数据会显示不出来
  show collections 显示集合 / 表 表名是复数
  use DATABASE_NAME 如果数据库不存在，则创建数据库，否则切换到指定数据库
  db.user.drop()  删除一个集合/ 表
  db.user.find() 在表中查找
  mongoose 插件中 API 文档中模型中有 增删改查操作的 api

  let qianxunObj = {
  username: '千寻',
  password: '1001',
  age: 18,
  sex: 1
};

// 插入操作 返回的是 promise 对象
User.insertMany(qianxunObj)
.then((data) => {
  console.log(data);
  console.log('插入成功');
}, (err) => {
  console.log(err);
  console.log('插入失败');
}); 

// 查询
 User.find()
.then((data) => {
  console.log(data);
  console.log('查询成功');
}, (err) => {
  console.log(err);
  console.log('查询失败');
}); 

// 空数据 查询成功  查询数据库是成功的 ，只是数据跟需要查询的数据不符合
User.find({username: '11036'})
.then((data) => {
  console.log(data);  
  console.log('查询成功');
}, (err) => {
  console.log(err);
  console.log('查询失败');
}); 

// 删除
User.remove()
.then((data) => {
  console.log(data);  
  console.log('删除成功');
}, (err) => {
  console.log(err);
  console.log('删除失败');
}); 

```
4. mongoose 插件
+ 操作步骤
  - 首先连接数据库
  - 创建 schema 对象
  - 将 schema 对象转化为数据模型
  - 用数据模型来对数据库进行增删改查的操作

+ 用 rb3t 可视化界面来操作 mongodb 数据库



