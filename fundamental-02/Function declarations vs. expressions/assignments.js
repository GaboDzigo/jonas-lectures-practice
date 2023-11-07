const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
}


const percChina1 = percentageOfWorld2(1441);
const percUSA1 = percentageOfWorld2(300);
const percGeorgia1 = percentageOfWorld2(4);

console.log(percChina1, percUSA1, percGeorgia1);

