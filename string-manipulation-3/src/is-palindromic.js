/* exported isPalindromic */

function isPalindromic(string) {
  var alterString = string.split(' ').join('');
  var newString = '';
  for (var i = alterString.length - 1; i >= 0; i--) {
    newString += alterString[i];
  }
  if (newString === alterString) {
    return true;
  } else {
    return false;
  }
}
