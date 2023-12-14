const prompt = require('prompt-sync')();

const valor = parseInt(prompt());

for (let i = 0; i < valor; i++) {
  const valorFib = parseInt(prompt());

  let fib = [0, 1];

  for (let j = 2; j <= valorFib; j++) {
    fib[j] = fib[j - 1] + fib[j - 2];
  }

  console.log(`Fib(${valorFib}) = ${fib[valorFib]}`);
}
