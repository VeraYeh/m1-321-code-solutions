/* exported firstChars */

function firstChars(length, string) {
  var firstCharsOfString = '';
  if (string.length > 0) {
    firstCharsOfString = string.slice(0, length);
  } else if (string === '') {
    firstCharsOfString = '';
  }
  return firstCharsOfString;
}
