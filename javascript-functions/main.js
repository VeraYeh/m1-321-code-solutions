// 1st
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var numberOfSeconds = convertMinutesToSeconds(5);

console.log('convertMinutesToSeconds result: ', numberOfSeconds);

// 2nd
function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingMessage = greet('Beavis');

console.log('greeting result: ', greetingMessage);

// 3rd
function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('getArea result: ', getAreaResult);

// 4th
function getFirstName(person) {
  var getFirstNameResult = person.firstName;
  return getFirstNameResult;
}

var firstNameInPersonObject = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstName result: ', firstNameInPersonObject);

// 5th
function getLastElement(array) {
  var lastIndex = array.length - 1;
  var getLastElementResult = array[lastIndex];
  return getLastElementResult;
}

var getLastElementInArray = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElement result: ', getLastElementInArray);
