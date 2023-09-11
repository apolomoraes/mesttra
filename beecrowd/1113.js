while (true) {
  let [x, y] = lines.shift().split(' ').map(Number);

  if (x > y) {
    console.log("Decrescente");
  } else if (x < y) {
    console.log("Crescente");
  } else {
    break;
  }
}