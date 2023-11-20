const worldPopulation = 7900;

function describePopulation(country, population) {
  const percentage = worldPopulation(population);
  const description = `${country} has ${population} million people, which is about ${percentage}`;
  return description;
}

function worldPopulation(population) {
  return (population /  worldPopulation) * 100;
}