'use strict';
console.log('array and object');

// Reference types
// Array - Masyvas - kolekcija elementu su indexais
let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[1]);
let marks = [8, 7, 10, 5, 9];
let mixed = [8, 7, true, 'london', null];

// object
let person = {
  name: 'James',
  age: 45,
  town: 'London',
  isMarried: true,
  marks: mixed,
};
console.log(person);
console.log(person['age']);
console.log(person.age);
console.log(person.town);
console.log(person.marks[2]);
