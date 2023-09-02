const [num1, num2] = lines.shift().split(' ').map(Number);

if (num1 % num2 === 0 || num2 % num1 === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}