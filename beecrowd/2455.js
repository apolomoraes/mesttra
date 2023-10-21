const [p1, c1, p2, c2] = lines.shift().split(" ").map(Number);

  if (p1 * c1 === p2 * c2) {
    console.log(0);
  } else if (p1 * c1 < p2 * c2) {
    console.log(1);
  } else {
    console.log(-1);
  }