/* exported capitalizeWords */

function capitalizeWords(string) {
  var toArray = string.split(' ');
  var newString = [];
  for (var i = 0; i < toArray.length; i++) {
    var upperCase = toArray[i].slice(0, 1).toUpperCase();
    var lowerCase = toArray[i].slice(1).toLowerCase();
    var newWord = upperCase + lowerCase;
    newString.push(newWord);
  }
  return newString.join(' ');
}
