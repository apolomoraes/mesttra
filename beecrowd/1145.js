const prompt = require('prompt-sync')();

const [valor1, valor2] = prompt().split(' ').map(Number);

for (let i = 1; i <= valor2; i++) {
  process.stdout.write(`${i}`);

  if (i % valor1 === 0 || i === valor2) {
    console.log();
  } else {
    process.stdout.write(' ');
  }
}