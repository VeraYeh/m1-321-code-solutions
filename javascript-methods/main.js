// Math object
var num1 = 5;

var num2 = 15;

var num3 = 25;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue: ', maximumValue);

var heroes = ['batman', 'spiderman', 'scarlet witch', 'hellboy'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

// Aray methods
var library = [
  {
    title: 'Bad Blood',
    author: 'John Carreyrou'
  },
  {
    title: 'Born A Crime',
    author: 'Trevor Noah'
  },
  {
    title: 'The Choice',
    author: 'Edith Eger'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

// String Method
var fullName = 'Vera' + ' ' + 'Yeh';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
