
// 连接数据库
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/innisfree', { useNewUrlParser: true }); // 连接到哪个库

let db = mongoose.connection; // 数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:')); // 如果连接失败会报错
db.once('open', function() {
  console.log('数据库连接成功');
});

module.exports = db;




