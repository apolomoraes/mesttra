let x = parseInt(lines.shift());

for (let i = 0; i < 6; i++) {
  if (x % 2 !== 0) {
    console.log(x);
  } else {
    x++;
    console.log(x);
  }
  x += 2;
}