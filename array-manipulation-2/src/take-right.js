/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else if (array.length === 0) {
    return [];
  }
  return newArray;
}
