const [a, b] = lines.shift().split(' ').map(n => parseInt(n));

const um = 4.00;
const dois = 4.50;
const tres = 5.00;
const quatro = 2.00;
const cinco = 1.50;

if (a == 1) {
  return console.log(`Total: R$ ${(um * b).toFixed(2)}`);
} else if (a == 2) {
  return console.log(`Total: R$ ${(dois * b).toFixed(2)}`);
} else if (a == 3) {
  return console.log(`Total: R$ ${(tres * b).toFixed(2)}`);
} else if (a == 4) {
  return console.log(`Total: R$ ${(quatro * b).toFixed(2)}`);
} else if (a == 5) {
  return console.log(`Total: R$ ${(cinco * b).toFixed(2)}`);
}
