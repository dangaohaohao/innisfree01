(function() {

// tabWrap 内容样式切换 事件委托
let $tabWrap = $('.leftTabWrap .tabWrap');

$tabWrap.on('click', '.tab-item', function() {
  // 给当前点击的元素的 title 加上 active 类， content 加上 show 类
  // 当前点击元素的兄弟元素 的 title 移除 active 类， content 移除 show 类
  $(this).children('.tabname').addClass('active').siblings('.tabContent').addClass('show');
  $(this).siblings().children('.tabname').removeClass('active').siblings('.tabContent').removeClass('show');
});


// 用户注册登录事件
let $account = $('.formWrap #account'); // 账户
let $password = $('.formWrap #password'); // 密码
let $loginBtn = $('.formWrap .loginBtn')  // 登录按钮
let $rememberMe = $('.formWrap #rememberMe'); // 记住我

// 当用户来到页面时，首先判断本地 cookie 中有没有对应的用户数据如
// document.cookie = 'username=yuzhenliu;password=123456'
// 有则把 account 的值渲染出来 并把 rememberMe 勾选上
// 但用户点击了登录按钮，判断是否有值, 判断用户是否勾选，如果勾选则把值存入 cookie 
// 如果没有勾选，则删除本地 cookie
// 做好本地操作后，发送请求，对应接口，进行页面处理，操作数据库
// 判断是否正确，错误则返回错误，成功则作相应的处理












})();
