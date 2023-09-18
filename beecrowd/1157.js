const valor = lines.shift();

for (let i = 1; i <= valor; i++) {
  if (valor % i === 0) {
    console.log(i);
  }
}