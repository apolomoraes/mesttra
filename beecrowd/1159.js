const prompt = require('prompt-sync')();

let x;

do {
  x = parseInt(prompt());

  if (x !== 0) {
    let soma = 0;

    if (x % 2 !== 0) {
      x++;
    }

    for (let i = 0; i < 5; i++) {
      soma += x;
      x += 2;
    }

    console.log(soma);
  }
} while (x !== 0);