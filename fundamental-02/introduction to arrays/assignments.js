const worldPopulation = 7900;
const populations = [14,32,56,83];
console.log(populations.length === 4);

const pecerntages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

 function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
};

console.log(pecerntages)