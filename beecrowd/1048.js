const value = parseFloat(lines.shift());
let newSalary;

if (value > 0 && value <= 400) {
  newSalary = (value + (value * 0.15)).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${(value * 0.15).toFixed(2)}`);
  console.log("Em percentual: 15 %");
} else if (value > 400 && value <= 800) {
  newSalary = (value + (value * 0.12)).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${(value * 0.12).toFixed(2)}`);
  console.log("Em percentual: 12 %");
} else if (value > 800 && value <= 1200) {
  newSalary = (value + (value * 0.10)).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${(value * 0.10).toFixed(2)}`);
  console.log("Em percentual: 10 %");
} else if (value > 1200 && value <= 2000) {
  newSalary = (value + (value * 0.07)).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${(value * 0.07).toFixed(2)}`);
  console.log("Em percentual: 7 %");
} else {
  newSalary = (value + (value * 0.04)).toFixed(2);

  console.log(`Novo salario: ${newSalary}`);
  console.log(`Reajuste ganho: ${(value * 0.04).toFixed(2)}`);
  console.log("Em percentual: 4 %");
}