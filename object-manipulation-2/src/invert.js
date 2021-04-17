/* exported invert */

function invert(source) {
  var newObj = {};
  for (const property in source) {
    newObj[source[property]] = property;
  }
  return newObj;
}
