/* exported pick */

function pick(source, keys) {
  var newObj = {};
  for (const property in source) {
    if (keys.includes(property) && source[property] !== undefined) {
      newObj[property] = source[property];
    }
  }
  return newObj;
}
