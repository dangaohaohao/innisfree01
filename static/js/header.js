
(function() {
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

  // 当点击用户 icon 时 显示 userContent
  


})();
