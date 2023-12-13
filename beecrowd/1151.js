const prompt = require('prompt-sync')();

const valor = parseInt(prompt());

let fib = [0, 1];

for (let i = 2; i < valor; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib.join(' '));
