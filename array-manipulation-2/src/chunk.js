/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var innerArray = array.slice(i, i + size);
    newArray.push(innerArray);
  }
  return newArray;
}
