const NumNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (NumNeighbours === 1) {
  console.log("Only 1 border!");
} else if (NumNeighbours > 1) {
  console.log("More then 1 border!");
} else {
  console.log("No borders");
}
