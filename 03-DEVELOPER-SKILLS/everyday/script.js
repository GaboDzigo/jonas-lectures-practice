// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// BUG
*/
/*
// Problem:
// We work for a company building a smart home thermometer. Our most recent taks is this : "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const tempratures = [3, -2, -6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the prob
// - What is temp amplitude?  Answer : difference between highest and lowerst temp
//- how to compute max and min temperaturs?
//- What's a sensor error ? And what to do?

// breaking up into sub-prob
// - How to ignore error?
// - Find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmpLitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmpLitude(tempratures);
console.log(amplitude);

// PRomblem 2:
// function should now reicive 2 arrays of temps

//1) understanding the promblem
// - with 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) breaking up into sub-probs
//- Merge 2 arrays

const calcTempAmpLitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmpLitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX
    value: Number(prompt('Degrees celsius')),
  };
  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measurementKelvin());
*/

//1) understanding the promblem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index + 1

// 2) breaking up into sub-probs
// - Transfrom array into string
// - transform each element to string with C
// - Strings need to contain day(index + 1)
// - Add ... between elements and start and end of string
// - Log to the console.

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C  ... ${data1[1]}°C  ... ${data1[2]}°C  ...`);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C  in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForcast(data1);