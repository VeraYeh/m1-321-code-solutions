/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var firstIndexLet = array[firstIndex];
  var secondIndexLet = array[secondIndex];
  array.splice(firstIndex, 1, secondIndexLet);
  array.splice(secondIndex, 1, firstIndexLet);
  return array.join('');
}
