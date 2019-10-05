
// 内置模块
// 第三方模块
const express = require('express');
const bodyParser = require('body-parser')
// 自定义模块
const router = require('./router/router');
const db = require('./db/connect');

const app = express();


//设置跨域访问 允许所有 在这里也可以设置允许用户访问什么内容
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static('./static'));
app.use(router);




app.listen(3000, 'localhost', (err) => {
  console.log('running in localhost:3000');
});

// 启动服务的同时开启数据库
