/*js-1 ハンバーガーメニュ開く閉じる */
var trigger = document.querySelector('.openbtn4');
const humbergerinner = document.getElementById("humberger-inner");

function hamburger() {
  trigger.classList.toggle('active');
  
  // 画面の幅をチェック
  if (window.innerWidth <= 768) { // 768px以下の場合はモバイルとみなす
    humbergerinner.classList.toggle('in'); // モバイル用のクラス
  } else {
    humbergerinner.classList.toggle('in2'); // それ以外の場合のクラス
  }
}

trigger.addEventListener('click', function() {
  hamburger();
});

/*js-2 ヘッダースクロール透過 */
  window.addEventListener('scroll', function() {

    
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPosition);
    if (scrollPosition > 100) { // 100pxスクロールしたら変化を開始
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // 半透明に
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // 完全な白色に
    }
});


/*js-3 横スクロール */
// document.addEventListener("DOMContentLoaded", function() {
//   const ticketItemContainer = document.querySelector('.ticket-item-container');
//   // アイテムの複製
//   Array.from(ticketItemContainer.children).forEach(item => {
//     const clone = item.cloneNode(true);
//     ticketItemContainer.appendChild(clone);
//   });

//   let scrollAmount = 0;
//   const speed = 0.5; // スクロール速度（調整可能）

//   function moveItems() {
//     scrollAmount += speed;
//     ticketItemContainer.style.transform = `translateX(-${scrollAmount}px)`;

//     // スクロールが特定の幅を超えたらリセット
//     const totalWidth = ticketItemContainer.scrollWidth;
//     if (scrollAmount >= totalWidth / 2) {
//       scrollAmount = 0; // スクロールリセット
//     }

//     requestAnimationFrame(moveItems);
//   }

//   moveItems(); // アニメーション開始
// });



