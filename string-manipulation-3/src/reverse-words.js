/* exported reverseWords */

function reverseWords(string) {
  var stringArray = string.split(' ');
  var newArray = [];
  var newWord;
  var i = 0;
  while (i < stringArray.length) {
    newWord = stringArray[i].split('').reverse().join('');
    newArray.push(newWord);
    i++;
  }
  return newArray.join(' ');
}
