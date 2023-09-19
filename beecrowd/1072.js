const valor = parseInt(lines.shift());

let contadorDentro = 0;
let contadorFora = 0;

for (let i = 0; i < valor; i++) {
  let num = parseInt(lines.shift());

  if (num >= 10 && num <= 20) {
    contadorDentro++;
  } else {
    contadorFora++;
  }
}
console.log(`${contadorDentro} in`);
console.log(`${contadorFora} out`);