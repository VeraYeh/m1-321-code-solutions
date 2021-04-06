/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person) {
  var descriptionOfPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionOfPerson;
}

getDescriptionOfPerson({
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
});
