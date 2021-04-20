var numbersClicked = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

function updateButton(event) {
  numbersClicked++;
  $clickCount.textContent = 'Clicks: ' + numbersClicked;
  if (numbersClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numbersClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numbersClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numbersClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numbersClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', updateButton);
