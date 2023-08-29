function isPar(value) {
  let contador = 0;

  for (let i = 0; i < value.length; i++)
    if (value[i] % 2 == 0) {
      contador++
    }

  return contador;
}

function isImpar(value) {
  let contador = 0;

  for (let i = 0; i < value.length; i++)
    if (value[i] % 2 != 0) {
      contador++
    }

  return contador;
}

function isPositive(value) {
  let contador = 0;

  for (let i = 0; i < value.length; i++)
    if (value[i] > 0) {
      contador++
    }

  return contador;
}

function isNegative(value) {
  let contador = 0;

  for (let i = 0; i < value.length; i++)
    if (value[i] < 0) {
      contador++
    }

  return contador;
}


const valores = [];

for (let i = 0; i < 5; i++) {
  const valor = parseInt(lines.shift(`Digite o valor ${i + 1}:`));
  valores.push(valor);
}

const quantidadePares = isPar(valores);
const quantidadeImpares = isImpar(valores);
const quantidadePositive = isPositive(valores);
const quantidadeNegative = isNegative(valores);
console.log(`${quantidadePares} valor(es) par(es)`);
console.log(`${quantidadeImpares} valor(es) impar(es)`);
console.log(`${quantidadePositive} valor(es) positivo(s)`);
console.log(`${quantidadeNegative} valor(es) negativo(s)`);