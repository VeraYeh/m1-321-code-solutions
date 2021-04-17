/* exported defaults */

function defaults(target, source) {
  var targetProperty = [];
  for (const property in target) {
    targetProperty.push(property);
  }
  for (const property in source) {
    if (!targetProperty.includes(property)) {
      target[property] = source[property];
    }
  }
  return target;
}
