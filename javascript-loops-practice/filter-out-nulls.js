/* exported filterOutNulls */

function filterOutNulls(values) {
  var filterOutNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterOutNull.push(values[i]);
    }
  }
  return filterOutNull;
}
