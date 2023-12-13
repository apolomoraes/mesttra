const prompt = require('prompt-sync')();

const qtd = parseInt(prompt());

for (let i = 0; i < qtd; i++) {
  const entrada = prompt().split(' ').map(Number);
  let valor1 = entrada[0];
  let valor2 = entrada[1];

  let soma = 0;

  for (let j = valor1; valor2 > 0; j++) {
    if (j % 2 !== 0) {
      soma += j;
      valor2--;
    }
  }

  console.log(soma);
}
