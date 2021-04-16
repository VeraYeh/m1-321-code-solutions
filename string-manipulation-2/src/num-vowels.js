/* exported numVowels */

function numVowels(string) {
  var vowels = [];
  var lowerCaseString = string.toLowerCase();
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      vowels.push(lowerCaseString[i]);
    }
  }
  return vowels.length;
}
