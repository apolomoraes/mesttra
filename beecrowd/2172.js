while (true) {
  const [a, b] = lines.shift().split(" ").map(Number);

  if (a === 0 && b === 0) {
    break;
  }

  console.log(a * b);
}