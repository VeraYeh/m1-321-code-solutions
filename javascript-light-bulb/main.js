var $lightBulb = document.querySelector('.bulb-on');

var $backgound = document.querySelector('.backgound-on');

var clickCount = 0;

function bulbSwitch() {
  clickCount++;
  if (clickCount % 2 === 1) {
    $lightBulb.className = 'bulb-off';
    $backgound.className = 'background-off';
  } else {
    $lightBulb.className = 'bulb-on';
    $backgound.className = 'backgound-on';
  }
}

$lightBulb.addEventListener('click', bulbSwitch);
