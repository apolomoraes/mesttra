const numeroFuncionario = parseInt(lines.shift());
const horasTrabalhadas = parseInt(lines.shift());
const recebePorHora = parseFloat(lines.shift());

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${(horasTrabalhadas * recebePorHora).toFixed(2)}`)