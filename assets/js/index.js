'use strict'

// task 1
console.log('===Task 1===');
const getOddIndexElements = ['test', false, 12345, undefined, 'secret', NaN,true, 0, 100, null ];
getOddIndexElements.forEach(function(name, i) {
  if(i % 2 !== 0) {
    console.log(name);
  }
});

// task 2
console.log('===Task 2===');
const getSentenceWithIndexAndValue = ['test', false, 2345, null];
getSentenceWithIndexAndValue.forEach(function(name, i) {
  console.log('Item with index ' + i + ' has value ' + name);
});

// task 3
console.log('===Task 3===');
const people = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];
const getAdultPeople = people.filter(function (people) {
  return people.age >= 18;
});
console.log(getAdultPeople);

// task 4
console.log('===Task 4===');
const getFemalePerson = people.findIndex(function (people) {
  return people.gender === 'female';
});
console.log(getFemalePerson);

// task 5
console.log('===Task 5===');
const getAdultMen = people.every(function(people) {
  return people.age >= 18 && people.gender === 'male';
});
console.log(getAdultMen);