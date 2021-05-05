var $tabContainer = document.querySelector('.tab-container');

var $tabClassEl = document.querySelectorAll('.tab');

var $viewClassEl = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabClassEl.length; i++) {
      if (event.target === $tabClassEl[i]) {
        $tabClassEl[i].className = 'tab active';
      } else {
        $tabClassEl[i].className = 'tab';
      }
    }
  }

  var $attribute = event.target.getAttribute('data-view');

  for (var j = 0; j < $viewClassEl.length; j++) {
    if ($attribute === $viewClassEl[j].getAttribute('data-view')) {
      $viewClassEl[j].className = 'view';
    } else {
      $viewClassEl[j].className = 'view hidden';
    }
  }
});
