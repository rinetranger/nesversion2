document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const x01Icon = document.querySelector(".frame-child44");
    const frameRoot = document.querySelector(".frame-root");

    menuIcon.addEventListener("click", function() {
      frameRoot.style.display = "block";
      
    });

    x01Icon.addEventListener("click", function() {
      frameRoot.style.display = "none";
    });
  });


  document.getElementById('downloadPdfButton').addEventListener('click', function() {
    // ここにPDFファイルのURLを指定する
    var pdfUrl = './NESTA_Map.pdf';
  
    // PDFファイルを新しいタブで開く
    window.open(pdfUrl, '_blank');
  });



  const container = document.querySelector('.ticket-item-container');
  const items = document.querySelectorAll('.ticket-item');
  let currentIndex = 1; // 2番目のアイテムから開始
  let autoSlideInterval;
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  
  function setContainerTransition(enabled) {
    container.style.transition = enabled ? 'transform 0.3s ease-out' : '';
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth;
    setContainerTransition(true);
    container.style.transform = `translateX(${currentTranslate}px)`;
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      setPositionByIndex();
    }, 3000);
  }
  
  function touchStart(index, event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    setContainerTransition(false);
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
      container.style.transform = `translateX(${currentTranslate}px)`;
    }
  }
  
  function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
  
    // スワイプの距離が50pxを超えたら次または前のアイテムに移動
    if (movedBy < -50 && currentIndex < items.length - 1) currentIndex += 1;
    if (movedBy > 50 && currentIndex > 0) currentIndex -= 1;
  
    setPositionByIndex();
    prevTranslate = currentTranslate;
  
    // 自動スライドを再開
    startAutoSlide();
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }
  
  // イベントリスナーを設定
  items.forEach((item, index) => {
    const itemContainer = item;
    itemContainer.addEventListener('mousedown', touchStart.bind(this, index));
    itemContainer.addEventListener('touchstart', touchStart.bind(this, index));
  });
  
  window.addEventListener('mousemove', touchMove);
  window.addEventListener('touchmove', touchMove);
  window.addEventListener('mouseup', touchEnd);
  window.addEventListener('touchend', touchEnd);
  
  // カルーセルの自動スライドを開始
  startAutoSlide();
  