/* exported isVowel */

function isVowel(char) {
  if (char === 'a' || char.toUpperCase() === 'A' ||
    char === 'e' || char.toUpperCase() === 'E' ||
    char === 'i' || char.toUpperCase() === 'I' ||
    char === 'O' || char.toUpperCase() === 'O' ||
    char === 'u' || char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}
