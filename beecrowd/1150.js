const prompt = require('prompt-sync')();

let X = parseInt(prompt());
let Z = parseInt(prompt());

while (Z <= X) {
  Z = parseInt(prompt());
}

let soma = 0;
let count = 0;

while (soma <= Z) {
  soma += X + count;
  count++;
}

console.log(count);