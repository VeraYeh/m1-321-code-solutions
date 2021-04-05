/* exported getPropertyValue */

function getPropertyValue(object, key) {
  var propertyValue = object[key];
  return propertyValue;
}

getPropertyValue({
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
}, 'occupation');
