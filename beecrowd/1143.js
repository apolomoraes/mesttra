const valor = parseInt(lines.shift());

for (let i = 1; i <= valor; i++) {
  let numero = i;
  let quadrado = i * i;
  let cubo = i * i * i;

  console.log(`${numero} ${quadrado} ${cubo}`);
}