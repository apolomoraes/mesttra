const countPares = (values) => {
  let count = 0;

  for (let i = 0; i < values.length; i++) {
    const intValue = parseInt(values[i]);
    if (intValue % 2 === 0) {
      count++;
    }
  }

  return count;
};

const valores = [];

for (let i = 0; i < 5; i++) {
  const valor = parseInt(lines.shift(`Digite o valor ${i + 1}:`));
  valores.push(valor);
}

const quantidadePares = countPares(valores);
console.log(`${quantidadePares} valores pares`);