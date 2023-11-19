const worldPopulation = 7900;

const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const descPortugal3 = percentageOfWorld3(10);
const descChina3 = percentageOfWorld3(1441);
const descUSA3 = percentageOfWorld3(332);

console.log(descChina3, descPortugal3, descUSA3);