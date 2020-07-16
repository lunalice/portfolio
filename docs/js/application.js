// 暫定でjqueryでtopにdummyを置く
$(function () {
  let height = $("header").height();
  $(".hero").css("margin-top", height);
  $("main").css("margin-top", height + 30);
  $("main").css("margin-bottom", height + 10);
});

// Galleryで画像の読み込み
$(function () {
  let gallery = $(".gallery");
  if (gallery) {
    $.get("./data/gallery.txt", function (data) {
      let lines = data.split(/\r?\n/);
      lines.forEach(line => {
        if (line !== '') {
          gallery.append(`<img class="gallery-item column col-4 col-xs-6" src="img/gallery/${line}">`);
        }
      });
    });
  }
});