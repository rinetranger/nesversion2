/*js-1 ハンバーガーメニュ開く閉じる */
var trigger = document.querySelector('.openbtn4');  
const humbergerinner = document.getElementById("humberger-inner");
const titleimg = document.querySelector(".frame-child39");
const titleimg2 = document.querySelector(".frame-child34");
const titleimg3 = document.querySelector(".frame-child35");
const titleimg4 = document.querySelector(".frame-child37");
function hamburger() {
  
  trigger.classList.toggle('active');
  humbergerinner.classList.toggle('in'); // モバイル用のクラス

  if (titleimg) {
    titleimg.classList.toggle('active');
}
}
trigger.addEventListener('click', function() {
  hamburger();
});

/*js-3 横スクロール */
document.addEventListener("DOMContentLoaded", function() {
  const ticketItemContainer = document.querySelector('.ticket-item-container');
  const secondItem = ticketItemContainer.children[1]; // 2番目の要素（Second Item）

  if (secondItem) {
    const position = secondItem.offsetLeft;
    const halfWidth = secondItem.offsetWidth / 2;
    ticketItemContainer.scrollLeft = position - (window.innerWidth / 2) + halfWidth;
    
  }
});

/*js-4 activity */
document.addEventListener("DOMContentLoaded", function() {
  const carouselElement = document.getElementById('imageCarousel');
  const carouselInner = carouselElement.querySelector('.carousel-inner');
  const transitionDelay = 300; // 0.2秒の遅延
  let intervalId = null; // インターバルIDを保持するための変数

  function fadeImagesSequentially(carouselItem) {
    const images = carouselItem.querySelectorAll('img');
    let delay = 0;

    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('active');
      }, index);
    });

    // すべての画像のフェードインが完了したら、次のスライドに進むための遅延を設定
    const totalDelay = (images.length - 1) ;
    setTimeout(() => {
      images.forEach(img => img.classList.remove('active')); // フェードアウトのためにactiveクラスを削除
      let nextCarouselItem = carouselItem.nextElementSibling || carouselInner.children[0];
      bootstrap.Carousel.getInstance(carouselElement).to(nextCarouselItem);
    }, totalDelay + 3000); // 3秒後に次の画像セットへ
  }

  // Bootstrap Carouselのイベントを使用して、スライドが完了するたびに関数を実行
  carouselElement.addEventListener('slid.bs.carousel', function(event) {
    fadeImagesSequentially(event.relatedTarget);
  });

  // 最初のスライドを手動で開始
  const firstCarouselItem = carouselInner.children[0];
  fadeImagesSequentially(firstCarouselItem);

  // 自動スライドを停止
  bootstrap.Carousel.getInstance(carouselElement).pause();
});
