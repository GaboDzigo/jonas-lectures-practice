const populations = [10, 1441, 332, 83];
const percentages3 = [];

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

let i = 0;
while(i < populations.length) {
percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}