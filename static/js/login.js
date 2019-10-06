(function () {

  // tabWrap 内容样式切换 事件委托
  let $tabWrap = $('.leftTabWrap .tabWrap');

  $tabWrap.on('click', '.tab-item', function () {
    // 给当前点击的元素的 title 加上 active 类， content 加上 show 类
    // 当前点击元素的兄弟元素 的 title 移除 active 类， content 移除 show 类
    $(this).children('.tabname').addClass('active').siblings('.tabContent').addClass('show');
    $(this).siblings().children('.tabname').removeClass('active').siblings('.tabContent').removeClass('show');
  });



  // 用户注册登录事件
  let $username = $('.loginTabCon #username'); // 账户
  let $password = $('.loginTabCon #password'); // 密码
  let $loginBtn = $('.loginTabCon .loginBtn') // 登录按钮
  let $rememberMe = $('.loginTabCon #rememberMe'); // 记住我

  // 当用户来到页面时，首先判断本地 cookie 中有没有对应的用户数据如
  // document.cookie = 'username=yuzhenliu;password=123456'
  // 有则把 account 的值渲染出来 并把 rememberMe 勾选上
  // 但用户点击了登录按钮，判断是否有值, 判断用户是否勾选，如果勾选则把值存入 cookie 
  // 如果没有勾选，则删除本地 cookie
  // 做好本地操作后，发送请求，对应接口，进行页面处理，操作数据库
  // 判断是否正确，错误则返回错误，成功则作相应的处理

  if (getCookie('us')) {
    $username.val(getCookie('us'));
    $password.val(getCookie('pass'));
    $rememberMe.prop('checked', true);
  }


  $loginBtn.click(function () {

    if ($username.val() == '') {
      alert('账户不可为空');
      return
    }

    if ($password.val() == '') {
      alert('密码不可为空');
      return
    }

    // 拿到值，发送 ajax，看数据库中是否有对应的数据，得到返回的结果 
    // url: localhost:3000/login
    // data: us   pass
    // 返回: {"err": 0,"msg": "登录成功"}
    // 参数不完整: {"err": -1,"msg": "参数错误"}
    // {"err": -2,"msg": "用户名或密码不正确"}

    let username = $username.val();
    let password = $password.val();

    if (!(/^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/.test(username) || /^(1|\+861)[3-8]{1}\d{9}$/.test(username))) {
      alert('账户格式不正确,必须为手机号或者邮箱');
      return
    }


    ajaxPromise('post', 'http://localhost:3000/login', {
        us: username,
        pass: password
      })
      .then((data) => {

        switch (data.err) {
          case 0:
            // 登录成功，可以执行登录成功的操作了

            console.log($rememberMe.prop('checked'));

            if ($rememberMe.prop('checked')) { // 记住我为 true
              setCookie('us', username, 7);
              $username.val('');
              $password.val('');
              $rememberMe.prop('checked', false);

            } else {
              removeCookie('us');
              $username.val('');
              $password.val('');
              $rememberMe.prop('checked', false);
            }

            alert(data.msg);
            break;
          case -1:
            alert(data.msg); // 参数错误 少了参数 比较少出现
            break;
          case -2:
            alert(data.msg); // 用户名或密码不正确
            break;
        }

      })
      .catch((err) => {
        console.log(err);
        console.log('catch 中的错误');
      });



  });



  // 用户注册事件
  let $usernameReg = $('.joinMembers #usernameReg'); // 账户
  let $passwordReg = $('.joinMembers #passwordReg'); // 密码
  let $registerBtn = $('.joinMembers .registerBtn') // 登录按钮

  $registerBtn.click(function () {

    if ($usernameReg.val() == '') {
      alert('账户不可为空');
      return
    }

    if ($passwordReg.val() == '') {
      alert('密码不可为空');
      return
    }

    // 拿到值，发送 ajax，看数据库中是否有对应的数据，
    // post
    // url: localhost:3000/register
    // data: us   pass
    // 返回: {err: 0, msg: '用户注册成功'}
    // 参数不完整: {"err": -1,"msg": "参数错误"}
    // res.send({err: -2, msg: '注册失败'})
    // {err: -3, msg: '该用户名已存在'}
    // {err: -5, msg: '账户格式不正确,必须为手机号或者邮箱'}

    let usernameReg = $usernameReg.val();
    let passwordReg = $passwordReg.val();

    if (!(/^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/.test(usernameReg) || /^(1|\+861)[3-8]{1}\d{9}$/.test(usernameReg))) {
      alert('账户格式不正确,必须为手机号或者邮箱');
      return
    }

    ajaxPromise('post', 'http://localhost:3000/register', {
        us: usernameReg,
        pass: passwordReg
      })
      .then((data) => {
        switch (data.err) {
          case 0: // 处理注册成功的业务逻辑
            alert(data.msg);
            break;
          case -1:
            alert('参数错误,账号和密码不可为空'); // 比较少，因为做了双重判断
            break;
          case -2:
            alert('注册失败，请稍后重试');
            break;
          case -3:
            alert(data.msg);
            break;
          case -5:
            alert(data.msg);
            break;
        }
      })
      .catch((err) => {
        console.log(err);
        console.log('catch 中的错误');
      });

  });













})();