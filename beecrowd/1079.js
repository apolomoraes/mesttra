const valor = parseInt(lines.shift());

for (let i = 0; i < valor; i++) {
  const [num1, num2, num3] = lines.shift().split(' ').map(Number);

  const result = ((num1 * 2) + (num2 * 3) + (num3 * 5)) / 10;
  console.log(result.toFixed(1))
}