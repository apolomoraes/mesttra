const valor = parseInt(lines.shift());

if (valor === 1) {
  console.log("Top 1");
} else if (valor > 1 && valor <= 3) {
  console.log("Top 3");
} else if (valor > 3 && valor <= 5) {
  console.log("Top 5");
} else if (valor > 5 && valor <= 10) {
  console.log("Top 10");
} else if (valor > 10 && valor <= 25) {
  console.log("Top 25");
} else if (valor > 25 && valor <= 50) {
  console.log("Top 50");
} else {
  console.log("Top 100");
}