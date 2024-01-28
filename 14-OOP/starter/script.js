'use strict';

const Person = function(firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automaticlly retuns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Matilda', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
