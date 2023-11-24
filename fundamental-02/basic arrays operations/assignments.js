let neighbours = ['russia','armenia','turkey'];
let newLength = neighbours.push("utopia");
newLength = neighbours.pop();

if(!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('russia')] = 'Russian Federation' ;

console.log(neighbours);
