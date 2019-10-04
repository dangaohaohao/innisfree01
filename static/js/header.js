(function () {
  // 获取页面中的元素 .list-item > a > span /  .list-item .listContent
  // 当经过 span 让对应 index 的 listContent 显示，其他兄弟元素隐藏

  let $listItems = $('.list-item');
  let $listContents = $('.list-item .listContent');

  $listItems.each((index, item) => {
    item.onmouseenter = function () {
      $listContents.hide().eq(index).fadeIn();
    }
    item.onmouseleave = function () {
      $listContents.hide();
    }
  });



  // userContent 板块
  // 当点击用户 icon 时 显示 userContent，同时更换图片
  let $userIcon = $('.userWrap .userIcon');
  let $userContent = $('.userWrap .userContent');
  let $userCloseIcon = $('.userContent .closeIcon');

  $userIcon.click(function () {
    $userContent.css('display', 'block');
    this.src = '../static/images/userd.png';
  });

  $userCloseIcon.click(function () {
    $userContent.css('display', 'none');
    $userIcon[0].src = '../static/images/user.png';
  });


  // searchContent 板块
  let $searchIcon = $('.searchWrap .searchIcon');
  let $searchBox = $('.searchWrap .searchBox');
  let $searchCloseIcon = $('.searchWrap .closeIcon');

  $searchIcon.click(function () {
    $searchBox.css('display', 'block');
    this.src = '../static/images/searchd.png';
  });

  $searchCloseIcon.click(function () {
    $searchBox.css('display', 'none');
    $searchIcon[0].src = '../static/images/search.png';
  });

  // 初始化搜索部分的轮播图
  var mySearchSwiper = new Swiper('.searchbannerWrap .swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 自动轮播
    autoplay: true,

  })





})();