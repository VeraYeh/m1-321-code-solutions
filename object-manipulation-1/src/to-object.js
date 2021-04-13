/* exported toObject */

function toObject(keyValuePair) {
  var firstValue = keyValuePair[0];
  var secondValue = keyValuePair[1];
  var object = {};
  object[firstValue] = secondValue;
  return object;
}
