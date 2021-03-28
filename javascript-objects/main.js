var student = {
  firstName: 'Hsunchih',
  lastName: 'Yeh',
  age: 38
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'accountant';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Lexus',
  model: 'RX350',
  year: 2020
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'phoebe',
  type: 'bird'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
