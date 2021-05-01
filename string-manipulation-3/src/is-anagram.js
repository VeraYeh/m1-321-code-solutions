/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var convertFirst = '';
  var convertSecond = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      convertFirst += firstString[i];
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      convertSecond += secondString[j];
    }
  }
  var firstArray = convertFirst.split('').sort();
  var secondArray = convertSecond.split('').sort();
  if (firstArray.join('') === secondArray.join('')) {
    return true;
  }
  return false;
}
