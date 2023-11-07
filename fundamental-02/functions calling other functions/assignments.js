const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const describePopulation = function (country, population) {
  return `${country} has ${population} million people , wich is about ${percentageOfWorld1(population)} of the world.`;
};

const descChina = describePopulation('China', 1441)
const descUSA = describePopulation("USA", 300);
const descGeorgia = describePopulation("Georgia", 4);

console.log(descChina,descGeorgia,descUSA);