const gastoAutomovel = 12;
const tempo = parseInt(lines.shift());
const velocidadeMedia = parseInt(lines.shift());

const result = (tempo * velocidadeMedia) / gastoAutomovel;

console.log(result.toFixed(3));