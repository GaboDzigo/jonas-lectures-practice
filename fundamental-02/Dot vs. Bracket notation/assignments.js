const myCountry = {
  country: "Georgia",
  capital: "tbilisi",
  language: "Georgian",
  population: 4,
  neighbours: ["Russia", "Armenia", "Turkey", "azerbaijan"],
};
console.log(`${myCountry.country} has ${myCountry['population']} million ${myCountry.language} speaking people, 3 neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry,population);
myCountry['population'] -= 2  // 4 =