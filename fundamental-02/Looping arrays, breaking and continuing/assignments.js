const populations = [10,1441,332,83];
const percentages2 = [];

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

for(let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}