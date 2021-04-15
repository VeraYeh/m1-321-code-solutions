/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  if (newWord === 'Javascript') {
    newWord = word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word.slice(4, 5).toUpperCase() + word.slice(5, word.length).toLowerCase();
  }
  return newWord;
}
