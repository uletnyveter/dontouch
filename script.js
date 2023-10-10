window.addEventListener('resize', function() {
    var rectangles = document.getElementsByClassName("rectangle");
    for (var i = 0; i < rectangles.length; i++) {
      rectangles[i].style.height = window.innerHeight + 'px';
    }
  });
  // При загрузке страницы
  window.addEventListener('load', function() {
    var rectangles = document.getElementsByClassName("rectangle");
    for (var i = 0; i < rectangles.length; i++) {
      rectangles[i].style.height = window.innerHeight + 'px';
    }
  });