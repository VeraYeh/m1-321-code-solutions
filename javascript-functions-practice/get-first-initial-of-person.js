/* exported getFirstInitialOfPerson */

function getFirstInitialOfPerson(person) {
  var firstInitial = person.firstName[0];
  return firstInitial;
}

getFirstInitialOfPerson({
  firstName: 'Lea',
  lastName: 'Verou'
});
