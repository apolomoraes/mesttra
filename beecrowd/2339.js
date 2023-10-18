const [numCompetidores, numFolhas, numFolhaReceber] = lines.shift().split(' ').map(Number);

const folhasNecessarias = numCompetidores * numFolhaReceber;

if (numFolhas >= folhasNecessarias) {
  console.log('S');
} else {
  console.log('N');
}