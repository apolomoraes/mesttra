const valor = parseInt(lines.shift());

for (let i = 1; i <= valor; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${i * i}`)
  }
}
