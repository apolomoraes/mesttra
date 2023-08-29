const inputPeca1 = lines.shift();
const [codigoPeca1, quantidadePeca1, valorUnitarioPeca1] = inputPeca1.split(' ').map(Number);

const inputPeca2 = lines.shift();
const [codigoPeca2, quantidadePeca2, valorUnitarioPeca2] = inputPeca2.split(' ').map(Number);

const valorTotalPeca1 = quantidadePeca1 * valorUnitarioPeca1;
const valorTotalPeca2 = quantidadePeca2 * valorUnitarioPeca2;
const valorTotal = valorTotalPeca1 + valorTotalPeca2;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);