const listOfNeighbours = [['Canada','Mexico'],['Spain'],['Norway','Sweden','Russia']];
for(let i = listOfNeighbours.length -1; i >= 0; i--) {
  const countries = listOfNeighbours[i];

  for(let y = 0; y < countries.length; y++) {
    console.log(countries[y]);
  }
}