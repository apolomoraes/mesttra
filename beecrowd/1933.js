const [valor1, valor2] = lines.shift().split(' ').map(Number);

const result = Math.max(valor1, valor2);

console.log(result);