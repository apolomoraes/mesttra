const [num1, num2, num3] = lines.shift().split(' ').map(Number);

if (num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2) {
  const perimetro = num1 + num2 + num3;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  const area = ((num1 + num2) * num3) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}