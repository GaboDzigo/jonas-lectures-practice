const country = "georgia";
const continent = "Europe";
let population = 4;
const language = "georgian";
let averagePopulation = 33;

if (population > averagePopulation) {
  console.log(`${country} population is above avarage`);
} else {
  console.log(
    `${country} population is ${
      averagePopulation - population
    } million below avarage`
  );
}
