const prompt = require('prompt-sync')();

function calcularOperacao(coluna, operacao, matriz) {
  let soma = 0;
  let quantidadeElementos = 0;

  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][coluna];
    quantidadeElementos++;
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

const coluna = parseInt(prompt());
const operacao = prompt();
const matriz = lerMatriz();

const resultado = calcularOperacao(coluna, operacao, matriz);
console.log(resultado);
