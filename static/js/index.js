
$(document).ready(function () {

  // 初始化轮播图
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 自动播放
    autoplay: {
      delay: 4000,
      },

  })


  // 轮播图的信息模块 当轮播图轮播时显示对应的模块
  // 拿到当前轮播图的 index 让对应的 信息模块显示


  // 当点击 playstate 的时候 暂停 再点击播放
  let $playstate = $('.playstate');
  let $playstateIcon = $('.playstate .iconfont');
  let flag = true; // 记录是否开启自动循环，默认是开启的
  $playstate.click(function() {

    if (flag) { // 停止播放了
      mySwiper.autoplay.stop(); // 停止自动播放
      flag = false;
      $playstateIcon.removeClass('icon-zanting').addClass('icon-bofang');
    }else {
      mySwiper.autoplay.start(); // 停止自动播放
      flag = true;
      $playstateIcon.removeClass('icon-bofang').addClass('icon-zanting');
    }
  });

});