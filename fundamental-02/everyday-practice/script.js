'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ;D')

// const interface = 'Audio';
*/

/*
function logger() {
  console.log('My name is Gabriela')
}

// calling / running / invoking function
logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  return juice;
}



 const applejuice = fruitProcessor(5, 0);
 console.log(applejuice);


 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice)

 const num = Number('23')
 */

 /*
// function declaration
 function calcAge1(birthYear) {
  return  2037 - birthYear;
 }
 const age1 = calcAge1(2013);

// function expressions
 const calcaAge2 = function (birthYear) {
    return  2037 - birthYear;
 }

 const age2 = calcaAge2(2013)

 console.log(age1, age2);
 */

 /*
 // Arrow function
 const calcAge3 = birthYear => 2037 - birthYear;
 const age3 = calcAge3(2013);
 console.log(age3)

 const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement}`
 }

console.log(yearsUntilRetirement(2013, 'Gabriela'));
console.log(yearsUntilRetirement(1978, "Guram"));
*/

/*
function cutFruitsPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruitsPieces(apples);
const orangePieces = cutFruitsPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/


/*
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName)  {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
  console.log(`${firstName} retires in ${retirement} years`);
   return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2013,"Gabo"))
console.log(yearsUntilRetirement(1950, "Gio"));
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'jay';
console.log(friends);
// friends = ['bob','alice']

const firstName = 'Gabriela';
const gabriela = [firstName,'Dzigo',2037 - 2013, 'student', friends];
console.log(gabriela);
console.log(gabriela.length);

// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const year = [1990,1967,2002,2010,2018];

 const age1 = calcAge(year[0]);
 const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1,age2,age3)

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1 ])];
console.log(ages)
*/

/*
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael','Peter','Steven']
];

const jonas = {
  firstName : 'Jonas',
  lastName : 'Schmedtmann',
  age : 2037 - 1991,
  job : 'teacher',
  friends : ['Michael','Peter','Steven']
};
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas)

console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const intrestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job and friends');


if(jonas[intrestedIn]) {
  console.log(jonas[intrestedIn])
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//challenge
//"jonas has 3 friends, and his best friend is called michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is called ${jonas.friends[0]}`);
*/


/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge : function(birthYear) {
  //   return 2037 -  birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this)
  //   return 2037 - this.birthYear;
  // }
    calcAge: function () {
      this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary : function() {
   return `${this.firstName} is a ${this.calcAge()} old teacher and he has a ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
  }
};



console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas['calcAge'](1991));

// challenge
// "jonas is a 46-year old teacher, and he has a drivers license";
console.log(jonas.getSummary());
*/

// console.log('lifting weights repetition 1')
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 9");
// console.log("lifting weights repetition 10");


// for loop keps running while condition is true
/*
for(let rep = 1; rep <= 10; rep ++) {
  console.log(`lifting weights repetition ${rep}`);
}
*/

/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// // ...
// console.log(jonas[4]);
// jonas[5] does not exist

 for(let i = 0;i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i])
 }

 console.log(types);

 const years = [1991, 2007, 1969, 2020]
 const ages = [];

for(let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}
console.log(ages)

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true
];

// 0, 1, ... 4
// 4, 3 ... 0

for(let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i])
}

for(let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} : Lifting weights repetition ${rep}`)
  }
}