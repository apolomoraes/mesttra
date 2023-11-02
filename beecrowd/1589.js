const valor = parseInt(lines.shift());

for (let i = 0; i < valor; i++) {
  const [r1, r2] = lines.shift().split(" ").map(Number);

  console.log(r1 + r2);
}