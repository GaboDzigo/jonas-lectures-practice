const worldPopulation = 7900;

function percentageOfWorld1(population){
  return (population / worldPopulation) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
}

const descPortugal = percentageOfWorld1(10);
const descChina = percentageOfWorld1(1441);
const descUSA = percentageOfWorld1(332);

console.log(descChina, descPortugal, descUSA);