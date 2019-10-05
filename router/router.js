const express = require('express');
const fs = require('fs');

let router = express.Router(); // 获取路由的实例


router.get('/', function (req, res) {
  fs.readFile('./views/index.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

router.get('*', function(req, res) {
  fs.readFile('./views/404.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

module.exports = router;