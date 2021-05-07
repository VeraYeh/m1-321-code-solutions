var books = [
  {
    isbn: '2021-00001',
    title: 'Bad Blood',
    author: 'John Carreyrou'
  },
  {
    isbn: '2021-00002',
    title: 'Born A Crime',
    author: 'Trevor Noah'
  },
  {
    isbn: '2021-00002',
    title: 'The Choice',
    author: 'Edith Eger'
  }
];

console.log('books array: ', books);
console.log('type of books array: ', typeof books);

var jsonArray = JSON.stringify({
  isbn: '2021-00001',
  title: 'Bad Blood',
  author: 'John Carreyrou'
},
{
  isbn: '2021-00002',
  title: 'Born A Crime',
  author: 'Trevor Noah'
},
{
  isbn: '2021-00002',
  title: 'The Choice',
  author: 'Edith Eger'
});

console.log('json book array: ', jsonArray);
console.log('type of jsonArray: ', typeof jsonArray);

var student = '{"id": "011","name": "Pepper Black"}';

console.log('json string of student: ', student);
console.log('type of json string of student: ', typeof student);

var obj = JSON.parse(student);

console.log('parse result of student string: ', obj);
console.log('type of parsed objcet: ', typeof obj);
