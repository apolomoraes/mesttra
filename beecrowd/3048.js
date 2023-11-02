function quantidadeMaximaMarcados(valor, sequencia) {
  let marcados = 1;

  for (let i = 1; i < valor; i++) {
    if (sequencia[i] !== sequencia[i - 1]) {
      marcados++;
    }
  }

  return marcados;
}

const valor = parseInt(lines.shift());
const sequencia = [];

for (let i = 0; i < valor; i++) {
  sequencia.push(parseInt(lines.shift()));
}

const resultado = quantidadeMaximaMarcados(valor, sequencia);

console.log(resultado);