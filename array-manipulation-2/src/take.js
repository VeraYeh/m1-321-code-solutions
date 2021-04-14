/* exported take */

function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else if (array.length === 0) {
    newArray = [];
  }
  return newArray;
}
