const prompt = require('prompt-sync')();

function calcularOperacao(operacao, matriz) {
  let soma = 0;
  let quantidadeElementos = 0;

  for (let i = 1; i < 12; i++) {
    for (let j = 11; j > 11 - i; j--) {
      soma += matriz[i][j];
      quantidadeElementos++;
    }
  }

  return operacao === 'S' ? soma.toFixed(1) : (soma / quantidadeElementos).toFixed(1);
}

function lerMatriz() {
  const matriz = [];

  for (let i = 0; i < 12; i++) {
    const linha = [];

    for (let j = 0; j < 12; j++) {
      linha.push(parseFloat(prompt()));
    }

    matriz.push(linha);
  }

  return matriz;
}

const operacao = prompt();
const matriz = lerMatriz();

const resultado = calcularOperacao(operacao, matriz);
console.log(resultado);
