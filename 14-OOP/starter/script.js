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

const matilda = new Person('Matilda', 2013);
const jack = new Person('Matilda', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function() {
  console.log('Hey there👋');
  console.log(this);
}

Person.hey();

////////////////////////////////////////////
// //  Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjcets

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // obeject.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//   return[...new Set(this)]
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1')
// console.dir(x => x + 1);
/////////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}kmph`);
// }

// Car.prototype.brake = function() {
//   this.speed -= 10;
//   console.log(`${this.make} is going at ${this.speed}kmph`);
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95)

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
//////////////////////////////////////////////////////////

// class expression
// const PersonCl = class {

// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

set fullName(name) {
  console.log(name);
  if(name.includes(' ')) this._fullName = name;
  else alert(`${name} is not a full name!`)
}

get fullName() {
  return this._fullName;
}

// static method
static hey() {
  console.log('Hey there👋');
  console.log(this);
}

}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are NOT hoisteed
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965)

PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);