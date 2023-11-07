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