const valor = lines.shift();

let fatorial = 1;

for (let i = valor; i > 0; i--) {
  fatorial *= i;
}

console.log(fatorial);