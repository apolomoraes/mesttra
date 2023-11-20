const letra = lines.shift();

const letraMaiuscula = letra.toUpperCase();

const posicao = letraMaiuscula.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

console.log(posicao);