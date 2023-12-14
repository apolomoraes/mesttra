const prompt = require('prompt-sync')();

let par = [];
let impar = [];

for (let i = 0; i < 15; i++) {
  const numero = parseInt(prompt());

  if (numero % 2 === 0) {
    par.push(numero);

    if (par.length === 5) {
      imprimirVetor('par', par);
      par = [];
    }
  } else {
    impar.push(numero);

    if (impar.length === 5) {
      imprimirVetor('impar', impar);
      impar = [];
    }
  }
}

imprimirVetor('impar', impar);
imprimirVetor('par', par);

function imprimirVetor(tipo, vetor) {
  for (let i = 0; i < vetor.length; i++) {
    console.log(`${tipo}[${i}] = ${vetor[i]}`);
  }
}
