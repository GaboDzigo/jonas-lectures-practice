


function describeCountry(country,population,capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal1 = describeCountry('Poturgal', 10, 'Lisbon');
const descGermany2 = describeCountry('Germany', 83, 'Berlin');
const descFinland3 = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal1, descGermany2, descFinland3);