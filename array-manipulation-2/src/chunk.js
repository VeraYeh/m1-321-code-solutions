/* exported chunk */

function chunk(array, size) {
  var Array = [];
  for (var i = 0; i < array.length; i += size) {
    var Arrays = array.slice(i, i + size);
    Array.push(Arrays);
  }
  return Array;
}
