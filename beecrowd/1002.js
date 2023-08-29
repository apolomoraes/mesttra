const raio = parseFloat(lines.shift("Digite o valor do raio:"));
const pi = 3.14159;

const area = pi * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));