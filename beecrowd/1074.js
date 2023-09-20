const valor = lines.shift();

for (let i = 0; i < valor; i++) {
  const x = parseInt(lines.shift());

  if (x === 0) {
    console.log("NULL");
  } else {
    const parOuImpar = (x % 2 === 0) ? "EVEN" : "ODD";

    const positivoOuNegativo = (x > 0) ? "POSITIVE" : "NEGATIVE";

    console.log(`${parOuImpar} ${positivoOuNegativo}`);
  }
}