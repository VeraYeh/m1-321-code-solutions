/* exported lastChars */

function lastChars(length, string) {
  var lastCharsString = '';
  if (string.length > 0) {
    lastCharsString = string.slice(0 - length);
  } else if (string === '') {
    lastCharsString = '';
  }
  return lastCharsString;
}
