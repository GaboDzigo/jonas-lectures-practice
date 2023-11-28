const myCountry = {
  country: "Georgia",
  capital: "tbilisi",
  language: "Geirgian",
  population: 4,
  neighbours: ["Russia", "Armenia", "Turkey", "azerbaijan"],
  describe : () => {
    console.log(
      `${this.country}  has${this.population} million ${this.language} speaking people, 3 neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: () => {
    this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
  }
};

myCountry.describe();
