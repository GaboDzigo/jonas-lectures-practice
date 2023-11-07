const worldPopulation = 7900;

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(300);
const percGeorgia3 = percentageOfWorld3(4);

console.log(percChina3, percUSA3, percGeorgia3);