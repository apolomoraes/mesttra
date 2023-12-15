const prompt = require('prompt-sync')();

while (true) {
  const [A, B, C] = prompt().split(' ').map(Number);

  if (A === 0) {
    break;
  }

  const areaCasa = A * B;

  const areaMaxima = (100 * areaCasa) / C;

  const ladoTerreno = Math.floor(Math.sqrt(areaMaxima));

  console.log(ladoTerreno);
}
