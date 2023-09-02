const [num1, num2, num3] = lines.shift().split(' ').map(parseFloat);

const sides = [num1, num2, num3];
sides.sort((a, b) => b - a);

const [A, B, C] = sides;

if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else if (A ** 2 === B ** 2 + C ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (A ** 2 > B ** 2 + C ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (A ** 2 < B ** 2 + C ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}

if (num1 === num2 && num2 === num3) {
  console.log("TRIANGULO EQUILATERO");
} else if (num1 === num2 || num2 === num3 || num1 === num3) {
  console.log("TRIANGULO ISOSCELES");
}