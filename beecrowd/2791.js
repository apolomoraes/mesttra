const [num1, num2, num3, num4] = lines.shift().split(" ").map(Number);

if (num1 === 1) {
  console.log(1);
} else if (num2 === 1) {
  console.log(2);
} else if (num3 === 1) {
  console.log(3);
} else {
  console.log(4);
}