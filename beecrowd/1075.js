const valor = parseInt(lines.shift());

for (let i = 1; i <= 10000; i++) {
  if (i % valor === 2) {
    console.log(i);
  }
}