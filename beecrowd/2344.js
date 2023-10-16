const nota = parseInt(lines.shift());

if (nota == 0) {
  console.log("E");
} else if (nota > 0 && nota <= 35) {
  console.log("D");
} else if (nota > 35 && nota <= 60) {
  console.log("C");
} else if (nota > 60 && nota <= 85) {
  console.log("B");
} else {
  console.log("A");
}