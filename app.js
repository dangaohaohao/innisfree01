
// 内置模块
// 第三方模块
const express = require('express');
// 自定义模块
let router = require('./router/router');

const app = express();

app.use('/static', express.static('./static'));
app.use(router);

app.listen(3000, 'localhost', (err) => {
  console.log('running in localhost:3000');
});
