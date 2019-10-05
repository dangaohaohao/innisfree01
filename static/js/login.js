(function() {

// tabWrap 内容样式切换 事件委托
let $tabWrap = $('.leftTabWrap .tabWrap');

$tabWrap.on('click', '.tab-item', function() {
  // 给当前点击的元素的 title 加上 active 类， content 加上 show 类
  // 当前点击元素的兄弟元素 的 title 移除 active 类， content 移除 show 类
  $(this).children('.tabname').addClass('active').siblings('.tabContent').addClass('show');
  $(this).siblings().children('.tabname').removeClass('active').siblings('.tabContent').removeClass('show');
});

})();
