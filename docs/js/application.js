// 暫定でjqueryでtopにdummyを置く
$(function () {
  var height = $("header").height();
  $(".hero").css("margin-top", height);
  $("main").css("margin-top", height + 30);
  $("main").css("margin-bottom", height + 10);
});