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