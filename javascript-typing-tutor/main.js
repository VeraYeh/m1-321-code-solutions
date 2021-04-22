var $character = document.querySelectorAll('span');

var $typeArea = document.querySelector('body');

var $finishedLine = document.querySelector('.hidden');

var i = 0;

var length = $character.length - 1;

var passes = 0;

var fails = 0;

function checkType(event) {
  var j = i + 1;
  if (i < length && event.key === $character[i].textContent) {
    $character[i].className = 'green';
    $character[j].className = 'default';
    passes++;
  } else if (i < length && event.key !== $character[i].textContent) {
    $character[i].className = 'red';
    $character[j].className = 'default';
    fails++;
  } else if (i === length && event.key === $character[i].textContent) {
    $character[i].className = 'green';
    $finishedLine.className = 'finished';
    passes++;
    $finishedLine.textContent = 'Passes: ' + passes + ' Fails: ' + fails + ' Play again?';
  } else if (i === length && event.key !== $character[i].textContent) {
    $character[i].className = 'red';
    $finishedLine.className = 'finished';
    fails++;
    $finishedLine.textContent = 'Passes: ' + passes + ' Fails: ' + fails + ' Play again?';
  }
  i++;
}

$typeArea.addEventListener('keydown', checkType);
