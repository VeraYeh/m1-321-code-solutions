/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (const property in source) {
    if (!keys.includes(property)) {
      newObj[property] = source[property];
    }
  }
  return newObj;
}
