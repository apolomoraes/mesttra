const prompt = require('prompt-sync')();

const valor = parseInt(prompt());

const valores = prompt().split(' ').map(Number);

let menorValor = valores[0];
let posicaoMenorValor = 0;

for (let i = 1; i < valor; i++) {
  if (valores[i] < menorValor) {
    menorValor = valores[i];
    posicaoMenorValor = i;
  }
}

// Exibir o resultado
console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${posicaoMenorValor}`);
