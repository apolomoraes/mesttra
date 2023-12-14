const prompt = require('prompt-sync')();

const N = parseInt(prompt());

for (let i = 0; i < N; i++) {
  const X = parseInt(prompt());

  let ehPrimo = true;

  if (X <= 1) {
    ehPrimo = false;
  } else {
    for (let j = 2; j <= Math.sqrt(X); j++) {
      if (X % j === 0) {
        ehPrimo = false;
        break;
      }
    }
  }

  if (ehPrimo) {
    console.log(`${X} eh primo`);
  } else {
    console.log(`${X} nao eh primo`);
  }
}
