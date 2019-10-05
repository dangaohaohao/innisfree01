const express = require('express');
const fs = require('fs');
const User = require('../db/model/userModel');

let router = express.Router(); // 获取路由的实例


// 默认为主页
router.get('/', function (req, res) {
  fs.readFile('./views/index.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

// 用户请求主页
router.get('/index.html', function (req, res) {
  fs.readFile('./views/index.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

// 用户请求登陆页面
router.get('/login.html', function (req, res) {
  fs.readFile('./views/login.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});



// 用户相关操作
// 获取数据 数据处理 返回数据

// 登录操作 需要 用户名 和 密码在数据库中可以找到
router.post('/login', function (req, res) {

  let {username, password} = req.body;

  if (!username || !password) {
    res.send({err: -1, msg: '参数错误'});
  }

  User.find({
    username,
    password
  })
  .then((data) => {
    // 注意只要能查找成功就会进入到这里 如果没有会返回空数组，所以判断是否
    // 登录成功可以根据返回数据(data 是一个数组)的 length 来判断
    if (data.length > 0) {
      res.send({err: 0, msg: '登录成功'});
    }else {
      res.send({err: -2, msg: '用户名或密码不正确'});
    }
  })
  .catch(() => {
    res.send({err: -4, msg: '内部错误'});
  });

});



// 注册操作
router.post('/register', function (req, res) {

  let {username, password} = req.body;

  if (!username || !password) {
    res.send({err: -1, msg: '参数错误'});
  }
  

  User.find({username})
  .then((data) => {
    if (data.length === 0) {

      // 说明用户名不存在，可以注册
      return User.insertMany({username, password});
    }else {
       // 说明用户名已经存在
    res.send({err: -3, msg: '改用户名已存在'});
    }
   
  })
  .then(() => {
    res.send({err: 0, msg: '用户注册成功'});
  })
  .catch(() => {
    res.send({err: -2, msg: '注册失败'});
  });

  
});




// 如果没有对应的请求页面，默认为 404 放在最后
router.get('*', function(req, res) {
  fs.readFile('./views/404.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

module.exports = router;