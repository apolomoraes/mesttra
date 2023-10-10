const valor1 = parseInt(lines.shift());
const valor2 = parseInt(lines.shift());

let soma = 0;

for (let i = Math.min(valor1, valor2) + 1; i < Math.max(valor1, valor2); i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(soma);