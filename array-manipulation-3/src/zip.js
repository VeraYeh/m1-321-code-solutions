/* exported zip */

function zip(first, second) {
  var newArray = [];
  var i = 0;
  var j = 0;
  if (first.length >= second.length) {
    while (i < second.length) {
      while (j < second.length) {
        newArray.push([first[i], second[j]]);
        i++;
        j++;
      }
    }
  } else {
    while (i < first.length) {
      while (j < first.length) {
        newArray.push([first[i], second[j]]);
        i++;
        j++;
      }
    }
  }
  return newArray;
}
