const valor = parseInt(lines.shift());

for (let i = 1; i <= valor; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  console.log(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
}