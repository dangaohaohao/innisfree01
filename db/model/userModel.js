
// schema 对象
// 创建一个跟集合相关的 schema 对象
// 将 schema 对象转化为数据模型
// 操作数据库
// 让数据对象和集合相关联 用集合对象来做增删改查的操作

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var userSchema = new Schema({
 us: {type: String, required: true},
 pass: {type: String, required: true},
 age: Number,
 sex: {type: Number, default: 0}
})
let User = mongoose.model('user', userSchema);

module.exports = User;

