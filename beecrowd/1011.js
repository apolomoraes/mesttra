const entrada = parseFloat(lines.shift());
const pi = 3.14159;

const resultado = (4.0 / 3) * pi * Math.pow(entrada, 3);

console.log(`VOLUME = ${resultado.toFixed(3)}`);