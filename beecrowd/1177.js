const prompt = require('prompt-sync')();

const valor = parseInt(prompt());

let vetor = [];

for (let i = 0; i < 1000; i++) {
  vetor[i] = i % valor;
}

for (let i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${vetor[i]}`);
}
